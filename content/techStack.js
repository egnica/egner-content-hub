/**
 * Flat, keyed technology catalog.
 *
 * Technologies own their descriptive information. Projects and videos own
 * their technology references, so relationships do not need to be maintained
 * in two directions.
 */

export const categoryOrder = [
  "Front End",
  "Back End",
  "DevOps & Hosting",
  "Creative / Design",
  "Search & Digital Visibility",
  "CMS & Website Platforms"
];

export const technologies = {
  "react": {
    "name": "React",
    "slug": "react",
    "text": "I use React to build interactive interfaces from reusable components and clear state-driven logic. It is a core part of how I structure dashboards, custom tools, content experiences, and responsive web applications.",
    "image": "<svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 441.32 439.42'><defs><style>.cls-2{fill:#54c1de}</style></defs><path class='cls-2' d='M362.86 142.42c-4.7-1.8-9.43-3.47-14.21-5.01.79-3.6 1.52-7.21 2.2-10.84 10.75-58.42 3.72-105.48-20.29-120.98-23.02-14.86-60.67.63-98.7 37.67-3.75 3.66-7.41 7.42-10.99 11.29-2.4-2.57-4.83-5.09-7.31-7.56C173.7 7.38 133.75-9.3 109.77 6.24c-23 14.9-29.81 59.15-20.13 114.51.96 5.48 2.05 10.94 3.26 16.36-5.49 1.74-10.94 3.65-16.33 5.75C29.84 161.09 0 189.66 0 219.29s32.03 61.31 80.7 79.92c3.95 1.5 7.93 2.89 11.93 4.17-1.3 5.84-2.46 11.72-3.47 17.63-9.23 54.4-2.02 97.6 20.92 112.41 23.69 15.29 63.46-.43 102.18-38.31 3.06-2.99 6.13-6.17 9.21-9.5 3.87 4.18 7.85 8.25 11.93 12.18 37.51 36.12 74.55 50.71 97.47 35.86 23.67-15.34 31.36-61.74 21.38-118.2-.76-4.31-1.65-8.72-2.65-13.2 2.8-.92 5.53-1.88 8.21-2.87 50.59-18.76 83.51-49.09 83.51-80.1s-30.8-58.51-78.46-76.87'/><path d='M351.88 279.37c-2.41.89-4.89 1.76-7.41 2.59-5.59-19.79-13.13-40.83-22.35-62.57 8.8-21.22 16.05-42 21.48-61.66 4.51 1.46 8.9 3.01 13.12 4.63 40.84 15.73 65.75 38.99 65.75 56.92 0 19.09-26.9 43.88-70.59 60.08Zm-18.12 40.19c4.42 24.97 5.05 47.54 2.12 65.18-2.63 15.86-7.91 26.43-14.45 30.66-13.91 9.01-43.65-2.7-75.73-33.59a289 289 0 0 1-11.1-11.32c12.44-15.22 24.86-32.92 36.99-52.57 21.34-2.12 41.49-5.58 59.77-10.31.9 4.07 1.7 8.05 2.39 11.95m-183.29 94.29c-13.59 5.37-24.41 5.52-30.95 1.3-13.92-8.98-19.71-43.67-11.81-90.2.94-5.5 2.01-10.97 3.22-16.4 18.08 4.47 38.09 7.69 59.47 9.63 12.21 19.23 25 36.9 37.88 52.38-2.74 2.96-5.54 5.85-8.41 8.66-17.12 16.75-34.28 28.63-49.4 34.61ZM86.8 279.25c-21.52-8.23-39.29-18.93-51.47-30.6-10.95-10.49-16.47-20.91-16.47-29.36 0-17.98 23.96-40.92 63.92-56.51 5.02-1.95 10.08-3.73 15.19-5.35 5.52 20.1 12.77 41.12 21.51 62.38-8.86 21.57-16.2 42.92-21.78 63.26-3.66-1.17-7.29-2.44-10.89-3.82m21.33-162.55c-8.29-47.44-2.79-83.22 11.07-92.2 14.77-9.56 47.41 4.07 81.82 38.27 2.2 2.19 4.41 4.47 6.62 6.84-12.82 15.41-25.49 32.95-37.59 52.06-20.76 2.15-40.63 5.61-58.89 10.24-1.12-5.04-2.14-10.12-3.03-15.22Zm190.36 52.6c-4.31-8.34-8.79-16.57-13.42-24.7 14.08 1.99 27.57 4.63 40.24 7.87-3.8 13.64-8.54 27.91-14.12 42.53-4.08-8.66-8.31-17.23-12.7-25.7m-77.63-84.62c8.7 10.54 17.4 22.31 25.97 35.09a496 496 0 0 0-52.16-.01c8.57-12.65 17.36-24.41 26.19-35.07m-78.13 84.76a655 655 0 0 0-12.46 25.54c-5.49-14.57-10.19-28.9-14.02-42.74 12.59-3.15 26.02-5.73 40.01-7.69-4.68 8.17-9.19 16.47-13.53 24.88m13.93 126.09c-14.45-1.81-28.08-4.25-40.67-7.32 3.9-14.08 8.7-28.72 14.3-43.6q5.985 12.945 12.51 25.56c4.44 8.58 9.06 17.03 13.86 25.36m64.72 59.86c-8.94-10.79-17.85-22.73-26.55-35.56 8.45.37 17.06.56 25.82.56s17.89-.23 26.64-.66c-8.59 13.07-17.27 25.02-25.91 35.67m89.99-111.55c5.9 15.05 10.87 29.6 14.82 43.45-12.8 3.27-26.61 5.9-41.17 7.85 4.66-8.28 9.18-16.65 13.55-25.13 4.44-8.62 8.71-17.34 12.8-26.17m-29.13 15.63c-6.69 13-13.75 25.75-21.17 38.23-13.09 1.05-26.63 1.59-40.41 1.59s-27.09-.48-39.96-1.41a614 614 0 0 1-21.57-38.29 621 621 0 0 1-18.83-39.79 629 629 0 0 1 18.77-39.82c6.7-13 13.84-25.72 21.4-38.12 26.78-2.26 53.67-2.25 80.45.01a647 647 0 0 1 21.26 38 725 725 0 0 1 19.03 39.63 671 671 0 0 1-18.96 39.98Zm38.89-235.61c14.78 9.54 20.53 48 11.24 98.44-.61 3.29-1.27 6.56-1.98 9.82-18.31-4.73-38.19-8.25-59.01-10.43-12.13-19.32-24.69-36.9-37.3-52.1 3.31-3.57 6.69-7.04 10.15-10.42 32.58-31.73 63.03-44.26 76.91-35.31' style='fill:#fff'/><path class='cls-2' d='M220.66 175.19c21.77 0 39.41 19.75 39.41 44.1s-17.64 44.1-39.41 44.1-39.41-19.75-39.41-44.1 17.64-44.1 39.41-44.1'/></svg>",
    "category": "Front End"
  },
  "nextjs": {
    "name": "Next.js",
    "slug": "nextjs",
    "text": "Next.js is my primary framework for production web applications. I use the App Router, dynamic routes, server and client components, route handlers, metadata, structured content, and rendering strategies to build fast sites and application experiences.",
    "image": "<svg width='500' height='500' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M17.813 22.502c-.089.047-.084.066.005.021a.2.2 0 0 0 .07-.047c0-.016-.002-.014-.075.026m.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026m.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026m.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026m.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.5.5 0 0 0-.087.049M11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.9 11.9 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a232 232 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332 332 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.42.42 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.44.44 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.6.6 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a467 467 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.3 12.3 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.6 12.6 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.47.47 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.48.48 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047'/></svg>",
    "category": "Front End"
  },
  "javascript": {
    "name": "JavaScript (ES6+)",
    "slug": "javascript",
    "text": "JavaScript is the language behind most of the behavior I build. I use modern ES6+ patterns for component logic, asynchronous data handling, API integrations, form workflows, interface state, and business rules across both frontend and server-side code.",
    "image": "<svg width='500' height='500' viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid'><path d='M0 0h256v256H0z' fill='#F7DF1E'/><path d='m67.312 213.932 19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576 19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574'/></svg>",
    "category": "Front End"
  },
  "framermotion": {
    "name": "Framer Motion",
    "slug": "framermotion",
    "text": "I use Framer Motion to add purposeful motion to interfaces, including page transitions, timeline-driven interactions, state changes, and subtle feedback that helps users understand what is happening without overwhelming the experience.",
    "image": "<svg height='500' width='500' viewBox='3.7 3.7 43.6 43.6' xmlns='http://www.w3.org/2000/svg'><path d='M47.3 3.7v21.8L36.4 36.4 25.5 47.3 14.6 36.4l10.9-10.9v.1-.1z' fill='#59529d'/><path d='M47.3 25.5v21.8L36.4 36.4z' fill='#5271b4'/><path d='M25.5 25.5 14.6 36.4 3.7 47.3V3.7l10.9 10.9z' fill='#bb4b96'/></svg>",
    "category": "Front End"
  },
  "css": {
    "name": "CSS Modules",
    "slug": "css",
    "text": "I use CSS Modules to build responsive, maintainable interfaces with component-level styling. My work includes grid and flex layouts, fluid typography, animation, responsive breakpoints, visual states, and accessibility-focused interaction styling.",
    "image": "<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'><path d='M41.67 446.43 0 0h500l-41.67 446.43L250 500z' style='fill:#1073b8'/><path d='M458.33 35.71H250v437.5l166.67-44.64 41.67-392.86Z' style='fill:#33aadc'/><path d='M322.92 258.93H114.58l-10.42-62.5 166.67-44.64H104.17L93.75 98.22h322.92l-10.42 62.5-135.42 44.64h125L375 375l-125 35.71L125 375l-10.42-89.29h62.5l10.42 44.64 62.5 17.86 62.5-17.86 10.42-71.43Z' style='fill:#fff'/></svg>",
    "category": "Front End"
  },
  "vite": {
    "name": "Vite",
    "slug": "vite",
    "text": "I use Vite when a lightweight React setup is the right fit, especially for focused tools, prototypes, dashboards, and single-page applications where fast local development and a minimal build configuration are useful.",
    "image": "<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'><defs><linearGradient id='a' x1='143.53' y1='446.8' x2='405.24' y2='91.38' gradientTransform='matrix(1.12 0 0 -1.12 -35.18 443.68)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#53caf5'/><stop offset='1' stop-color='#9056a3'/></linearGradient><linearGradient id='b' x1='266.97' y1='392.58' x2='314.29' y2='67.98' gradientTransform='matrix(1.12 0 0 -1.12 -35.18 443.68)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#fee984'/><stop offset='.08' stop-color='#fedd35'/><stop offset='1' stop-color='#faa719'/></linearGradient></defs><path d='M498.39 74.02 263.48 493.47c-3.44 6.15-11.21 8.35-17.37 4.91-2.03-1.13-3.72-2.8-4.87-4.83L1.68 74.05c-3.5-6.11-1.37-13.9 4.75-17.39 2.6-1.48 5.64-2.01 8.58-1.48l235.16 41.98c1.49.27 3.03.27 4.52 0l230.24-41.91c6.93-1.27 13.58 3.32 14.85 10.25.53 2.91.03 5.91-1.41 8.5v.02Z' style='fill:url(#a)'/><path d='m362.18.14-173.81 34a6.44 6.44 0 0 0-5.15 5.89l-10.69 180.35a6.376 6.376 0 0 0 5.99 6.74c.61.04 1.22-.02 1.82-.15l48.39-11.16c3.43-.79 6.86 1.35 7.65 4.77.21.89.22 1.82.03 2.72l-14.37 70.31c-.71 3.45 1.52 6.81 4.97 7.52 1.04.21 2.12.16 3.14-.15l29.89-9.07c3.37-1.03 6.94.86 7.97 4.23.31 1.02.36 2.11.15 3.16L245.3 409.73c-1.43 6.91 7.78 10.67 11.62 4.77l2.56-3.96 141.66-282.28c1.57-3.15.29-6.98-2.86-8.55a6.4 6.4 0 0 0-4.06-.56l-49.82 9.58c-3.46.66-6.8-1.6-7.47-5.06-.19-.99-.14-2.01.14-2.97l32.5-112.56c.98-3.38-.96-6.92-4.34-7.9-.98-.29-2.02-.33-3.02-.13' style='fill:url(#b)'/></svg>",
    "category": "Front End"
  },
  "accessibility": {
    "name": "Accessibility & Performance",
    "slug": "accessibility",
    "text": "I build with accessibility, responsiveness, and performance in mind rather than treating them as cleanup tasks at the end. That includes semantic structure, keyboard and focus behavior, reduced-motion support, responsive layouts, image and script optimization, and Lighthouse-driven performance work.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='a11yG' x1='10' y1='86' x2='86' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#126b54'/><stop offset='1' stop-color='#76d7ff'/></linearGradient></defs><rect x='3' y='3' width='90' height='90' rx='20' fill='url(#a11yG)'/><circle cx='48' cy='25' r='7' fill='#fff'/><path d='M26 39h44M48 39v17M35 73l13-17 13 17M31 61l17-5 17 5' fill='none' stroke='#fff' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><path d='M64 22a27 27 0 0 1 12 38' fill='none' stroke='#fff' stroke-width='4' stroke-linecap='round' opacity='.75'/></svg>",
    "category": "Front End"
  },
  "supabase": {
    "name": "Supabase",
    "slug": "supabase",
    "text": "I use Supabase when a project benefits from a managed PostgreSQL backend, authentication, relational data, and generated APIs. It is useful for moving quickly while still keeping a structured data model and room for application growth.",
    "image": "<svg width='500' height='500' viewBox='0 0 109 113' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z' fill='url(#a)'/><path d='M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z' fill='url(#b)' fill-opacity='.2'/><path d='M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875z' fill='#3ECF8E'/><defs><linearGradient id='a' x1='53.974' y1='54.974' x2='94.163' y2='71.829' gradientUnits='userSpaceOnUse'><stop stop-color='#249361'/><stop offset='1' stop-color='#3ECF8E'/></linearGradient><linearGradient id='b' x1='36.156' y1='30.578' x2='54.484' y2='65.081' gradientUnits='userSpaceOnUse'><stop/><stop offset='1' stop-opacity='0'/></linearGradient></defs></svg>",
    "category": "Back End"
  },
  "mongodb": {
    "name": "MongoDB",
    "slug": "mongodb",
    "text": "I use MongoDB for application data that benefits from flexible document structures and fast iteration. I have used it for guest and household data, custom workflow systems, CRM-style records, automation state, and other evolving application needs.",
    "image": "<svg width='500' height='500' viewBox='0 0 73 73' xmlns='http://www.w3.org/2000/svg'><g fill='none'><rect x='-1' y='-1' width='71' height='71' rx='14' transform='translate(2 2)' fill='#FFF' stroke='#134514' stroke-width='2'/><path d='m37.494 61.728-1.348-.46s.165-6.875-2.303-7.368c-1.644-1.908.264-80.918 6.185-.264 0 0-2.04 1.02-2.402 2.763-.395 1.711-.132 5.33-.132 5.33' fill='#A6A385'/><path d='M38.218 55.084s11.81-7.763 9.046-23.914c-2.664-11.743-8.947-15.591-9.638-17.071-.756-1.053-1.48-2.895-1.48-2.895l.494 32.663c0 .033-1.02 10 1.579 11.217' fill='#499D4A'/><path d='M35.456 55.511S24.37 47.946 25.028 34.624c.625-13.322 8.454-19.867 9.967-21.052.987-1.052 1.02-1.447 1.085-2.5.691 1.48.56 22.138.658 24.572.296 9.374-.526 18.091-1.282 19.867' fill='#58AA50'/></g></svg>",
    "category": "Back End"
  },
  "filemaker": {
    "name": "FileMaker & Data API",
    "slug": "filemaker",
    "text": "I have experience connecting FileMaker data to modern web applications through the FileMaker Data API. That work includes reading and transforming layout data, building usable interfaces around existing systems, and working carefully within legacy business constraints.",
    "image": "<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 192.756 192.756'><g fill-rule='evenodd' clip-rule='evenodd'><path fill='#fff' d='M0 0h192.756v192.756H0z'/><path d='m186.252 108.15-59.217-18.706 12.938-51.566c.586-2.76-.816-5.466-3.186-6.19L48.968 9.038c-1.255-.294-3.481-.285-4.515 3.025-.011.037-3.206 12.38-4.094 15.815l-27.971-9.2c-1.761-.56-3.621.81-3.077 2.941l19.744 73.034 83.51 49.196 76.762-32.955c1.835-1.007-.96-1.882-3.075-2.744'/><path d='M46.208 12.564c.587-1.876 1.465-1.955 2.324-1.753l87.724 22.624c1.219.375 2.027 1.714 2.027 3.19q.002.418-.088.841L112.72 138.991 96.071 50.154c-.508-2.687-1.318-5.566-3.501-6.547-.086-.033-11.126-3.706-11.126-3.706-.777-.349-1.114-1.806-1.439-3.215-.41-1.77-.874-3.774-2.618-4.403-.047-.016-25.731-7.76-25.731-7.76-.645-.195-1.222-.154-1.713.125-.893.505-1.167 1.582-1.43 2.624-.181.718-.407 1.611-.787 1.821-.228.126-.612.043-.895-.047 0 0-3.018-.994-4.506-1.482z' fill='#fff'/><path d='M20.237 151.262H2.834v32.142h4.685v-14.697h12.718v-4.205H7.519v-9.035h12.718zm8.044 4.519a2.55 2.55 0 0 0-2.535-2.531 2.55 2.55 0 0 0-2.533 2.531 2.55 2.55 0 0 0 2.533 2.535 2.55 2.55 0 0 0 2.535-2.535m-.43 6.315h-4.255v21.308h4.255zm8.252-10.834H31.85v32.142h4.253zm21.873 25.927c-2.487 1.625-4.925 2.582-7.505 2.582-4.111 0-6.55-2.201-7.219-6.453h15.106c0-7.938-3.633-11.807-9.322-11.807-5.928 0-10.039 4.395-10.039 10.896 0 5.928 3.729 11.428 10.421 11.428 3.632 0 5.977-.814 8.557-2.535zm-14.89-6.693c.574-3.395 2.534-5.307 5.786-5.307 3.01 0 4.875 2.057 5.02 5.307zm46.435-19.234h-4.349l-9.743 13.767-9.656-13.767h-4.398v32.142h4.685v-24.162h.096l8.892 12.621h.764l8.929-12.621h.095v24.162h4.685zm20.946 28.318c-.957.717-1.818 1.146-2.246 1.146-.527 0-.812-.287-.812-1.098v-11.043c0-4.877-3.443-7.074-7.793-7.074-3.105 0-5.449.955-7.124 2.914v4.637c2.056-2.436 4.447-3.535 6.79-3.535 2.58 0 3.873 1.1 3.873 3.773v1.148l-3.777 1.338c-3.44 1.244-7.314 2.535-7.314 6.789 0 2.773 2.104 5.26 5.258 5.26 1.961 0 3.92-.719 5.785-2.201.383 1.529 1.387 2.201 3.25 2.201 1.338 0 2.152-.383 4.111-1.674v-2.581zm-7.313-.527c-1.148 1.1-2.391 1.77-3.73 1.77-1.768 0-3.057-1.242-3.057-3.012 0-2.535 3.153-3.779 6.788-5.018zm13.338-27.791h-4.254v32.142h4.254zm14.77 10.677h-5.067l-9.511 10.518 10.754 10.947h5.738l-11.092-10.947z'/><path d='M150.23 177.189c-2.486 1.625-4.924 2.582-7.506 2.582-4.111 0-6.549-2.201-7.217-6.453h15.105c0-7.938-3.635-11.807-9.32-11.807-5.928 0-10.041 4.395-10.041 10.896 0 5.928 3.727 11.428 10.42 11.428 3.635 0 5.979-.814 8.559-2.535zm-14.626-6.693c.572-3.395 2.533-5.307 5.785-5.307 3.01 0 4.873 2.057 5.018 5.307zm17.482-8.557v21.465h4.258v-11.232c0-3.682 2.293-6.598 5.209-6.598 1.004 0 2.674.857 3.965 2.102l2.252-3.682c-1.771-1.672-3.396-2.482-5.119-2.482-2.004 0-4.061 1.576-6.213 5.352h-.094v-4.924h-4.258zm12.205 21.514c.848 0 1.643-.332 2.252-.932.604-.604.924-1.4.924-2.252a3.184 3.184 0 0 0-3.176-3.184 3.185 3.185 0 0 0 0 6.368m-2.791-3.183a2.787 2.787 0 0 1 2.791-2.783 2.783 2.783 0 0 1 2.781 2.783c0 .742-.283 1.443-.811 1.971-.529.529-1.23.82-1.971.82a2.795 2.795 0 0 1-2.79-2.791'/><path d='m166.406 182.131.359-.17-.705-1.496c.326-.135.584-.506.584-.92 0-.582-.459-.996-.871-.996h-1.527v3.537h.391v-1.557h1.016zm-1.769-3.186h1.137c.203 0 .482.227.482.6 0 .332-.256.59-.475.59v.004h-1.145v-1.194zm18.984-58.472v-3.866h1.234v-.517h-2.97v.517h1.228v3.866zm1.729-4.383h.9l1.043 3.615 1.068-3.615h.84v4.383h-.502v-3.946l-1.209 3.946h-.482l-1.162-3.92v3.92h-.496z'/></g></svg>",
    "category": "Back End"
  },
  "restful": {
    "name": "API Integration & Workflow Automation",
    "slug": "restful",
    "text": "I build and consume APIs to connect applications with external services and internal business workflows. My work includes REST endpoints, route handlers, authentication, webhooks, third-party services, data transformation, error handling, and automation between systems.",
    "image": "<svg width='500' height='500' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h20v20H0z'/><path d='M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1 14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2 1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13'/></svg>",
    "category": "Back End"
  },
  "resend": {
    "name": "Resend & Email Workflows",
    "slug": "resend",
    "text": "I use Resend to connect web applications with transactional and business email workflows. My work includes contact routing, automated notifications, campaign-style sends, unsubscribe handling, delivery logic, and integrating email into custom application processes.",
    "image": "<svg width='500' height='500' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' rx='5' fill='#fff'/><path fill='#111' d='M14.679 0c4.648 0 7.413 2.765 7.413 6.434s-2.765 6.434-7.413 6.434H12.33L24 24h-8.245l-8.88-8.44c-.636-.588-.93-1.273-.93-1.86 0-.831.587-1.565 1.713-1.883l4.574-1.224c1.737-.465 2.936-1.81 2.936-3.572 0-2.153-1.761-3.4-3.939-3.4H0V0z'/></svg>",
    "category": "Back End"
  },
  "quo": {
    "name": "Quo",
    "slug": "quo",
    "text": "I use Quo to connect business calling and SMS with application workflows. My work includes shared business numbers, customer texting, communication routing, webhook and API integrations, and tying phone activity into custom operational systems.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='22' fill='#5B4BFF'/><circle cx='47' cy='45' r='22' fill='none' stroke='#fff' stroke-width='8'/><path d='m61 60 14 14' stroke='#fff' stroke-width='8' stroke-linecap='round'/><path d='M34 45c4-5 8-7 13-7s9 2 13 7c-4 5-8 7-13 7s-9-2-13-7Z' fill='#9FE5FF'/></svg>",
    "category": "Back End"
  },
  "lob": {
    "name": "Lob",
    "slug": "lob",
    "text": "I use Lob to connect physical direct mail with custom application workflows. My work includes address handling, letter previews, test and live sends, delivery status, submission safeguards, and integrating direct mail into CRM-style outreach processes.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='22' fill='#2A45F9'/><rect x='19' y='27' width='58' height='42' rx='7' fill='none' stroke='#fff' stroke-width='6'/><path d='m22 32 26 20 26-20' fill='none' stroke='#fff' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><path d='M63 61h12' stroke='#BBAAFF' stroke-width='6' stroke-linecap='round'/></svg>",
    "category": "Back End"
  },
  "amplify": {
    "name": "AWS Amplify",
    "slug": "amplify",
    "text": "I use AWS Amplify to deploy and host Next.js and React applications with Git-based deployment workflows. It gives me a practical path from repository to production while supporting custom domains, environment variables, previews, and ongoing iteration.",
    "image": "<svg width='500' height='500' viewBox='0 0 256 191' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid'><defs><linearGradient x1='100%' y1='22.172%' x2='0%' y2='77.828%' id='a'><stop stop-color='#F90' offset='0%'/><stop stop-color='#FFC300' offset='100%'/></linearGradient></defs><path d='M55.71 158.476h72.106l18.47 32.508H0l51.364-89.006L72.89 64.706l18.48 32.022zM82.6 47.85l17.744-30.746 100.42 173.88h-35.562zM110.221 0h35.516L256 190.984h-35.56z' fill='url(#a)'/></svg>",
    "category": "DevOps & Hosting"
  },
  "workmail": {
    "name": "Amazon WorkMail",
    "slug": "workmail",
    "text": "I use Amazon WorkMail for custom-domain business email within AWS-based setups. It is one part of managing a professional web presence that includes domains, DNS, hosting, forms, and reliable communication.",
    "image": "<svg width='500' height='500' viewBox='0 0 1024 1024' class='icon' xmlns='http://www.w3.org/2000/svg'><path d='M512 599.6 107.9 311.1v19.7L512 619.3l404.1-288.6V311z' fill='#E73B37'/><path d='M63.9 187v650h896.2V187zm852.2 598.5L672.2 611.3l-13.8 9.8L899.1 793H125.5l240.6-171.8-13.8-9.8-244.4 174.5V231h808.2z' fill='#39393A'/><path d='M502.9 536.7a10 10 0 1 0 20 0 10 10 0 1 0-20 0' fill='#E73B37'/></svg>",
    "category": "DevOps & Hosting"
  },
  "amazons3": {
    "name": "Amazon S3",
    "slug": "amazons3",
    "text": "I use Amazon S3 to store and deliver media and static assets, especially video, audio, images, and downloadable content. It helps keep application deployments lighter while giving media-heavy projects a reliable storage layer.",
    "image": "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-label='Amazon Simple Storage Service' viewBox='0 0 512 512'><rect width='500' height='500' rx='15%' fill='#fff'/><path fill='#e05243' d='m260 348-137 33V131l137 32z'/><path fill='#8c3123' d='m256 349 133 32V131l-133 32z'/><g fill='#e05243'><path id='a' d='M256 64v97l58 14V93zm133 67v250l26-13V143zm-133 77v97l58-8v-82zm58 129-58 14v97l58-29z'/></g><use fill='#8c3123' transform='rotate(180 256 256)' xlink:href='#a'/><path fill='#5e1f18' d='m314 175-58 11-58-11 58-15z'/><path fill='#f2b0a9' d='m314 337-58-11-58 11 58 16z'/></svg>",
    "category": "DevOps & Hosting"
  },
  "route53": {
    "name": "Route 53",
    "slug": "route53",
    "text": "I use Route 53 for DNS and domain management across web projects. That includes connecting domains to hosted applications, managing records and subdomains, and coordinating DNS changes with services such as Amplify, email providers, and other integrations.",
    "image": "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 96 96' id='Aws-Route53--Streamline-Svg-Logos' height='500' width='500'><desc>Aws Route53 Streamline Icon: https://streamlinehq.com</desc><path fill='url(#a)' d='M95 1H1v94h94V1Z'></path><path fill='#ffffff' d='M58.2132 48.7985c.8683.8029 1.3031 1.8784 1.3031 3.229 0 1.4693-.5288 2.6424-1.5851 3.5193-1.0575.8781-2.4781 1.3165-4.2605 1.3165-1.4089 0-2.8036-.3009-4.1831-.9004v-1.7996c1.6345.5407 3.028.8099 4.1831.8099 1.1397 0 2.0163-.2551 2.6308-.7641.6145-.5101.9212-1.2377.9212-2.1816 0-1.8149-1.1457-2.7224-3.4404-2.7224-.7191 0-1.4312.0377-2.1362.1117v-1.4834l4.7235-5.152h-6.6563v-1.8443h9.152v1.7773l-4.633 4.904c.0764-.0153.1492-.0224.2256-.0224h.2244c1.4852 0 2.6614.4009 3.5309 1.2025Zm-13.0637-.3926c.913.8546 1.3701 2.0312 1.3701 3.5299 0 1.4705-.5311 2.6589-1.5968 3.5663-1.0646.9075-2.4652 1.3612-4.2042 1.3612-1.5275 0-2.9598-.3009-4.2946-.9004v-1.7996c1.6638.5407 3.0879.8099 4.2723.8099 1.1398 0 2.0128-.2575 2.6191-.7758.6074-.5172.9118-1.2625.9118-2.2381 0-1.0649-.2855-1.8372-.8554-2.3168-.5699-.4796-1.4993-.7206-2.7883-.7206-.9294 0-2.0903.0765-3.4851.2257V47.663l.4277-6.7259h8.2074v1.8443h-6.3191l-.2926 4.5666c.8248-.1493 1.5663-.2245 2.2254-.2245 1.6192 0 2.887.4267 3.8023 1.2824ZM62.0496 64.894c-5.7035 1.025-10.6984 3.3477-14.0495 5.2401-3.3523-1.8924-8.3472-4.2151-14.0495-5.2401-1.605-.288-9.6044-1.9583-9.6044-6.5825 0-2.1429.7672-3.564 2.2407-6.1018 1.7601-3.035 3.9503-6.8129 3.9503-12.2517 0-3.8873-1.0187-7.6146-3.0303-11.0928.2362-.2915.4771-.5865.7191-.8839 2.9798 1.4893 6.0818 2.2439 9.2355 2.2439 3.854 0 7.3955-1.012 10.5386-3.0091 3.1419 1.9971 6.6834 3.0091 10.5374 3.0091 3.1537 0 6.2569-.7546 9.2367-2.2439.2408.2974.4817.5924.7179.8839-2.0116 3.4782-3.0303 7.2055-3.0303 11.0928 0 5.4388 2.1902 9.2167 3.9538 12.2564 1.47 2.5331 2.2372 3.9542 2.2372 6.0971 0 4.6242-7.9993 6.2945-9.6032 6.5825Zm5.7622-24.936c0-3.7109 1.0469-7.2679 3.109-10.5721.2679-.4266.2338-.9756-.0858-1.3658-.5969-.7312-1.2231-1.5011-1.8412-2.2663-.3584-.4431-.9811-.5654-1.4816-.2903-2.8941 1.5998-5.9126 2.4108-8.9747 2.4108-3.6942 0-6.9219-.9932-9.8688-3.035-.4019-.2786-.9365-.2786-1.3383 0-2.9469 2.0418-6.1747 3.035-9.8689 3.035-3.062 0-6.0806-.811-8.9746-2.4108-.4994-.2751-1.1233-.1528-1.4817.2903-.6181.7652-1.2443 1.5351-1.8412 2.2663-.3185.3902-.3537.9392-.0858 1.3658 2.0633 3.3042 3.109 6.8612 3.109 10.5721 0 4.8064-2.0151 8.2798-3.6342 11.0751-1.5863 2.7294-2.5568 4.5419-2.5568 7.2784 0 6.3321 8.8313 8.4115 11.5385 8.8969 5.7105 1.0262 10.6972 3.4465 13.8744 5.2955.1821.1069.3865.1598.591.1598.2033 0 .4077-.0529.591-.1598 3.1772-1.849 8.1628-4.2693 13.8733-5.2955 2.7072-.4854 11.5384-2.5648 11.5384-8.8969 0-2.7365-.9705-4.549-2.5568-7.282-1.6191-2.7917-3.6342-6.2651-3.6342-11.0715ZM63.268 71.6846c-7.2039 1.2953-13.2434 5.1696-15.2679 6.5884-2.0257-1.4188-8.0652-5.2931-15.2691-6.5884-14.1799-2.5472-15.2809-10.88-15.2809-13.3731 0-4.1012 1.6109-6.8764 3.169-9.5623 1.4852-2.559 3.0209-5.2061 3.0209-8.7912 0-5.6634-3.27-9.6634-4.8833-11.2914 1.6967-2.0641 5.9831-7.2902 8.0969-10.0137 3.2031 3.0233 6.9266 4.6724 10.6079 4.6724 4.0867 0 7.466-1.6632 10.5386-5.2119 3.0715 3.5487 6.4508 5.2119 10.5374 5.2119 3.6813 0 7.4049-1.6491 10.6091-4.6724 2.1138 2.7235 6.399 7.9496 8.0957 10.0137-1.6132 1.628-4.8833 5.628-4.8833 11.2914 0 3.5851 1.5369 6.2322 3.021 8.7912 1.5592 2.6859 3.1701 5.4611 3.1701 9.5623 0 2.4931-1.1022 10.8259-15.2821 13.3731Zm14.1447-24.1144c-1.4511-2.5014-2.7037-4.6607-2.7037-7.6122 0-6.2135 4.8363-10.2323 4.8833-10.27.2433-.1974.3984-.4842.4313-.7969.0305-.3127-.0635-.6242-.2632-.8663-.0788-.0941-7.7809-9.4318-9.5457-11.8509-.2068-.2833-.5276-.4596-.8778-.4808-.3513-.0258-.6897.114-.9294.3703-2.961 3.1666-6.4648 4.911-9.87 4.911-3.7647 0-6.7257-1.6774-9.6044-5.4388-.4454-.5807-1.4206-.5807-1.866 0-2.8799 3.7614-5.8409 5.4388-9.6056 5.4388-3.4051 0-6.909-1.7444-9.87-4.911-.2397-.2563-.5804-.402-.9294-.3703-.349.0212-.6709.1975-.8777.4808-1.7649 2.4191-9.467 11.7568-9.5457 11.8509-.1986.2421-.2926.5536-.2609.8651.0306.3115.1845.5983.4265.7958.0494.04 4.8857 4.0588 4.8857 10.2723 0 2.9515-1.2526 5.1108-2.7037 7.6122-1.6344 2.8164-3.4862 6.0077-3.4862 10.7413 0 7.8861 6.4355 13.7504 17.2161 15.6875 8.1157 1.4588 14.9014 6.6061 14.9683 6.659.2104.161.463.2421.7156.2421.2514 0 .5041-.0811.7156-.2433.0681-.0517 6.8302-5.1955 14.9671-6.6578 10.7807-1.9371 17.2173-7.8014 17.2173-15.6875 0-4.7336-1.853-7.9249-3.4874-10.7413Z'></path><defs><linearGradient id='a' x1='1' x2='9401' y1='9401' y2='1' gradientUnits='userSpaceOnUse'><stop stop-color='#4d27a8'></stop><stop offset='1' stop-color='#a166ff'></stop></linearGradient></defs></svg>",
    "category": "DevOps & Hosting"
  },
  "github": {
    "name": "GitHub / GitHub Actions",
    "slug": "github",
    "text": "GitHub is the center of my development workflow for version control, branches, code review, and project history. I also use GitHub Actions and repository integrations to support CI tasks, automated checks, and deployment workflows.",
    "image": "<svg width='500' height='500' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.4 9.4 0 0 0 10 4.958a9.4 9.4 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0' fill-rule='evenodd'/></svg>",
    "category": "DevOps & Hosting"
  },
  "premiere": {
    "name": "Adobe Premiere Pro",
    "slug": "premiere",
    "text": "I use Adobe Premiere Pro for editing legal explainers, promotional content, social video, interviews, event content, and other client-facing media. My workflow includes editing, audio cleanup, pacing, graphics integration, captions, and preparing content for web and social publishing.",
    "image": "<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 492.31 492.31'><path d='M0 178.16C0 115.8 0 84.62 12.13 60.8c10.67-20.96 27.71-38 48.67-48.67C84.62 0 115.8 0 178.16 0h135.98c62.36 0 93.54 0 117.36 12.13 20.96 10.67 38 27.71 48.67 48.67 12.13 23.82 12.13 55 12.13 117.36v135.98c0 62.36 0 93.54-12.13 117.36-10.67 20.96-27.71 38-48.67 48.67-23.82 12.13-55 12.13-117.36 12.13H178.16c-62.36 0-93.54 0-117.36-12.13a111.3 111.3 0 0 1-48.67-48.67C0 407.68 0 376.51 0 314.14z' style='fill:#1e1b57'/><path d='M100.72 349.65V124.87c0-1.54.62-2.41 2.09-2.41 21.61 0 43.18-1.3 64.77-1.3 35.05 0 73 12.21 86.3 49.59 3.14 9.18 4.82 18.57 4.82 28.39 0 18.79-4.18 34.3-12.55 46.54-23.34 34.16-63.8 33.64-100.09 33.64v70.11c.29 2.09-1.45 3.07-3.13 3.07h-39.71c-1.66 0-2.5-.89-2.5-2.86m45.54-185.04v73.39c14.39 1.07 29.46 1.2 43.27-3.48 15.25-4.48 23.61-17.95 23.61-34.07.43-13.75-6.91-26.95-19.43-31.89-13.64-5.79-32.68-6.14-47.43-3.93m140.74 13.89h36.66c2.08.06 3.87 1.5 4.38 3.52 2.68 6.25 3.02 13.75 3.04 20.5 6.21-7.62 13.79-14 22.36-18.82a56.33 56.33 0 0 1 29.93-7.91c1.73-.27 3.27 1.34 3.04 3.16v42.55c0 1.64-1.13 2.46-3.37 2.46-15.54-1.12-39.68 2.71-50.96 15.48v110.64c0 2.11-.89 3.16-2.68 3.16h-39.36c-1.93.3-3.64-1.52-3.36-3.52V229.59c0-16.09.32-32.68-2.02-48.62-.36-1.46.98-2.84 2.36-2.46' style='fill:#9695c9'/></svg>",
    "project": [],
    "category": "Creative / Design"
  },
  "photoshop": {
    "name": "Adobe Photoshop & Illustrator",
    "slug": "photoshop",
    "text": "I use Photoshop and Illustrator for image editing, thumbnails, web graphics, social assets, logo work, and vector design. These tools support both standalone creative work and the visual systems that surround the websites and applications I build.",
    "image": "<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500.07 502.33'><path d='M261.04 0H51.96C23.26 0 0 23.54 0 52.57v203.61c0 29.04 23.26 52.57 51.96 52.57h209.07c28.7 0 51.96-23.54 51.96-52.57V52.57C312.99 23.53 289.73 0 261.03 0Z' style='fill:#2f1110'/><path d='M151.67 186.72h-48.5l-9.87 30.66a2.476 2.476 0 0 1-2.52 1.89H66.21q-2.1 0-1.47-2.31l41.99-120.94c.42-1.26.84-2.69 1.26-4.3.55-2.8.83-5.65.84-8.5-.06-.4.08-.81.37-1.1s.7-.43 1.1-.37h33.38q1.47 0 1.68 1.05l47.66 134.38q.63 2.1-1.26 2.1h-27.3c-.97.11-1.87-.52-2.1-1.47l-10.71-31.08Zm-40.94-26.45h33.18l-.47-1.56-.76-2.47-.54-1.74-.86-2.73-1.84-5.76-1.62-5.1-4.2-13.29c-1.08-3.42-2.08-6.74-3.01-9.95l-.77-2.7-.9-3.2-1.37-4.95c-.09-.31-.17-.63-.26-.93h-.21c-1.05 5.04-2.33 10.03-3.83 14.95l-3.12 10.02-1.71 5.54-1.73 5.61c-.31 1.01-.62 2.01-.94 3l-.93 2.93-.92 2.86-.92 2.79-.91 2.72c-.3.9-.61 1.78-.91 2.65l-.45 1.3ZM221.38 104c-4.33.17-8.53-1.51-11.55-4.62-3-3.24-4.59-7.55-4.41-11.97-.15-4.38 1.56-8.62 4.72-11.65 3.02-2.9 7.03-4.51 11.21-4.52h.45c5.04 0 8.99 1.51 11.86 4.52 2.93 3.16 4.47 7.35 4.3 11.65.18 4.44-1.45 8.75-4.51 11.97-3.1 3.05-7.29 4.72-11.62 4.63h-.45Zm-14.49 113.17V116.8q0-1.89 1.68-1.89h25.83q1.68 0 1.68 1.89v100.37q0 2.1-1.68 2.1h-25.62c-1.19 0-1.82-.63-1.88-1.88v-.22Z' style='fill:#f8991d'/><path d='M449.45 205.09H245.79c-27.94 0-50.59 22.65-50.59 50.59v196.03c0 27.94 22.64 50.6 50.58 50.61h203.69c27.94 0 50.6-22.64 50.61-50.58V255.69c0-27.94-22.64-50.6-50.58-50.61h-.04' style='fill:#061f34'/><path d='M263.84 413.53V282.85c0-.95.41-1.43 1.22-1.43h1.3l2.21-.04 3.09-.05 10.3-.22 11.04-.21c3.89-.07 7.74-.1 11.55-.1 10.38 0 19.11 1.3 26.19 3.89 6.4 2.16 12.23 5.73 17.07 10.43 4.11 4.07 7.28 8.99 9.3 14.41a47.9 47.9 0 0 1 2.87 16.48c0 10.9-2.52 19.89-7.56 26.98-4.93 6.91-11.83 12.19-19.77 15.19l-.69.26c-8.3 3.09-17.5 4.2-27.58 4.28h-3.9l-1.17-.03-1.3-.03-.79-.04-.48-.03-1.17-.04-1.45-.03-2.17-.03h-.48v40.81c.12.89-.49 1.71-1.38 1.83-.15.02-.31.02-.46 0h-24.35c-.95 0-1.43-.54-1.43-1.63m27.6-107.53v42.63c1.76.13 3.4.2 4.9.21h6.75c4.66-.02 9.28-.71 13.74-2.06l.9-.27a22.1 22.1 0 0 0 10.42-6.75c2.57-3.03 3.9-7.2 4-12.51v-.6c.1-3.96-.93-7.86-2.97-11.25a19.05 19.05 0 0 0-8.89-7.26 37.5 37.5 0 0 0-14.93-2.54h-4.23l-1.56.04-2.21.04-1.61.05-.84.03-1.12.05-.95.06-.54.04-.47.04-.21.03-.18.03Zm147.58 34.87a48 48 0 0 0-11.26-4.1l-.91-.19c-4.3-.98-8.69-1.53-13.1-1.62h-1.1c-2.61-.07-5.17.23-7.68.91-1.59.35-3 1.26-3.98 2.56a6.4 6.4 0 0 0-1.02 3.48c.02 1.2.46 2.35 1.23 3.27 1.09 1.28 2.37 2.33 3.85 3.14l.44.25c2.91 1.56 5.91 2.95 8.99 4.19 6.88 2.3 13.43 5.42 19.54 9.3a29.74 29.74 0 0 1 10.02 10.53c2.04 4.06 3.06 8.55 2.97 13.09.13 5.99-1.6 11.88-4.9 16.86-3.56 5.06-8.49 9-14.22 11.35-5.99 2.63-13.36 3.99-22.09 4.09h-.91c-5.42.06-10.83-.41-16.15-1.4l-1.14-.23a55.7 55.7 0 0 1-12.97-4.09 2.6 2.6 0 0 1-1.44-2.24v-22.3c-.05-.44.15-.87.52-1.12.36-.19.8-.15 1.12.1a54.8 54.8 0 0 0 15.75 6.23c4.91 1.24 9.89 1.89 14.92 1.95 4.78 0 8.3-.61 10.55-1.84a5.83 5.83 0 0 0 3.37-5.32c0-1.76-1.02-3.47-3.07-5.11-1.15-.86-2.39-1.61-3.68-2.23l-.77-.39-.82-.38-.43-.19-.91-.39-.45-.21-.99-.42-.51-.21-1.05-.42-.54-.22-1.14-.44-1.18-.44a75.5 75.5 0 0 1-18.1-9.21c-4-2.78-7.29-6.45-9.61-10.73-2-4.03-3.02-8.48-2.97-12.97 0-5.42 1.48-10.73 4.29-15.35 3.21-5.09 7.83-9.14 13.3-11.66q8.985-4.485 22.5-4.5c5.28-.04 10.53.33 15.75 1.13 3.76.48 7.46 1.48 10.96 2.97a1.8 1.8 0 0 1 1.22 1.12c.14.51.21 1.02.21 1.54v20.65c.04.49-.19.96-.61 1.22-.55.28-1.21.28-1.76 0' style='fill:#55a0d8'/></svg>",
    "project": [],
    "category": "Creative / Design"
  },
  "aftereffects": {
    "name": "Adobe After Effects",
    "slug": "aftereffects",
    "text": "I use Adobe After Effects for motion graphics, compositing, animated titles, interface-style visuals, branded transitions, and other video elements that need more control than a standard edit can provide.",
    "image": "<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 487.67 487.67'><path d='M0 176.48C0 114.7 0 83.82 12.02 60.22a110.22 110.22 0 0 1 48.21-48.21C83.83 0 114.71 0 176.48 0h134.7c61.78 0 92.66 0 116.26 12.02a110.22 110.22 0 0 1 48.21 48.21c12.02 23.6 12.02 54.48 12.02 116.26v134.7c0 61.78 0 92.66-12.02 116.26a110.22 110.22 0 0 1-48.21 48.21c-23.6 12.02-54.48 12.02-116.26 12.02h-134.7c-61.78 0-92.66 0-116.26-12.02a110.22 110.22 0 0 1-48.21-48.21C0 403.84 0 372.96 0 311.19v-134.7Z' style='fill:#1e1b57'/><path d='M205.34 305.91h-75.59l-15.36 49.08a3.89 3.89 0 0 1-3.94 3.01H72.19c-2.19 0-2.96-1.23-2.3-3.69l65.43-192.46c.64-2.02 1.31-3.99 1.95-6.57.88-4.47 1.33-9.02 1.32-13.59-.19-1.34.98-2.54 2.28-2.35h52.02c1.51 0 2.38.56 2.61 1.69l74.27 213.62c.65 2.23 0 3.34-1.97 3.34h-42.53c-1.53.15-2.92-.86-3.27-2.35l-16.67-49.74Zm-63.79-41.38h51.68c-8.48-29.02-18.06-57.65-25.83-86.91-8.81 30.34-16.95 58.47-25.85 86.91M325 286.96c3.03 24.91 23.95 36.8 47.13 36.3 13.06-.26 27.03-2.28 39.24-7.23 1.08-.89 1.63-.34 1.64 1.67v31.87c.14 1.6-.62 3.15-1.97 4.02-15.17 6.9-32.6 8.99-49.06 8.71-49.08 0-82.78-34.57-82.76-84.87-.12-47.69 30.81-87.9 78.85-87.9 40.72-1.05 68.92 31.54 69.02 72.12 0 7.41-.44 14.79-1.31 22.14a3.035 3.035 0 0 1-2.94 2.7c-32.52 0-65.21.47-97.81.47m-.02-30.57c18.13 0 36.37.64 54.48-.17 2.73-.28 4.75-.8 4.75-3.62-.38-15.05-13.08-27.41-27.81-26.84-17.8-1.11-29.19 13.93-31.4 30.64' style='fill:#9695c9'/></svg>",
    "project": [],
    "category": "Creative / Design"
  },
  "lottie": {
    "name": "Lottie",
    "slug": "lottie",
    "text": "I use Lottie for lightweight vector animation inside web experiences, especially when a branded motion sequence needs to stay crisp and responsive without relying on a large video file. I combine it with interface timing and React state when the animation is part of a larger interaction.",
    "image": "<svg width='500' height='500' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' rx='5' fill='#00DDB3'/><path fill='#fff' d='M17.928 0H6.072A6.076 6.076 0 0 0 0 6.073v11.854A6.076 6.076 0 0 0 6.073 24h11.854A6.076 6.076 0 0 0 24 17.927V6.073A6.076 6.076 0 0 0 17.927 0m1.42 7.013a1.4 1.4 0 0 1-.26.39c-.11.11-.24.2-.39.26-.14.06-.3.09-.45.09-2.511 0-3.482 1.53-4.792 4.042l-.8 1.51c-1.231 2.382-2.762 5.323-6.894 5.323-.31 0-.62-.12-.84-.35a1.188 1.188 0 0 1 .84-2.031c2.511 0 3.482-1.53 4.792-4.042l.8-1.51c1.231-2.382 2.762-5.323 6.894-5.323q.24 0 .45.09c.14.06.27.15.39.26.11.11.2.24.26.39a1.17 1.17 0 0 1 0 .9'/></svg>",
    "category": "Creative / Design"
  },
  "seo": {
    "name": "Technical SEO",
    "slug": "seo",
    "text": "I work on the technical structure that helps websites communicate clearly with search engines. That includes metadata, canonical URLs, sitemaps, robots directives, internal linking, page architecture, Search Console review, and aligning content structure with how people actually search.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='seoG' x1='10' y1='86' x2='86' y2='10' gradientUnits='userSpaceOnUse'><stop stop-color='#4d27a8'/><stop offset='1' stop-color='#76d7ff'/></linearGradient></defs><rect x='3' y='3' width='90' height='90' rx='20' fill='url(#seoG)'/><circle cx='42' cy='40' r='19' fill='none' stroke='#fff' stroke-width='7'/><path d='M56 54 75 73' stroke='#fff' stroke-width='7' stroke-linecap='round'/><path d='M26 68h8V56h8v12h8V48h8v20h8' fill='none' stroke='#fff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    "category": "Search & Digital Visibility"
  },
  "jsonld": {
    "name": "Structured Data & JSON-LD",
    "slug": "jsonld",
    "text": "I use structured data to give search engines clearer context about pages, people, organizations, articles, videos, projects, and other content. I build and maintain JSON-LD systems that keep schema aligned with the visible page and the site's canonical URL structure.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='jsonG' x1='8' y1='88' x2='88' y2='8' gradientUnits='userSpaceOnUse'><stop stop-color='#2a45f9'/><stop offset='1' stop-color='#bbaaff'/></linearGradient></defs><rect x='3' y='3' width='90' height='90' rx='20' fill='url(#jsonG)'/><path d='M31 24c-8 0-10 5-10 11v7c0 4-2 6-6 6 4 0 6 2 6 6v7c0 6 2 11 10 11M65 24c8 0 10 5 10 11v7c0 4 2 6 6 6-4 0-6 2-6 6v7c0 6-2 11-10 11' fill='none' stroke='#fff' stroke-width='5' stroke-linecap='round'/><circle cx='48' cy='33' r='5' fill='#fff'/><circle cx='39' cy='57' r='5' fill='#fff'/><circle cx='58' cy='57' r='5' fill='#fff'/><path d='m46 38-5 14m10-14 5 14M44 57h9' stroke='#fff' stroke-width='3.5' stroke-linecap='round'/></svg>",
    "category": "Search & Digital Visibility"
  },
  "googlebusiness": {
    "name": "Google Business Profile & Local SEO",
    "slug": "googlebusiness",
    "text": "I support local visibility through Google Business Profile setup and optimization, service and business information, review strategy, verification support, and stronger connections between the profile and the business website. I treat the profile as part of the overall digital presence, not a separate listing.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='20' fill='#fff'/><path d='M20 28h56l5 14H15l5-14Z' fill='#4285F4'/><path d='M15 42h13v7a7 7 0 0 1-13 0v-7Z' fill='#4285F4'/><path d='M28 42h13v7a7 7 0 0 1-13 0v-7Z' fill='#EA4335'/><path d='M41 42h14v7a7 7 0 0 1-14 0v-7Z' fill='#FBBC05'/><path d='M55 42h13v7a7 7 0 0 1-13 0v-7Z' fill='#34A853'/><path d='M68 42h13v7a7 7 0 0 1-13 0v-7Z' fill='#4285F4'/><path d='M23 55v21h50V55' fill='none' stroke='#5f6368' stroke-width='5' stroke-linejoin='round'/><path d='M35 76V62h17v14' fill='none' stroke='#5f6368' stroke-width='5'/><path d='M58 62h8v8h-8z' fill='#4285F4'/></svg>",
    "category": "Search & Digital Visibility"
  },
  "youtube": {
    "name": "YouTube & Video Publishing",
    "slug": "youtube",
    "text": "I work with video as part of a broader publishing system. That includes editing, thumbnails, titles, descriptions, YouTube publishing, website video hubs, dedicated watch pages, metadata, structured data, and repurposing video content across search and social channels.",
    "image": "<svg width='500' height='500' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><rect width='24' height='24' rx='5' fill='#FF0000'/><path fill='#fff' d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/></svg>",
    "category": "Search & Digital Visibility"
  },
  "google-analytics": {
    "name": "Google Analytics",
    "slug": "google-analytics",
    "text": "I use Google Analytics to understand how people arrive at a website, which pages and content they engage with, and how behavior changes over time. I use that data to support reporting, diagnose traffic patterns, evaluate campaigns, and make more informed decisions about content and site improvements.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='22' fill='#FFF4E5'/><rect x='24' y='54' width='12' height='20' rx='6' fill='#F9AB00'/><rect x='42' y='37' width='12' height='37' rx='6' fill='#E37400'/><rect x='60' y='20' width='12' height='54' rx='6' fill='#E37400'/><circle cx='30' cy='30' r='7' fill='#F9AB00'/></svg>",
    "category": "Search & Digital Visibility"
  },
  "search-console": {
    "name": "Google Search Console",
    "slug": "search-console",
    "text": "I use Google Search Console to monitor how websites appear in Google Search, review queries and page performance, inspect indexing, identify technical issues, and understand where search visibility is improving or slipping. It is one of the main tools I use to connect SEO decisions with real search data.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='22' fill='#4285F4'/><rect x='20' y='29' width='56' height='42' rx='8' fill='#fff'/><path d='M33 29v-7h30v7' fill='none' stroke='#fff' stroke-width='6' stroke-linecap='round'/><circle cx='45' cy='49' r='10' fill='none' stroke='#4285F4' stroke-width='5'/><path d='m52 56 10 10' stroke='#4285F4' stroke-width='5' stroke-linecap='round'/></svg>",
    "category": "Search & Digital Visibility"
  },
  "meta-analytics": {
    "name": "Meta Analytics",
    "slug": "meta-analytics",
    "text": "I use Meta's analytics and business tools to review reach, engagement, audience response, content performance, and campaign activity across Facebook and Instagram. I use those signals to understand what content is connecting, compare performance over time, and guide future publishing and promotion decisions.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='22' fill='#0866FF'/><path d='M23 59c7-18 13-28 20-28 6 0 10 8 15 17 4 8 7 13 11 13 4 0 7-5 7-12 0-12-5-20-13-20-8 0-14 8-20 20-6 12-10 19-15 19-3 0-5-3-5-9Z' fill='none' stroke='#fff' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><path d='M31 68h34' stroke='#8DC3FF' stroke-width='5' stroke-linecap='round'/></svg>",
    "category": "Search & Digital Visibility"
  },
  "youtube-analytics": {
    "name": "YouTube Analytics",
    "slug": "youtube-analytics",
    "text": "I use YouTube Analytics to evaluate video performance through views, watch time, audience retention, traffic sources, engagement, and subscriber behavior. I use that information to understand where viewers stay or leave, which topics are earning attention, and how video content can be improved for search and ongoing audience growth.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='22' fill='#FF0000'/><path d='M31 30h34c8 0 13 5 13 13v10c0 8-5 13-13 13H31c-8 0-13-5-13-13V43c0-8 5-13 13-13Z' fill='#fff'/><path d='m43 40 15 8-15 8V40Z' fill='#FF0000'/><path d='M30 74h9V63h-9v11Zm14 0h9V59h-9v15Zm14 0h9V54h-9v20Z' fill='#FFD1D1'/></svg>",
    "category": "Search & Digital Visibility"
  },
  "wordpress": {
    "name": "WordPress",
    "slug": "wordpress",
    "text": "I use WordPress for content-driven websites, existing-site support, page and theme customization, plugin configuration, maintenance, and SEO-focused updates. I am comfortable working within established WordPress builds and adapting them to improve content, presentation, and day-to-day usability.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='22' fill='#21759B'/><circle cx='48' cy='48' r='29' fill='none' stroke='#fff' stroke-width='5'/><path d='M27 34h13M56 34h12M33 34l11 34M62 34 52 68M42 34l10 34M68 34c3 7 2 15-2 23' fill='none' stroke='#fff' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    "category": "CMS & Website Platforms"
  },
  "shopify": {
    "name": "Shopify",
    "slug": "shopify",
    "text": "I have hands-on experience working with Shopify storefronts, including products, content, theme settings, layout adjustments, and site presentation. I can work within an existing Shopify setup to make practical front-end and content changes while staying within the platform's ecommerce structure.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='22' fill='#95BF47'/><path d='M31 30h34l5 43H26l5-43Z' fill='#fff'/><path d='M38 32c1-10 5-16 11-16 5 0 9 5 10 16' fill='none' stroke='#fff' stroke-width='5' stroke-linecap='round'/><path d='M57 42c-3-2-6-3-9-3-5 0-8 2-8 6 0 8 17 5 17 16 0 7-6 11-14 11-4 0-8-1-11-3' fill='none' stroke='#5E8E3E' stroke-width='6' stroke-linecap='round'/></svg>",
    "category": "CMS & Website Platforms"
  },
  "wix": {
    "name": "Wix",
    "slug": "wix",
    "text": "I have hands-on experience working in Wix to build and adjust pages, manage site content, refine layouts, and make responsive presentation changes. It is a useful platform when a project needs an approachable visual editing workflow and straightforward ongoing content management.",
    "image": "<svg width='500' height='500' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'><rect x='3' y='3' width='90' height='90' rx='22' fill='#111'/><path d='M18 34l8 29 8-20 8 20 8-29M57 34v29M65 34l13 29M78 34 65 63' fill='none' stroke='#fff' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    "category": "CMS & Website Platforms"
  }
};

export function getTechnology(slug) {
  return technologies[slug];
}

export function getTechnologiesByCategory(category) {
  return Object.values(technologies).filter(
    (technology) => technology.category === category,
  );
}

export default technologies;
