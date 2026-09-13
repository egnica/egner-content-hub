export const projects = [
  {
    title: "Davis Defense",
    slug: "davis-defense",
    eyebrow: "Legal Visibility & Trust System",

    summary:
      "An ongoing digital support project focused on helping a criminal defense attorney build trust, improve visibility, and publish useful legal content across his website, video hub, Google Business Profile, and social channels.",

    role: [
      "Website creation, support and maintenance",
      "Video editing and publishing",
      "Video hub strategy",
      "Video watch page creation",
      "Google Business Profile support",
      "Review generation strategy",
      "Social media overhaul",
      "LinkedIn profile and presence updates",
      "Content structure and metadata support",
    ],

    preview: {
      problem:
        "The firm needed a stronger digital presence that could build trust before a potential client ever reached out. The work needed to connect website content, video, reviews, social activity, and Google Business visibility into one clearer system.",

      approach:
        "I built the firm’s website into a stronger digital foundation, created and published legal explainer videos, developed dedicated video watch pages, helped improve the Google Business Profile, encouraged a more active review strategy, and refreshed the firm’s social presence, including LinkedIn.",

      result:
        "The project helped turn scattered digital activity into a more connected visibility system, giving potential clients more ways to find the firm, understand legal topics, see proof of trust, and engage with the attorney’s content.",
    },

    capabilities: [
      {
        title: "Website Build & Digital Structure",
        summary:
          "Built the firm’s website into a stronger digital foundation by organizing legal topics, video content, and trust-building material into a clearer, more useful experience for prospective clients.",
      },
      {
        title: "Video Hub & Watch Pages",
        summary:
          "Built a structured video content system with dedicated watch pages for individual legal topics, including titles, descriptions, thumbnails, metadata, and related website content.",
      },
      {
        title: "Google Business & Review Strategy",
        summary:
          "Supported the firm’s Google Business Profile and helped create a stronger review-generation rhythm to improve trust signals and local search presence.",
      },
      {
        title: "Social Media & LinkedIn Revamp",
        summary:
          "Refreshed the firm’s social presence, including LinkedIn updates, and supported ongoing publishing around legal explainer videos, reviews, and trust-building content.",
      },
    ],

    stack: [
      "nextjs",
      "react",
      "css",
      "amazons3",
      "youtube",
      "premiere",
      "aftereffects",
    ],

    heroMedia: {
      type: "video",
      src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/davis-website-loop.mp4",
      alt: "Davis Defense website, video hub, and social content preview",
      caption:
        "Website, video, Google Business, and social content working together as a digital visibility system.",
    },

    links: [
      {
        label: "Visit Website",
        url: "https://www.davisdefenselawyers.com/",
        type: "live",
      },
      {
        label: "View Video Hub",
        url: "https://www.davisdefenselawyers.com/video",
        type: "feature",
      },
      {
        label: "Example Watch Page",
        url: "https://www.davisdefenselawyers.com/video/dwi-charges-minnesota",
        type: "feature",
      },
    ],

    caseStudy: {
      overview:
        "Davis Defense is an ongoing visibility and trust-building project for a criminal defense attorney. The work connects website support, legal explainer videos, dedicated video watch pages, Google Business Profile activity, client reviews, and social media updates into a stronger digital presence. Rather than treating each channel as separate, the project focuses on making the firm easier to find, understand, and trust.",

      highlights: [
        "Created and published legal explainer videos around criminal defense topics",
        "Built dedicated video watch pages with topic-specific titles, descriptions, thumbnails, and metadata",
        "Supported the firm’s Google Business Profile and review-generation efforts",
        "Helped increase the firm’s trust signals through stronger use of reviews and social proof",
        "Revamped social media presentation, including LinkedIn profile and content updates",
        "Connected website content, video publishing, social posts, and Google visibility into a more unified system",
        "Maintained ongoing website updates and content support for the firm",
      ],
    },

    media: [
      {
        type: "video",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/video-hub.mp4",
        alt: "Davis Defense video hub preview",
        sectionTitle: "Video Hub",
        description:
          "A structured video hub for organizing legal explainer content around criminal defense topics and making that content easier to browse from the website.",
        caption: "Legal video hub experience.",
      },
      {
        type: "video",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/watch_page.mp4",
        alt: "Davis Defense legal video watch page",
        sectionTitle: "Video Watch Pages",
        description:
          "Dedicated watch pages give each video its own focused destination with a title, description, thumbnail, metadata, and supporting legal context.",
        caption: "Example legal video watch page.",
      },
      {
        type: "image",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/andrewDavis/Videos-davis/thumbnail/video-library.webp",
        alt: "Video Thumbnail",
      },
      {
        type: "image",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/thumbnails/davis-linkedin.webp",
        alt: "Davis Defense social media and LinkedIn refresh",
        sectionTitle: "Social Media & LinkedIn",
        description:
          "Social channels were refreshed and used to support video publishing, legal topic education, review visibility, and ongoing trust-building.",
        caption: "Social media and LinkedIn presence updates.",
      },
    ],

    seo: {
      title: "Davis Defense Project | Nicholas Egner",
      description:
        "A legal visibility and trust-building project involving website support, video hub strategy, video watch pages, Google Business Profile support, reviews, social media, and LinkedIn updates.",
    },
  },
  {
    title: "Let Us Clean MN",
    slug: "let-us-clean-mn",
    eyebrow: "Local Visibility & Client Communication System",

    summary:
      "A connected digital and operations project for a Minnesota cleaning service, combining a new web presence, local SEO, Google Business Profile support, reviews, short-form video, and a custom Google Calendar-to-Quo SMS automation system for client communication.",

    role: [
      "Web presence creation",
      "Local SEO support",
      "Google Business Profile setup",
      "Service positioning",
      "Review and rating strategy",
      "Metadata and search context",
      "Google Calendar integration",
      "MongoDB job synchronization",
      "Quo SMS automation",
      "Automated day-before, day-of and completion messaging",
      "Automation state and error-handling design",
      "Short-form video editing",
      "Reels content support",
      "Social content support",
    ],

    preview: {
      problem:
        "The business needed both a stronger public presence and a more reliable way to manage recurring client communication around scheduled cleanings. Appointments lived in Google Calendar, while reminders and follow-up texts required repetitive manual work.",

      approach:
        "I created the business’s web and local-search foundation, then built a Next.js automation app that syncs Google Calendar events into MongoDB on a 15-minute cadence. Events with a Phone: field in the calendar description are eligible for automation, while other events can still sync without triggering messages. Quo powers the SMS workflow for day-before, day-of, and completion messages. The system tracks send state, cancellations, disabled records, and a rolling seven-day active window so calendar changes can be reflected without blindly sending texts.",

      result:
        "The project connected visibility work with operations. The business gained a clearer website and Google presence while also getting a custom communication workflow designed to reduce repetitive reminder texting and keep scheduled client messages tied to the calendar. The automation work reached implementation before the broader project was paused as the business situation changed.",
    },

    capabilities: [
      {
        title: "Web Presence From Scratch",
        summary:
          "Created the business’s initial online presence so potential customers could find, understand, and contact the cleaning service.",
      },
      {
        title: "Calendar-Driven SMS Automation",
        summary:
          "Built a Next.js workflow connecting Google Calendar, MongoDB, and Quo. Upcoming appointments sync on a 15-minute cadence, a Phone: field in the calendar description gates SMS automation, and message state supports day-before, day-of, and completion communication with cancellation and outage safeguards.",
      },
      {
        title: "Google Business Profile Setup",
        summary:
          "Set up the Google Business Profile and aligned the business information around local cleaning service searches.",
      },
      {
        title: "Review & Rating Strategy",
        summary:
          "Helped the business begin using Google ratings and reviews as trust signals that support credibility and local search visibility.",
      },
      {
        title: "Short-Form Video & Reels Editing",
        summary:
          "Edited video content for social platforms, helping turn cleaning work, brand personality, and service proof into usable short-form content.",
      },
    ],

    stack: [
      "nextjs",
      "react",
      "mongodb",
      "amplify",
      "googlebusiness",
      "premiere",
      "aftereffects",
      "photoshop",
      "seo",
    ],

    heroMedia: {
      type: "video",
      src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/LUC_loop.mp4",
      alt: "Let Us Clean MN web presence, Google Business Profile, social video, and client communication system preview",
      caption:
        "A connected local visibility and client communication system combining web, Google Business, video, and appointment-driven SMS automation.",
    },

    links: [
      {
        label: "Visit Website",
        url: "https://www.letuscleanmn.com/",
        type: "live",
      },
      {
        label: "View Google Business Profile",
        url: "https://maps.app.goo.gl/7RcrwJzZW5PhrWV4A",
        type: "google-business",
      },
      {
        label: "View Social Example",
        url: "https://www.facebook.com/share/r/18hhPPUxQd/",
        type: "social",
      },
    ],

    caseStudy: {
      overview:
        "Let Us Clean MN grew from a local-search foundation into a broader digital operations project. I created the business’s web presence, set up its Google Business Profile, supported review and rating strategy, edited short-form video, and built a custom client communication system that used Google Calendar as the scheduling source, MongoDB as the job-state layer, and Quo for automated SMS. The automation was designed around the way the business already scheduled cleanings, so client communication could follow calendar changes instead of creating a second scheduling system.",

      highlights: [
        "Created the business’s initial web presence",
        "Set up the Google Business Profile from scratch",
        "Structured the business information around local cleaning service searches",
        "Built a Next.js automation application for scheduled client communication",
        "Connected Google Calendar scheduling to a MongoDB job database",
        "Synced upcoming calendar events on a 15-minute cadence with a seven-day forward automation window",
        "Used a Phone: field in calendar event descriptions to determine which appointments were eligible for automated messaging",
        "Integrated Quo for day-before, day-of, and completion SMS workflows",
        "Tracked per-job automation state so messages would not be sent more than once",
        "Designed handling for cancelled and completed jobs, disabled out-of-window records, late-created appointments, and temporary Google Calendar outages",
        "Helped establish a Google review and rating strategy to support trust and local visibility",
        "Edited short-form video content for Reels and social media use",
        "Connected web presence, Google visibility, reviews, social content, scheduling, and client communication into one broader business system",
      ],
    },

    media: [
      {
        type: "image",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/luc-google.webp",
        alt: "Let Us Clean MN Google Business Profile setup",
        sectionTitle: "Google Business Profile Setup",
        description:
          "The business started without a Google Business Profile. Setting it up created a local search presence where customers could find business information, see ratings, and build trust before reaching out.",
        caption: "Google Business Profile setup and local trust signals.",
      },
      {
        type: "image",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/luc-seo.webp",
        alt: "Let Us Clean MN web presence and local SEO foundation",
        sectionTitle: "Web Presence & Local SEO",
        description:
          "The project created the business’s initial web presence and aligned the service information around local cleaning searches, giving the company a clearer foundation for discovery.",
        caption: "Initial web presence and local SEO foundation.",
      },
      {
        type: "video",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/LUC_reel-scale.mp4",
        alt: "Let Us Clean MN short-form cleaning service video",
        sectionTitle: "Short-Form Video Content",
        description:
          "Edited social video content designed for Reels and other short-form platforms, helping the business show its work and stay active with local audiences.",
        caption: "Short-form video editing for social content.",
      },
    ],

    seo: {
      title: "Let Us Clean MN Project | Nicholas Egner",
      description:
        "A connected local visibility and operations project for Let Us Clean MN, including web development, Google Business Profile setup, local SEO, Google Calendar scheduling, MongoDB job sync, Quo SMS automation, reviews, and short-form video.",
    },
  },
  {
    title: "Kenny’s Folder Services",
    slug: "kennys-folder-services",
    eyebrow: "Service Business Rebrand & Search Foundation",

    summary:
      "A specialized service business website built around clearer positioning, search-safe branding, and SEO-focused service pages for folder machine repair, troubleshooting, training, parts support, and equipment guidance.",

    role: [
      "Brand positioning and rebrand support",
      "Website design and development",
      "Service page architecture",
      "SEO-focused content structure",
      "Metadata and search context",
      "Google Business Profile support",
      "Contact form setup",
      "AWS Amplify deployment",
    ],

    preview: {
      problem:
        "The business needed a professional web presence for a specialized folder machine service, but the naming and domain process created potential search confusion with similarly named competitors in the market.",

      approach:
        "I helped pivot the brand toward a clearer, more differentiated name, then built a focused website and service page structure around repair, troubleshooting, training, parts support, and practical equipment guidance.",

      result:
        "The project gave the business a clearer name, a more search-safe digital foundation, and a professional website designed to explain a niche service offering to print shops, binderies, mailrooms, and production teams.",
    },

    capabilities: [
      {
        title: "Brand Positioning & Rebrand Support",
        summary:
          "Helped pivot the business toward a clearer, more differentiated name after identifying potential search, domain, and competitor confusion in the market.",
      },
      {
        title: "Specialized Service Website",
        summary:
          "Built a focused website for a niche service business serving print shops, binderies, mailrooms, and production teams.",
      },
      {
        title: "SEO Service Page Architecture",
        summary:
          "Created dedicated service pages for repair, troubleshooting, training, parts support, and equipment guidance so each offering had a clearer search-focused destination.",
      },
      {
        title: "Search & Google Business Foundation",
        summary:
          "Built a technical search foundation with metadata, sitemap support, structured service content, contact routing, and Google Business Profile verification support.",
      },
    ],

    stack: [
      "nextjs",
      "react",
      "css",
      "amplify",
      "amazons3",
      "resend",
      "route53",
    ],

    heroMedia: {
      type: "video",
      src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/kenny_loop.mp4",
      alt: "Kenny’s Folder Services website, service pages, and rebrand preview",
      caption:
        "A specialized service business website built around clearer positioning and search-focused service pages.",
    },

    links: [
      {
        label: "Visit Website",
        url: "https://kennysfolderservices.com/",
        type: "live",
      },
      {
        label: "View Services",
        url: "https://kennysfolderservices.com/services",
        type: "feature",
      },
    ],

    caseStudy: {
      overview:
        "Kenny’s Folder Services is a specialized service business website for folder machine repair, troubleshooting, training, parts support, and equipment guidance. The project included a naming pivot to reduce search and competitor confusion, a focused website build, SEO-oriented service page architecture, contact form setup, and Google Business Profile support.",

      highlights: [
        "Helped reposition the business around a clearer and more differentiated name",
        "Built a professional website for a niche service business serving print shops, binderies, mailrooms, and production teams",
        "Created dedicated service pages for folder machine repair, troubleshooting, training, parts support, and support services",
        "Structured service content around practical customer problems and search intent",
        "Added metadata, sitemap support, and page-level search context",
        "Set up contact routing through a website form",
        "Supported Google Business Profile setup and video verification requirements",
        "Created a more search-safe digital foundation in a market with similarly named competitors",
      ],
    },

    media: [
      {
        type: "image",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/kenny-home.webp",
        alt: "Kenny’s Folder Services homepage preview",
        sectionTitle: "Specialized Service Website",
        description:
          "The website gives the business a professional home base for explaining its specialized folder machine repair and support services to print shops, binderies, mailrooms, and production teams.",
        caption: "Homepage and service business positioning.",
      },
      {
        type: "image",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/kenny-seo-score.webp",
        alt: "Kenny’s Folder Services SEO service pages",
        sectionTitle: "SEO-Focused Service Pages",
        description:
          "Dedicated service pages give each offering its own destination, helping users and search engines understand the difference between repair, troubleshooting, training, parts support, and equipment guidance.",
        caption: "Service page architecture for search and clarity.",
      },
    ],

    seo: {
      title: "Kenny’s Folder Services Project | Nicholas Egner",
      description:
        "A specialized service business website and search foundation project for Kenny’s Folder Services, including rebrand support, SEO service pages, Google Business Profile support, and contact form setup.",
    },
  },

  {
    title: "Custom Wedding Website",
    slug: "custom-wedding-website",
    eyebrow: "Wedding Guest Experience & RSVP Platform",

    summary:
      "A custom wedding website and guest-management experience built around the couple’s visual identity, featuring household-based RSVP search, dynamic guest forms, an engagement photo gallery, wedding party content, and personalized interactive details.",

    role: [
      "Website design and development",
      "Custom wedding branding implementation",
      "Responsive guest experience design",
      "MongoDB guest database setup",
      "Household-based RSVP system development",
      "Guest search API creation",
      "Dynamic RSVP form logic",
      "Engagement photo gallery development",
      "AWS S3 image organization",
      "Interactive wedding party presentation",
      "Custom guest engagement features",
    ],

    preview: {
      problem:
        "The couple needed more than a template-based wedding page. They wanted one personalized destination where guests could find important information, explore photos, learn about the wedding party, and submit RSVPs without navigating a generic third-party platform.",

      approach:
        "I designed and developed a custom wedding website based on the couple’s invitation colors and typography. I created a MongoDB-backed RSVP system that allowed guests to search for their household, load the correct invited members, and submit individual responses. I also built a large engagement photo gallery, dynamic wedding party sections, and playful interactive details tailored to the couple.",

      result:
        "The finished website gave the couple a personalized platform they controlled while providing guests with a clear, mobile-friendly experience for finding information and responding to the invitation. It also demonstrated how custom development could turn a traditional event website into a more useful and memorable digital experience.",
    },

    capabilities: [
      {
        title: "Custom RSVP & Guest Search",
        summary:
          "Built a household-based RSVP application connected to MongoDB, allowing guests to search approximately 131 invitation records, select their household, view the correct invited members, and submit individual attendance responses and notes.",
      },
      {
        title: "Wedding Branding & Responsive Design",
        summary:
          "Translated the visual direction of the printed wedding invitation into a custom digital experience, including coordinated typography, colors, layouts, and mobile-friendly guest interactions.",
      },
      {
        title: "Engagement Photo Gallery",
        summary:
          "Created a gallery for approximately 88 engagement photos stored through Amazon S3, including responsive thumbnails, full-size image viewing, lightbox controls, and organized image handling.",
      },
      {
        title: "Personalized Guest Interactions",
        summary:
          "Added custom details that reflected the couple’s personalities, including dynamically rendered wedding party groups and an interactive Vikings-versus-Packers rivalry experience connected to stored participation data.",
      },
    ],

    stack: ["nextjs", "react", "javascript", "css", "mongodb", "amazons3"],

    heroMedia: {
      type: "video",
      src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/home-loop.mp4",
      alt: "Custom wedding website and RSVP platform preview",
      caption:
        "A personalized wedding guest experience combining custom branding, RSVP management, photography, and interactive details.",
    },

    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/egnica/wedding-site",
      },
    ],

    caseStudy: {
      overview:
        "This custom wedding website was created as a complete guest experience rather than a standard informational page. The project combined the couple’s existing wedding identity with a custom RSVP application, household-level guest records, engagement photography, wedding party content, and personalized interactive features. The website gave the couple greater control over the experience while making important information and RSVP actions easier for guests to access from their phones.",

      highlights: [
        "Designed the website around the colors, typography, and visual identity of the printed wedding invitation",
        "Created a MongoDB database containing approximately 131 invitation and household records",
        "Built a guest search API that allowed visitors to locate their household invitation",
        "Created dynamic RSVP forms that loaded the correct invited members for each household",
        "Stored attendance selections, guest notes, response status, and update information",
        "Built a responsive engagement gallery containing approximately 88 photographs",
        "Organized and delivered gallery images through Amazon S3",
        "Created a custom lightbox experience for viewing full-size engagement photos",
        "Rendered wedding party members dynamically from structured data and grouped them by role",
        "Added a personalized Vikings-versus-Packers interaction that recorded guest participation",
        "Designed the entire guest experience with mobile use as a priority",
      ],
    },

    media: [
      {
        type: "video",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/rsvp.mp4",
        alt: "Wedding website household RSVP search experience",
        sectionTitle: "Household RSVP Search",
        description:
          "Guests could search for their invitation, select the matching household, and load a personalized RSVP form containing only the people included in that invitation.",
        caption: "Custom household-based guest search and RSVP flow.",
      },
      {
        type: "image",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/numbers-count.webp",
        alt: "Custom wedding RSVP form showing invited household members",
        sectionTitle: "Dynamic RSVP Forms",
        description:
          "Each RSVP form was generated from the selected household record, allowing individual guests to respond while keeping the invitation structure and database records connected.",
        caption: "Dynamic RSVP form connected to MongoDB guest records.",
      },
      {
        type: "video",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/engagement_photos_page.mp4",
        alt: "Wedding website engagement photo gallery and lightbox",
        sectionTitle: "Engagement Photo Gallery",
        description:
          "A responsive gallery organized approximately 88 engagement photographs into an accessible browsing experience with thumbnail views and a full-size lightbox.",
        caption: "Responsive engagement gallery with Amazon S3 imagery.",
      },
      {
        type: "video",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/wedding-party-page.mp4",
        alt: "Wedding party section of the custom wedding website",
        sectionTitle: "Wedding Party",
        description:
          "Wedding party members were stored as structured data and dynamically grouped by their roles, making the section easier to manage and consistently present across screen sizes.",
        caption: "Data-driven wedding party presentation.",
      },
      {
        type: "video",
        src: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/website_projects_page/score_counter.mp4",
        alt: "Interactive Vikings and Packers rivalry feature",
        sectionTitle: "Personalized Interactions",
        description:
          "A playful Vikings-versus-Packers experience gave guests another way to interact with the site while reflecting the personalities and family traditions surrounding the wedding.",
        caption:
          "A custom interactive detail created specifically for the couple.",
      },
    ],

    seo: {
      title: "Custom Wedding Website Project | Nicholas Egner",
      description:
        "A custom wedding website and guest RSVP platform featuring MongoDB household search, dynamic response forms, responsive photography, wedding party content, and personalized interactions.",
    },
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);

export default projectsBySlug;
