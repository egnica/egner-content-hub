export const sites = {
  nicholasegner: {
    id: "nicholasegner",
    name: "Nicholas Egner",
    baseUrl: "https://www.nicholasegner.com",
    paths: {
      blog: "/blog",
      projects: "/projects",
      technologies: "/skills",
      videos: "/video",
    },
    canBeCanonical: true,
  },
  gignovate: {
    id: "gignovate",
    name: "GIGnovate",
    baseUrl: "https://gignovate.com",
    paths: {
      blog: "/blog",
      projects: "/projects",
      technologies: "/skills",
      videos: "/video",
    },
    canBeCanonical: true,
  },
  latestartdev: {
    id: "latestartdev",
    name: "Late Start Dev",
    baseUrl: "https://latestartdev.com",
    paths: {
      blog: "/posts",
      projects: null,
      technologies: null,
      videos: null,
    },
    canBeCanonical: false,
    legacy: true,
  },
};

export const canonicalSiteIds = Object.values(sites)
  .filter((site) => site.canBeCanonical)
  .map((site) => site.id);

export default sites;

