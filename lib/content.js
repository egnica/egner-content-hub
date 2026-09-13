import posts from "../content/blog.js";
import projects from "../content/projects.js";
import technologies, { categoryOrder } from "../content/techStack.js";
import {
  videoCapabilities,
  videoHubAssets,
  videoWork,
} from "../content/videoWork.js";
import sites, { canonicalSiteIds } from "../content/sites.js";

export const DEFAULT_SITE_ID = "nicholasegner";

export function assertSiteId(siteId) {
  if (!sites[siteId]) {
    throw new RangeError(`Unknown site: ${siteId}`);
  }

  return siteId;
}

export function isPublished(item) {
  return item?.live !== false && item?.published !== false;
}

export function isVisibleOnSite(item, siteId, collection) {
  assertSiteId(siteId);

  if (!isPublished(item)) return false;

  if (Array.isArray(item.sites)) {
    return item.sites.includes(siteId);
  }

  if (collection === "blog" && siteId === "gignovate") {
    return item.showOnGignovate === true;
  }

  return true;
}

export function getCanonicalUrl(post) {
  const canonicalSite = post.canonicalSite || DEFAULT_SITE_ID;

  if (!canonicalSiteIds.includes(canonicalSite)) {
    throw new RangeError(
      `Invalid canonical site for ${post.slug || "post"}: ${canonicalSite}`,
    );
  }

  const site = sites[canonicalSite];
  return `${site.baseUrl}${site.paths.blog}/${post.slug}`;
}

export function normalizePost(post, fallbackSlug) {
  const slug = post.slug || fallbackSlug;
  const normalized = {
    ...post,
    slug,
    showOnGignovate: post.showOnGignovate === true,
    canonicalSite: post.canonicalSite || DEFAULT_SITE_ID,
  };

  return {
    ...normalized,
    canonicalUrl: getCanonicalUrl(normalized),
  };
}

export function getBlog(siteId = DEFAULT_SITE_ID) {
  assertSiteId(siteId);

  return Object.fromEntries(
    Object.entries(posts)
      .filter(([, post]) => isVisibleOnSite(post, siteId, "blog"))
      .map(([slug, post]) => [slug, normalizePost(post, slug)]),
  );
}

export function getBlogPost(slug, siteId = DEFAULT_SITE_ID) {
  const post = posts[slug];

  if (!post || !isVisibleOnSite(post, siteId, "blog")) return null;
  return normalizePost(post, slug);
}

function filterKeyedCollection(collection, siteId, collectionName) {
  assertSiteId(siteId);

  return Object.fromEntries(
    Object.entries(collection).filter(([, item]) =>
      isVisibleOnSite(item, siteId, collectionName),
    ),
  );
}

export function getProjects(siteId = DEFAULT_SITE_ID) {
  return filterKeyedCollection(projects, siteId, "projects");
}

export function getTechStack(siteId = DEFAULT_SITE_ID) {
  return {
    categoryOrder,
    technologies: filterKeyedCollection(
      technologies,
      siteId,
      "technologies",
    ),
  };
}

export function getVideoContent(siteId = DEFAULT_SITE_ID) {
  assertSiteId(siteId);

  const items = videoWork.filter((item) =>
    isVisibleOnSite(item, siteId, "videos"),
  );

  return {
    capabilities: Object.fromEntries(
      videoCapabilities.map((capability) => [capability.slug, capability]),
    ),
    items,
    assets: videoHubAssets,
  };
}
