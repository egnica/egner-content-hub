import assert from "node:assert/strict";
import test from "node:test";

import posts from "../content/blog.js";
import technologies from "../content/techStack.js";
import { videoCapabilities } from "../content/videoWork.js";
import {
  getBlog,
  getBlogPost,
  getCanonicalUrl,
  getProjects,
} from "../lib/content.js";

test("blog retains direct keyed lookup", () => {
  assert.equal(posts["hello-world"].slug, "hello-world");
  assert.equal(getBlogPost("hello-world")?.slug, "hello-world");
});

test("GIGnovate receives only opted-in posts", () => {
  const gignovatePosts = getBlog("gignovate");

  assert.ok(
    Object.values(gignovatePosts).every(
      (post) => post.showOnGignovate === true,
    ),
  );
});

test("LateStartDev never becomes canonical", () => {
  const latestartPosts = getBlog("latestartdev");

  assert.ok(Object.keys(latestartPosts).length > 0);
  assert.ok(
    Object.values(latestartPosts).every(
      (post) => post.canonicalSite !== "latestartdev",
    ),
  );
});

test("canonical URLs follow the owning site", () => {
  assert.equal(
    getCanonicalUrl({
      slug: "example",
      canonicalSite: "nicholasegner",
    }),
    "https://www.nicholasegner.com/blog/example",
  );

  assert.equal(
    getCanonicalUrl({ slug: "example", canonicalSite: "gignovate" }),
    "https://gignovate.com/blog/example",
  );
});

test("technology catalog is flat and keyed by slug", () => {
  assert.equal(technologies.nextjs.slug, "nextjs");
  assert.equal(technologies.nextjs.category, "Front End");
  assert.equal("technologies" in technologies.nextjs, false);
});

test("projects are available as a keyed collection", () => {
  assert.equal(getProjects()["davis-defense"].slug, "davis-defense");
});

test("video capabilities retain direct keyed lookup", () => {
  assert.equal(videoCapabilities.production.slug, "production");
  assert.equal(videoCapabilities["video-seo"].label, "Video SEO");
});
