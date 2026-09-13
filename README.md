# Egner Content Hub

Shared, presentation-independent content for:

- [NicholasEgner.com](https://www.nicholasegner.com)
- [GIGnovate](https://gignovate.com)
- [Late Start Dev](https://latestartdev.com)

The hub owns content and distribution rules. Each website continues to own its
routes, React components, metadata rendering, design, and calls to action.

## Current status

This repository contains the first standalone content service. The existing
website repositories have not been changed to consume it yet.

## Content model

Content is authored as JavaScript data modules:

- `content/blog.js` is one object keyed by post slug.
- `content/projects.js` contains the current shared case studies and exports a
  keyed project map.
- `content/techStack.js` is a flat object keyed by technology slug. Categories
  are properties rather than nested arrays.
- `content/videoWork.js` contains video work, capabilities, and hub assets.
- `content/sites.js` defines site identities, routes, and canonical eligibility.

Technologies do not store their own project lists. Projects and videos reference
technology slugs, and consumers derive reverse relationships from those records.

## Blog distribution and canonical ownership

Every post includes:

```js
showOnGignovate: false,
canonicalSite: "nicholasegner",
```

`showOnGignovate` controls whether the post appears in GIGnovate's feed.
NicholasEgner.com and Late Start Dev receive all published posts by default.

`canonicalSite` may only be `nicholasegner` or `gignovate`. Late Start Dev is a
legacy presentation and is intentionally prevented from becoming canonical.
The API adds a complete `canonicalUrl` to each returned post. Website renderers
must place that URL in the page's canonical metadata for search engines to see it.

All migrated posts currently default to NicholasEgner.com as canonical and are
not opted into GIGnovate. Those choices can be changed post by post later.

## API

| Endpoint | Response |
| --- | --- |
| `/api/blog` | Published posts keyed by slug |
| `/api/projects` | Projects keyed by slug |
| `/api/tech-stack` | Flat technology catalog plus category order |
| `/api/video-work` | Ordered video/webpage items, capabilities, and shared hub assets |

Every endpoint accepts a `site` query parameter:

```text
/api/blog?site=nicholasegner
/api/blog?site=gignovate
/api/blog?site=latestartdev
```

If `site` is omitted, `nicholasegner` is used. Unknown site identifiers return
HTTP 400. Public responses are cacheable and include permissive CORS headers so
the feeds can be consumed across the three domains.

## Development

```bash
npm install
npm run validate
npm test
npm run dev
```

Run `npm run build` before deployment. The build validates all content before
running the Next.js production build.

## Migration plan

1. Deploy this repository as the content API.
2. Point NicholasEgner.com at the new API and verify parity.
3. Point Late Start Dev at the new blog endpoint.
4. Connect GIGnovate to its filtered blog, project, technology, and video feeds.
5. Remove duplicated source data from site repositories only after every
   consumer is verified.
