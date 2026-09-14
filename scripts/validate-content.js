import posts from "../content/blog.js";
import projects from "../content/projects.js";
import technologies, { categoryOrder } from "../content/techStack.js";
import { videoCapabilities, videoWork } from "../content/videoWork.js";
import sites, { canonicalSiteIds } from "../content/sites.js";

const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

function validateKeyedCollection(collection, name) {
  for (const [key, item] of Object.entries(collection)) {
    check(Boolean(item), `${name}.${key} must contain a record`);
    check(item?.slug === key, `${name}.${key} must use slug "${key}"`);
  }
}

validateKeyedCollection(posts, "blog");
validateKeyedCollection(projects, "projects");
validateKeyedCollection(technologies, "technologies");
validateKeyedCollection(videoCapabilities, "videoCapabilities");

check(!canonicalSiteIds.includes("latestartdev"), "LateStartDev cannot be canonical");
check(sites.latestartdev?.canBeCanonical === false, "LateStartDev must remain noncanonical");

for (const [slug, post] of Object.entries(posts)) {
  check(
    typeof post.showOnGignovate === "boolean",
    `blog.${slug}.showOnGignovate must be a boolean`,
  );
  check(
    canonicalSiteIds.includes(post.canonicalSite),
    `blog.${slug}.canonicalSite must be nicholasegner or gignovate`,
  );
  check(Array.isArray(post.contentBlocks), `blog.${slug}.contentBlocks must be an array`);
}

for (const [slug, technology] of Object.entries(technologies)) {
  check(!("projects" in technology), `technologies.${slug} must not duplicate project relationships`);
  check(
    categoryOrder.includes(technology.category),
    `technologies.${slug} uses unknown category "${technology.category}"`,
  );
}

for (const [slug, project] of Object.entries(projects)) {
  for (const technologySlug of project.stack || []) {
    check(
      Boolean(technologies[technologySlug]),
      `projects.${slug} references unknown technology "${technologySlug}"`,
    );
  }
}

const capabilitySlugs = new Set(Object.keys(videoCapabilities));
const videoSlugs = new Set();

for (const video of videoWork) {
  if (video.type === "video") {
    check(Boolean(video.slug), `Video item "${video.title}" must have a slug`);
  }

  if (video.slug) {
    check(!videoSlugs.has(video.slug), `Duplicate video slug "${video.slug}"`);
    videoSlugs.add(video.slug);
  }

  if (video.type === "webpage") {
    check(Boolean(video.url), `Webpage item "${video.title}" must have a URL`);
  }

  for (const capability of video.capabilities || []) {
    check(
      capabilitySlugs.has(capability),
      `video.${video.slug} references unknown capability "${capability}"`,
    );
  }

  for (const technologySlug of video.skills || []) {
    check(
      Boolean(technologies[technologySlug]),
      `video.${video.slug} references unknown technology "${technologySlug}"`,
    );
  }
}

if (errors.length) {
  console.error(`Content validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Validated ${Object.keys(posts).length} posts, ${Object.keys(projects).length} projects, ` +
    `${Object.keys(technologies).length} technologies, and ${videoWork.length} video items.`,
);
