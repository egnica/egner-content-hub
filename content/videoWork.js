export const videoCapabilities = [
  {
    slug: "production",
    label: "Production",
    description:
      "Video work involving capture, interviews, event coverage, branded storytelling, and the production process before the edit.",
    image:
      "<svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='20' fill='#111827'/><rect x='19' y='31' width='43' height='34' rx='8' fill='none' stroke='#fff' stroke-width='5'/><path d='m62 40 15-8v32l-15-8V40Z' fill='#76d7ff'/><circle cx='40.5' cy='48' r='8' fill='none' stroke='#fff' stroke-width='4'/></svg>",
  },
  {
    slug: "editing",
    label: "Editing",
    description:
      "Post-production focused on story structure, pacing, audio, sequencing, finishing, and shaping raw footage into a clear final piece.",
    image:
      "<svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='editG' x1='12' y1='84' x2='84' y2='12'><stop stop-color='#4d27a8'/><stop offset='1' stop-color='#76d7ff'/></linearGradient></defs><rect x='3' y='3' width='90' height='90' rx='20' fill='url(#editG)'/><path d='M22 29h52M22 48h52M22 67h52' stroke='#fff' stroke-width='5' stroke-linecap='round'/><path d='M37 23v12M58 42v12M45 61v12' stroke='#fff' stroke-width='7' stroke-linecap='round'/></svg>",
  },
  {
    slug: "motion",
    label: "Motion",
    description:
      "Motion graphics, compositing, animated titles, interface motion, and visual elements that add clarity and energy to video or digital experiences.",
    image:
      "<svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='motionG' x1='10' y1='86' x2='86' y2='10'><stop stop-color='#211a73'/><stop offset='1' stop-color='#bbaaff'/></linearGradient></defs><rect x='3' y='3' width='90' height='90' rx='20' fill='url(#motionG)'/><path d='M18 55c11 0 11-20 22-20s11 26 22 26 11-20 16-20' fill='none' stroke='#fff' stroke-width='6' stroke-linecap='round'/><circle cx='18' cy='55' r='4' fill='#76d7ff'/><circle cx='78' cy='41' r='4' fill='#76d7ff'/></svg>",
  },
  {
    slug: "video-seo",
    label: "Video SEO",
    description:
      "Video publishing systems that connect YouTube, dedicated watch pages, metadata, structured data, internal links, and supporting content for search visibility.",
    image:
      "<svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='vseoG' x1='10' y1='86' x2='86' y2='10'><stop stop-color='#126b54'/><stop offset='1' stop-color='#76d7ff'/></linearGradient></defs><rect x='3' y='3' width='90' height='90' rx='20' fill='url(#vseoG)'/><circle cx='39' cy='41' r='19' fill='none' stroke='#fff' stroke-width='5'/><path d='m53 55 19 19' stroke='#fff' stroke-width='6' stroke-linecap='round'/><path d='m34 31 14 10-14 10V31Z' fill='#fff'/></svg>",
  },
  {
    slug: "interactive",
    label: "Interactive Experiences",
    description:
      "Custom web experiences where video is combined with interfaces, timed content, watch pages, supporting links, and other interactive elements.",
    image:
      "<svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='interactiveG' x1='12' y1='84' x2='84' y2='12'><stop stop-color='#2a45f9'/><stop offset='1' stop-color='#bbaaff'/></linearGradient></defs><rect x='3' y='3' width='90' height='90' rx='20' fill='url(#interactiveG)'/><rect x='18' y='20' width='60' height='46' rx='7' fill='none' stroke='#fff' stroke-width='5'/><path d='m42 32 18 11-18 11V32Z' fill='#fff'/><path d='m52 55 10 22 5-9 10-5-25-8Z' fill='#76d7ff' stroke='#fff' stroke-width='2' stroke-linejoin='round'/></svg>",
  },
];

