import assert from "node:assert/strict";
import test from "node:test";

import { GET as getBlogRoute } from "../app/api/blog/route.js";
import { GET as getProjectsRoute } from "../app/api/projects/route.js";
import { GET as getTechStackRoute } from "../app/api/tech-stack/route.js";
import { GET as getVideoWorkRoute } from "../app/api/video-work/route.js";

function request(path) {
  return new Request(`https://content.example.com${path}`);
}

test("blog route returns keyed Nicholas content", async () => {
  const response = await getBlogRoute(request("/api/blog?site=nicholasegner"));
  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data["hello-world"].slug, "hello-world");
});

test("blog route keeps GIGnovate opt-in", async () => {
  const response = await getBlogRoute(request("/api/blog?site=gignovate"));
  const data = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(data, {});
});

test("unknown sites receive a useful client error", async () => {
  const response = await getBlogRoute(request("/api/blog?site=unknown"));
  const data = await response.json();

  assert.equal(response.status, 400);
  assert.equal(data.error, "Unknown site: unknown");
});

test("projects route returns four keyed case studies", async () => {
  const response = await getProjectsRoute(request("/api/projects"));
  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(Object.keys(data).length, 4);
  assert.equal(data["davis-defense"].slug, "davis-defense");
});

test("technology route returns the 34-item flat catalog", async () => {
  const response = await getTechStackRoute(request("/api/tech-stack"));
  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(Object.keys(data.technologies).length, 34);
  assert.equal(data.technologies.nextjs.category, "Front End");
});

test("video route preserves all ordered video and webpage entries", async () => {
  const response = await getVideoWorkRoute(request("/api/video-work"));
  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data.items.length, 12);
  assert.equal(data.items.filter((item) => item.type === "webpage").length, 5);
});