export const videoWork = [
  {
    title: "Your Gardens By Design",
    type: "video",
    url: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/your-gardens.mp4",
    poster:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/video/thumbnails/yourGardens-Thumb.png",
    slug: "your-gardens-by-design",
    category: "Brand Storytelling",
    capabilities: ["production", "editing"],
    mainStage: true,
    description:
      "A brand video built around personality, place, and the real client experience behind a local garden design business.",
    details: [
      "The piece focuses on the people and environment behind Your Gardens By Design rather than treating the business like a generic service.",
      "It is a useful example of how interview-led storytelling and thoughtful editing can make a small business feel more human, credible, and memorable online.",
    ],
    skills: ["premiere", "aftereffects", "photoshop"],
    relatedPages: [
      {
        label: "Read the project article",
        url: "/blog/your-gardens-by-design-video",
      },
    ],
    duration: "PT2M23S",
  },
  {
    title: "Whittier Neighborhood Documentary",
    type: "video",
    url: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website-videos/whittier.mp4",
    poster: null,
    slug: "whittier-neighborhood-documentary",
    category: "Documentary Storytelling",
    capabilities: ["production", "editing", "motion"],
    mainStage: true,
    description:
      "A community-focused documentary piece showing a more editorial approach to interview structure, pacing, and neighborhood storytelling.",
    details: [
      "This project represents the documentary side of my video work: shaping interviews, observational footage, and environmental details into a coherent story.",
      "The emphasis is on pacing and context rather than promotional language, giving the subject room to carry the piece.",
    ],
    skills: ["premiere"],
    relatedPages: [],
  },
  {
    title: "YWCA Women's Triathlon",
    type: "video",
    url: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website-videos/YWCA-+Womans-Triathlon.mp4",
    poster: null,
    slug: "ywca-womens-triathlon",
    category: "Event Video",
    capabilities: ["production", "editing"],
    mainStage: true,
    description:
      "Event storytelling that turns the energy, people, and atmosphere of a live experience into an edited piece that can keep working after the event.",
    details: [
      "The edit is included as an example of event-focused video work where momentum, visual variety, and human moments need to work together.",
      "Event video can extend the value of a live experience through websites, social channels, follow-up communication, and future promotion.",
    ],
    skills: ["premiere"],
    relatedPages: [],
  },
  {
    title: "Landscape Structures",
    type: "video",
    url: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website-videos/Landscape.mp4",
    poster: null,
    slug: "landscape-structures",
    category: "Branded Collaboration",
    capabilities: ["production", "editing"],
    mainStage: true,
    description:
      "A branded collaboration that demonstrates concise visual storytelling, professional pacing, and a polished edit for an organizational audience.",
    details: [
      "This piece sits between promotional and corporate storytelling, where the edit needs to support the brand without overwhelming the subject.",
      "It is part of a broader body of work spanning branded collaborations, event communication, documentary storytelling, and motion-based content.",
    ],
    skills: ["premiere", "aftereffects"],
    relatedPages: [],
  },
  {
    title: "Barlow Research Conference 2024",
    type: "video",
    url: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website-videos/bbc.mp4",
    poster:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/images/projects/BBC-2024.webp",
    slug: "barlow-research-conference-2024",
    category: "Corporate & Conference Video",
    capabilities: ["production", "editing"],
    mainStage: true,
    description:
      "Conference video designed to turn a live professional event into an ongoing branded storytelling asset.",
    details: [
      "Conference and panel content can continue working after the event through recap videos, social sharing, internal communication, and thought-leadership content.",
      "This work reflects my approach to narrative pacing, branded motion graphics, and clear messaging for professional audiences.",
    ],
    skills: ["premiere", "aftereffects"],
    relatedPages: [],
  },
  {
    title: "Barlow Conference Edit",
    type: "video",
    url: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website-videos/BBC_2024-2.mp4",
    poster:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/images/projects/BBC-2024.webp",
    slug: "barlow-conference-edit",
    category: "Corporate & Conference Video",
    capabilities: ["editing", "motion"],
    mainStage: false,
    description:
      "A second conference edit showing how live-event footage can be shaped into concise branded communication for a professional audience.",
    details: [
      "The piece is part of a larger conference-content workflow rather than a one-off video.",
      "That broader approach is useful when an organization wants to turn one live event into multiple reusable digital assets.",
    ],
    skills: ["premiere", "aftereffects"],
    relatedPages: [],
  },
  {
    title: "Past Work Video Reel",
    type: "video",
    url: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website-videos/demo.mp4",
    poster: null,
    slug: "past-work-video-reel",
    category: "Video Reel",
    capabilities: ["production", "editing", "motion"],
    mainStage: true,
    description:
      "A broader reel sampling earlier video work across storytelling, branded content, event coverage, and editing.",
    details: [
      "This reel brings together a wider range of earlier production and post-production work in one place.",
      "It is useful as a quick overview of editing range before moving into the more focused project examples across the rest of the video portfolio.",
    ],
    skills: ["premiere", "aftereffects"],
    relatedPages: [
      {
        label: "Watch the YouTube version",
        url: "https://www.youtube.com/watch?v=7NM8T8zdUlU",
      },
    ],
  },
  {
    title: "Additional Video Example",
    type: "webpage",
    url: "https://www.youtube.com/watch?v=nf5OKwHhA90",
    poster: null,
    slug: null,
    category: "External Video",
    capabilities: ["editing"],
    mainStage: false,
    description:
      "An additional example from earlier video work, included as part of the broader editing and production portfolio.",
    details: [],
    skills: ["premiere"],
    relatedPages: [],
  },
  {
    title: "Let Us Clean Social Content",
    type: "webpage",
    url: "https://www.facebook.com/share/r/1GFJkvd1zh/",
    poster: null,
    slug: null,
    category: "Social Video",
    capabilities: ["production", "editing"],
    mainStage: false,
    description:
      "Short-form social content created to give a local service business more useful, human video assets for social channels.",
    details: [],
    skills: ["premiere"],
    relatedPages: [
      {
        label: "Watch social clip 2",
        url: "https://www.facebook.com/share/r/1E8YJJkg98/",
      },
      {
        label: "Watch social clip 3",
        url: "https://www.facebook.com/share/r/1Cu1edzEyd/",
      },
    ],
  },
  {
    title: "Interactive Video Experience",
    type: "webpage",
    url: "/video-experience",
    poster:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/images/video-experience.webp",
    slug: null,
    category: "Interactive Video",
    capabilities: ["editing", "motion", "interactive"],
    mainStage: false,
    description:
      "A custom web experience where buttons, links, and supporting content appear in sync with the video's timeline.",
    details: [],
    skills: ["premiere", "react", "framermotion"],
    relatedPages: [],
  },
  {
    title: "Davis Defense Video Hub",
    type: "webpage",
    url: "https://www.davisdefenselawyers.com/video",
    poster:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/andrewDavis/Videos-davis/thumbnail/video-library.webp",
    slug: null,
    category: "Video SEO & Publishing",
    capabilities: ["editing", "video-seo", "interactive"],
    mainStage: false,
    description:
      "A video publishing system combining production, dedicated watch pages, structured data, internal linking, and search-focused presentation.",
    details: [],
    skills: ["premiere", "nextjs"],
    relatedPages: [
      {
        label: "View the Davis Defense case study",
        url: "/projects/davis-defense",
      },
      {
        label: "Read the Video SEO Trifecta article",
        url: "/blog/video-seo-trifecta",
      },
    ],
  },
  {
    title: "Video SEO Trifecta",
    type: "webpage",
    url: "/blog/video-seo-trifecta",
    poster:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/images/video_seo_thumbnail.png",
    slug: null,
    category: "Video SEO Strategy",
    capabilities: ["video-seo"],
    mainStage: false,
    description:
      "A deeper look at how video, YouTube, watch pages, metadata, and supporting website content can work together for search visibility.",
    details: [],
    skills: ["premiere", "nextjs"],
    relatedPages: [],
  },
];

export const videoHubAssets = {
  hero: "https://nciholasegner.s3.us-east-2.amazonaws.com/video-page-website/video-edit.webp",
  production:
    "https://nciholasegner.s3.us-east-2.amazonaws.com/video-page-website/camera-dlsr-rig.webp",
  studio:
    "https://nciholasegner.s3.us-east-2.amazonaws.com/video-page-website/green-screen.webp",
  fallbackPoster:
    "https://nciholasegner.s3.us-east-2.amazonaws.com/images/video-examples.webp",
};

export function getVideoWork(slug) {
  return videoWork.find((item) => item.slug === slug);
}

export function getMainStageVideos() {
  return videoWork.filter(
    (item) => item.type === "video" && item.mainStage === true,
  );
}
