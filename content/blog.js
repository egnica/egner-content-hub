/*
  BLOG CONTENT
  ------------

  Shared blog content for NicholasEgner.com, GIGnovate, and LateStartDev.

  To add a post:
  1. Copy one complete "slug": { ... } entry.
  2. Change the slug key and the slug field to your new URL slug.
  3. Edit the title, description, dates, images, and contentBlocks.
  4. Set live: true when you want it published.
  5. Set showOnGignovate: true only for posts selected for GIGnovate.
  6. Set canonicalSite to either "nicholasegner" or "gignovate".

  A normal content block looks like:

  {
    type: "paragraph",
    text: `Write normally here. Backticks let you use multiple lines.`,
  }

  Headings:

  {
    type: "heading",
    level: 2,
    text: "Section heading",
  }

  LateStartDev is a legacy consumer and can never be canonical.
  A post automatically becomes a video/watch page when it has primaryVideo.
*/

export const posts = {
  "hello-world": {
    id: "001",
    slug: "hello-world",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    title: "Hello World: Starting a Blog, Next.JS, and AWS Amplify",
    description:
      "Welcome to my blog! In this first post, I share my journey of starting a blog using Next.js and AWS Amplify. I discuss the robust features of Next.js, the ease of hosting with AWS Amplify, and my plans for future enhancements like adding a database. Join me as I dive deep into these technologies and share my learnings as a developer.",
    date: "27 Jun 2024",
    published_time: "2024-06-27T16:24:36Z",
    modified_time: "2024-06-27T16:24:36Z",
    featured: false,
    live: true,
    keywords: ["Dev", "Next.js", "AWS Amplify", "Dynamic Routing"],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/wiz-oz.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/wiz-oz.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/hello.mp3",
    contentBlocks: [
      {
        type: "paragraph",
        text: "Welcome to my blog, my friends, DEVs, and randos from the interwebs! This is my first post, and I'm excited to share, well... whatever this is with you.",
      },
      {
        type: "paragraph",
        text: "I’ve decided to start this blog as a way to improve my skills in Next.js and Amazon Web Services (AWS). These technologies are not only powerful but also offer exciting opportunities for future projects and career growth. To be quite honest, it has been such a learning experience, and I’ve had a great time building it.",
      },
      {
        type: "paragraph",
        text: "I’ve also just been looking for a place to try out some different things. After my [failed attempt to be a video game YouTuber](https://www.youtube.com/@YourDadSucksGaming), I figured blogging might be fun, and maybe not so embarrassing... but it will probably turn out to be as embarrassing. Hopefully you enjoy this journey with me as much as I enjoyed building it.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Next.js and AWS Amplify?",
      },
      {
        type: "paragraph",
        text: "I chose Next.js for its honestly bad ass features and flexibility, especially when it comes to server-side rendering and static site generation. I’ve messed around with Next.js a bit, but this gives me an excuse to dive deeper into it.",
      },
      {
        type: "paragraph",
        text: "AWS Amplify, on the other hand, makes hosting and managing this site surprisingly easy. One of the coolest features is the seamless integration with GitHub. Every time I update my repository, the changes are automatically deployed to my site! Coming from PHP and Apache servers at my job, this is seriously a breath of fresh air.",
      },
      {
        type: "paragraph",
        text: "Because of this, I’m currently using a JSON file to render all of this information to you. The goal is to ultimately add a database, but in due time.",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/hello-world.png",
        alt: "Hello World image",
      },
      {
        type: "heading",
        level: 2,
        text: "Dynamic Routing and Other Issues",
      },
      {
        type: "heading",
        level: 4,
        text: "Warning: DEV jargon ahead",
      },
      {
        type: "paragraph",
        text: "One of the significant hurdles was figuring out dynamic routing. Initially, I tried using query strings in the URL to render this very blog page. This method worked fine with Vercel hosting, but I encountered issues when switching to AWS. After some trial and error, I managed to implement [dynamic routing](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes), and everything started coming together.",
      },
      {
        type: "paragraph",
        text: "I love how clean the URL looks now. Just look at it: `https://latestartdev.com/posts/hello-world`. Compared to query strings, you wouldn't even know this URL is dynamic!",
      },
      {
        type: "paragraph",
        text: "Another challenge was dynamically rendering metadata for each blog post. Ensuring that each page had the correct metadata for SEO purposes was tricky but essential. Using the Link tag that Next.js provides out of the box passes parameters so easily. I created a dynamic page and was able to create dynamic URLs using template literals in the `src` part of the Link tag. I'm getting into the weeds here, so I'll probably dedicate a whole post to this topic.",
      },
      {
        type: "paragraph",
        text: 'I also found the Next.js Image tag to be a bit confusing... even still. It\'s a powerful tool for optimizing images, but getting the configuration right took some time and experimentation. I am using an out-of-date method called `layout`. When I use `layout="responsive"`, the image just works. Out of frustration, I have decided to just use this method. Why Next.js?? Why are you taking away this great feature!',
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/well-waiting.png",
        alt: "Waiting image",
      },
      {
        type: "heading",
        level: 2,
        text: "What’s Next... js?",
      },
      {
        type: "paragraph",
        text: "Looking ahead, my next step is to connect the blog to a database. I'm planning to use Amazon DynamoDB to keep everything within the AWS ecosystem. This will allow me to manage and serve blog posts more efficiently.",
      },
      {
        type: "paragraph",
        text: "Through this blog, I’ll be sharing my learnings as a developer, and tips and tricks I pick up along the way, and whatever else I feel like. Whether you're just starting your journey in the tech world or you're changing your career, or whatever, I hope my experiences can provide some value.",
      },
      {
        type: "paragraph",
        text: "Starting something new can be daunting, but when things start to come together, there's no better feeling. I'm looking forward to exploring creative ways to create posts and sharing my progress.",
      },
      {
        type: "paragraph",
        text: "You still there? Didn’t think so…. You were never there anyways…. Stay tuned for more updates!",
      },
    ],
  },
  "hive-mind": {
    id: "002",
    slug: "hive-mind",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: true,
    title: "Is That a Hive Mind, or are You Just Happy to See Me...",
    description:
      "Hive mentality, also known as groupthink, is a phenomenon where individuals follow group decision-making, often losing personal autonomy. This concept is famously explored in the classic sci-fi film The Invasion of the Body Snatchers. Explore how hive mentality affects our daily lives and whether it can lead to positive collective changes, such as the growing trend of non-alcoholic options in the restaurant industry. Dive into the balance between individual choice and group influence, and reflect on whether we are all part of a hive mind.",
    date: "1 Jul 2024",
    published_time: "2024-07-01T13:28:51Z",
    modified_time: "2024-07-01T13:28:51Z",
    keywords: [
      "Mocktail trend",
      "Groupthink",
      "Collective consciousness",
      "Invasion of the Body Snatchers",
      "Health consciousness",
      "Social influence",
    ],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/Hive-mind-main.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/Hive-mind-main.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/hive-mind.mp3",
    contentBlocks: [
      {
        type: "quote",
        text: "I keep seeing these people, all recognizing each other. Something is passing between them all, some secret. It is a conspiracy, I know it.",
      },
      {
        type: "paragraph",
        text: "Hive mentality, also known as groupthink, is when people have a strong tendency to conform to group decision-making. This mentality can lead to feelings of invulnerability and moral superiority within the group, potentially causing individuals to lose their free will and become controlled by external influences. But is the concept of a Hive Mind merely fictional?",
      },
      {
        type: "paragraph",
        text: "This phenomenon has been explored in various cultural contexts, most famously for me in the classic sci-fi film [The Invasion of the Body Snatchers](https://en.wikipedia.org/wiki/Invasion_of_the_Body_Snatchers_(1978_film)). The film features alien plant spores that duplicate and replace humans, creating a collective consciousness and capturing the fear surrounding the loss of individual identity.",
      },
      {
        type: "paragraph",
        text: "Do you ever feel like you might be part of a hive mind mentality? Maybe that feeling comes from subconscious influences that we’re not always aware of.",
      },
      {
        type: "paragraph",
        text: "Let me give you an example from my own life. Recently, I’ve been focusing more on my health and wellbeing, which includes not drinking alcohol. Having worked in restaurants for most of my life until a few years ago, I’ve noticed a shift in the industry. Mocktail menus and non-alcoholic (NA) options are now more prevalent than ever. Sure, there were always a few token options like O’Douls, but now there’s a real variety available.",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/Beer-drink.png",
        alt: "Non-alcoholic drink",
      },
      {
        type: "paragraph",
        text: "This shift got me thinking: Is this change driven by a genuine increase in health consciousness, or is it another example of hive mentality? In this case, it feels like the hive mentality is for the better. There’s a wave of ideas focused on making life better through alternative choices.",
      },
      {
        type: "paragraph",
        text: "Or maybe this is the THC talking… I have been partaking a little during my no-drinking era. In 2023, [Minnesota legalized recreational marijuana for adults](https://www.lrl.mn.gov/guides/guides?issue=cannabis).",
      },
      {
        type: "paragraph",
        text: "We often think of hive mentality as something negative, a loss of individuality. But sometimes it can propel us toward collective improvements that might be harder to achieve alone. It’s an interesting balance between individual choice and group influence, and it’s worth pondering as we navigate our personal and social lives.",
      },
    ],
  },
  "query-vs-dynamic": {
    id: "003",
    slug: "query-vs-dynamic",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: false,
    title: "Do You Even Dynamic Link Bro?",
    description:
      "Explore the differences between query stringing and dynamic linking in Next.js. Learn about the challenges with query stringing in React and Apache servers, and discover the benefits of dynamic linking for cleaner, SEO-friendly URLs and simplified navigation",
    date: "14 Jul 2024",
    published_time: "2024-07-14T19:08:26Z",
    modified_time: "2024-07-14T19:08:26Z",
    keywords: [
      "Dev",
      "Next.js",
      "Dynamic Linking",
      "Query Stringing",
      "Vercel",
    ],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/render.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/render.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/workitout.mp3",
    contentBlocks: [
      {
        type: "paragraph",
        text: "I was working on a few projects where I wanted to have content render to a page using query stringing. Query strings are a straightforward way to pass parameters in URLs. They are appended to the URL after a question mark (?), with key-value pairs separated by an ampersand (&).",
      },
      {
        type: "code",
        language: "javascript",
        code: "https://latestartdev.com/page?param1=value1&param2=value2",
      },
      {
        type: "paragraph",
        text: "For my personal projects, I was using c-panel and hosting through Hostgator. For work, our web server is built with Apache. I would build the application locally, and everything would work the way I’d expect it to work with info rendering nicely using query stringing. And then, when I’d serve it up through one of the aforementioned servers, any time I’d refresh the page populated from the query string, the page would just break. So frustrating! I have zero experience with setting up either server, so I didn’t really know what to do.",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/theproblem.png",
        alt: "Illustration of the problem",
      },
      {
        type: "paragraph",
        text: "I decided to pivot and loaded one of my projects to [Vercel](https://vercel.com/). And it just worked! Not only that, but I didn’t have to have my app go through a static build and upload a folder with random files to a server. Instead, I just needed to create a repository in GitHub for my project, connect it to Vercel, and every time I saved my project on VS Code, all the updates would go live directly to my website! I still love how easy that process is.",
      },
      {
        type: "paragraph",
        text: "While I got a project up and running hosting through Vercel, I was learning a lot about Next.js. It’s how I heard about Vercel in the first place as they are the company that created Next.js. As I’m learning about things, I came across dynamic linking. Whaaa?… It’s query stringing without stringing anything to the URL… looks so clean! In fact it is what I'm using for the page you are currently reading!",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/dynamicnow.png",
        alt: "Dynamic routing example",
      },
      {
        type: "heading",
        level: 2,
        text: "Let’s Talk About Dynamic Routes in Next.js",
      },
      {
        type: "paragraph",
        text: "When building web applications, dynamically rendering pages based on URL parameters is a common requirement. Next.js simplifies this process with dynamic routes. Here's how you can effectively create and use dynamic routes by creating a simple list using map, and making those list items link to pages using dynamic linking:",
      },
      {
        type: "heading",
        level: 4,
        text: "1. Create a New Next.js Project",
      },
      {
        type: "paragraph",
        text: "Start by setting up a new Next.js project. Be sure to set up your app with App Router.",
      },
      {
        type: "heading",
        level: 4,
        text: "2. Set Up Folder and Dynamic Routing",
      },
      {
        type: "paragraph",
        text: "In your Next.js project, create a folder structure and utilize dynamic routing. For example:",
      },
      {
        type: "code",
        language: "text",
        code: `app
|__ page.jsx
|__ posts.json
|__ [postSlug]
    |__ page.jsx`,
      },
      {
        type: "paragraph",
        text: "Take note of the folder named `[postSlug]`. To make the URL dynamic, it's essential to have the folder name surrounded by brackets like above.",
      },
      {
        type: "heading",
        level: 4,
        text: "3. Create a JSON File for Data",
      },
      {
        type: "paragraph",
        text: "Begin with a JSON file (`posts.json`) containing objects with titles and corresponding query parameters:",
      },
      {
        type: "code",
        language: "json",
        code: `{
  "posts": [
    { "title": "My First Post", "query": "first-post" },
    { "title": "My Second Post", "query": "second-post" }
  ]
}`,
      },
      {
        type: "heading",
        level: 4,
        text: "4. Implement Dynamic Linking",
      },
      {
        type: "paragraph",
        text: "In your `app/page.jsx` file, map through the objects in `posts.json` and use Next.js `Link` to dynamically link to each post:",
      },
      {
        type: "code",
        language: "jsx",
        code: `import Posts from "./posts.json";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {Posts.posts.map((item) => (
        <div key={item.id}>
          <Link href={\`demo/\${item.query}\`}>{item.title}</Link>
        </div>
      ))}
    </>
  );
}`,
      },
      {
        type: "heading",
        level: 4,
        text: "5. Render the Dynamic Page",
      },
      {
        type: "paragraph",
        text: "In your `[query]/page.jsx` file, retrieve the query parameter from the URL and find the matching post:",
      },
      {
        type: "code",
        language: "jsx",
        code: `import Posts from "../posts.json";

export default function Page({ params }) {
  const queryString = params.render;
  const foundPost = Posts.posts.find((item) => item.query === queryString);

  return (
    <>
      <h1>{foundPost.title}</h1>
    </>
  );
}`,
      },
      {
        type: "paragraph",
        text: "Following the above, you are rendering out the `title` field connected to the `query` field on your JSON file.",
      },
      {
        type: "paragraph",
        text: "I found this video that I thought was very helpful: [YouTube video](https://www.youtube.com/watch?v=ec3OEG8DXJM&list=LL&index=4&t=1978s). Check it out if you are looking for something a little more in-depth.",
      },
      {
        type: "paragraph",
        text: "Dynamic routes in Next.js offer a robust mechanism for creating flexible and SEO-friendly web applications. By leveraging dynamic segments, accessing URL parameters, and seamlessly linking between pages, developers can enhance user experiences and streamline development. Whether you're building a blog, e-commerce site, or any dynamic application, Next.js' dynamic routing capabilities provide powerful solutions to meet your needs. Explore, experiment, and harness the full potential of Next.js for your projects. I hope this guide proves helpful to you!",
      },
    ],
  },
  "shelley-duvall": {
    id: "004",
    slug: "shelley-duvall",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: true,
    title: "Shelley, Darling, Light of my Life...",
    description:
      "Reflecting on Shelley Duvall’s legacy, let's explore her complex performance in ’The Shining,’ her experience on set with Stanley Kubrick, and acknowledging the depth and dedication behind her performances... or not?",
    date: "16 Jul 2024",
    published_time: "2024-07-16T13:52:16Z",
    modified_time: "2024-07-16T13:52:16Z",
    keywords: [
      "Shelley Duvall tribute",
      "Shelley Duvall",
      "The Shining",
      "Stanley Kubrick",
      "film performance analysis",
      "Olive Oyl",
    ],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/Duvall-cover.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/Duvall-cover.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/shinning-intro.mp3",
    contentBlocks: [
      {
        type: "heading",
        level: 2,
        text: "Shelley Duvall: A Retrospective on Her Unique Legacy",
      },
      {
        type: "paragraph",
        text: "Shelley Duvall’s passing on July 11, 2024, marks the end of an era for a unique actress. Best known to me for her role as Wendy Torrance in Stanley Kubrick’s *The Shining*, Duvall left an indelible mark on cinema. As someone who considers *The Shining* a favorite movie, I wanted to take a moment to reflect on her work and the impact she had on me as a viewer.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Shining: A Complex Performance",
      },
      {
        type: "paragraph",
        text: "When I watched *The Shining*, I struggled with Shelley Duvall’s portrayal of Wendy Torrance. Her expressions and reactions, notably during the iconic elevator scene where blood spills out from the doors, felt over the top and pulled me out of the moment. Her exaggerated fear and hysteria seemed too much, detracting from the chilling atmosphere Kubrick masterfully created. This detraction occurred several times for me throughout her performance in the film.",
      },
      {
        type: "video",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/video/shelley-blood.mp4",
      },
      {
        type: "paragraph",
        text: "I don’t think I am alone in this criticism. Shelley was even nominated for a Razzie award for her performance in the film, although the parody award show later [rescinded that nomination](https://movieweb.com/shelley-duvall-razzie-rescinded/). Over time, I thought it might be time to reconsider my initial judgment.",
      },
      {
        type: "paragraph",
        text: "With repeated viewings, I started to see the nuance and wondered if the performance was intentionally… annoying. Wendy Torrance is a woman with good intentions, caught in a terrifying and surreal situation. Her seemingly irritating and overly dramatic demeanor highlights the claustrophobic tension of being trapped in the Overlook Hotel with an increasingly unhinged husband and a son who talks to his finger.",
      },
      {
        type: "paragraph",
        text: "Duvall’s portrayal, which initially felt grating, started to make sense within the context of the story. She embodied a character who is not just a victim but a catalyst in Jack Torrance’s descent into madness. You begin to understand and perhaps empathize with why Jack goes down the path that he does.",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/danny-deadpeople.png",
        alt: "Danny Torrance in The Shining",
      },
      {
        type: "heading",
        level: 2,
        text: "Challenges on The Shining Set",
      },
      {
        type: "paragraph",
        text: "Duvall’s experience on the set of *The Shining* was infamously grueling. Stanley Kubrick was notorious for his demanding and meticulous nature, and Duvall faced his relentless intensity head-on. She was subjected to extreme stress, with Kubrick insisting on numerous retakes to capture the perfect level of hysteria.",
      },
      {
        type: "paragraph",
        text: "This process took a significant toll on her both physically and mentally. In later interviews, Duvall described the experience as almost unbearable, yet she retained a certain respect for Kubrick’s vision and the cinematic masterpiece they created together.",
      },
      {
        type: "paragraph",
        text: "I clipped together moments from [Vivian Kubrick’s documentary](https://www.youtube.com/watch?v=OukJ7jR4CaM&t=810s) that show what life was like for Shelley on set. It gives the impression that her behavior was difficult to tolerate and not always taken very seriously.",
      },
      {
        type: "video",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/video/shelley-clip.mp4",
      },
      {
        type: "heading",
        level: 2,
        text: "Olive Oyl: Perfect Casting",
      },
      {
        type: "paragraph",
        text: "On a lighter note, Shelley Duvall’s role as Olive Oyl in [Robert Altman’s *Popeye*](https://www.imdb.com/title/tt0081353/?ref_=tt_ch) stands out as one of the most perfectly cast roles in film history. Her lanky frame, quirky mannerisms, and distinctive voice brought the beloved cartoon character to life in a way that no other actress could have.",
      },
      {
        type: "paragraph",
        text: "Shelley Duvall’s legacy is one of complexity and contradiction. While I might not have been the biggest fan of her work initially — and honestly, I’m still not sure I enjoy it. I can appreciate the dedication and resilience it took to deliver such performances, particularly under the immense pressure from a director like Kubrick.",
      },
      {
        type: "paragraph",
        text: "Her performances can be polarizing, but they are undeniably impactful. She brought a unique energy and authenticity to her roles, from the terrified wife in *The Shining* to the whimsical Olive Oyl. Rest in peace, Shelley Duvall. Your talent and spirit will be missed.",
      },
    ],
  },
  "graphql-project": {
    id: "005",
    slug: "graphql-project",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: false,
    title: "Build a Continent/Country Selector with GraphQL and React",
    description:
      "In this tutorial, we'll walk through the process of building a simple React app that allows users to select a continent from a dropdown menu and display the corresponding countries in that continent. We will use Vite, a fast frontend build tool, to set up our React project. Additionally, we'll leverage GraphQL to fetch the data dynamically, making our app flexible and efficient.",
    date: "23 Aug 2024",
    published_time: "2024-08-23T21:03:08Z",
    modified_time: "2024-08-23T21:03:08Z",
    keywords: ["Dev", "GraphQL", "Vite"],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/graphql-cover.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/graphql-cover.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/ping-Island.mp3",
    contentBlocks: [
      {
        type: "paragraph",
        text: "I have been learning how to use **GraphQL** to link my applications to a database. I found [this tutorial](https://www.youtube.com/watch?v=0ZJI4cBS4JM&t=772s) by Web Dev Simplified, but some of the content was outdated. After doing some research, I created this updated version.",
      },
      {
        type: "paragraph",
        text: "In this tutorial, we’ll build a simple React app that allows users to select a continent from a dropdown menu and display the corresponding countries. We’ll use **Vite** to set up the project and **GraphQL** to fetch data dynamically.",
      },
      {
        type: "heading",
        level: 2,
        text: "Step 1: Setting Up the React Project with Vite",
      },
      {
        type: "paragraph",
        text: "First, create a new React project using Vite and start the development server:",
      },
      {
        type: "code",
        language: "bash",
        code: `npm create vite@latest continent-country-selector
cd continent-country-selector
npm install
npm run dev`,
      },
      {
        type: "paragraph",
        text: "Vite provides a faster and more efficient development experience compared to tools like Create React App.",
      },
      {
        type: "heading",
        level: 2,
        text: "Step 2: Structuring the App Component",
      },
      {
        type: "paragraph",
        text: "Next, set up the basic structure of your `App.jsx` component. This component will manage state for continents, the selected continent, countries, and UI visibility.",
      },
      {
        type: "embed",
        provider: "thiscodeworks",
        src: "https://www.thiscodeworks.com/embed/66c6573de0e1df0014e8d848",
      },
      {
        type: "heading",
        level: 2,
        text: "Step 3: Fetching Data from the GraphQL API",
      },
      {
        type: "paragraph",
        text: "We’ll use the **fetch API** to send GraphQL queries to `https://countries.trevorblades.com/`. Start by creating a reusable `fetchGraphQL` function:",
      },
      {
        type: "embed",
        provider: "thiscodeworks",
        src: "https://www.thiscodeworks.com/embed/66c8c340e32d310014d3f324",
      },
      {
        type: "heading",
        level: 2,
        text: "Step 4: Fetching and Displaying Continents",
      },
      {
        type: "paragraph",
        text: "Fetch the list of continents when the component mounts using `useEffect`, and store the result in state.",
      },
      {
        type: "embed",
        provider: "thiscodeworks",
        src: "https://www.thiscodeworks.com/embed/66c8c408e32d310014d3f454",
      },
      {
        type: "paragraph",
        text: "Once fetched, render the continents inside a dropdown menu:",
      },
      {
        type: "embed",
        provider: "thiscodeworks",
        src: "https://www.thiscodeworks.com/embed/66c8c4a9e32d310014d3f583",
      },
      {
        type: "heading",
        level: 2,
        text: "Step 5: Fetching and Displaying Countries",
      },
      {
        type: "paragraph",
        text: "When a user selects a continent, fetch the corresponding countries using another `useEffect` hook:",
      },
      {
        type: "embed",
        provider: "thiscodeworks",
        src: "https://www.thiscodeworks.com/embed/66c8c554e32d310014d3f854",
      },
      {
        type: "paragraph",
        text: "Finally, render the list of countries below the dropdown:",
      },
      {
        type: "embed",
        provider: "thiscodeworks",
        src: "https://www.thiscodeworks.com/embed/66c8c612e32d310014d3fa63",
      },
      {
        type: "paragraph",
        text: "In this tutorial, we built a simple React app using Vite that allows users to select a continent and view the corresponding countries. By leveraging GraphQL and the fetch API, we dynamically updated the UI based on user input.",
      },
      {
        type: "paragraph",
        text: "If you want to explore the full project, [here’s the complete source code on GitHub](https://gist.github.com/egnica/1a3ec63e61999ef94fb1265ca50b551b).",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/graphql-app.gif",
        alt: "GraphQL continent and country selector app demo",
      },
    ],
  },
  "different-servers": {
    id: "006",
    slug: "different-servers",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: false,
    title: "Who's Serving Who? The Code vs. The Machine",
    description:
      "Unravel the confusion around servers in web development. Discover the difference between physical and software servers, with humorous analogies and practical insights. Perfect for developers curious about how servers truly work.",
    date: "06 Sep 2024",
    published_time: "2024-09-06T14:03:31Z",
    modified_time: "2024-09-06T14:03:31Z",
    keywords: [
      "Dev",
      "Web development servers",
      "Physical vs software servers",
      "Server types in web development",
      "Server confusion in web development",
    ],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/aretha.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/aretha.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/Zoomin-Who.m4a",
    contentBlocks: [
      {
        type: "paragraph",
        text: "As a web developer, you often come across the word [server](https://www.youtube.com/watch?v=Fxr9YZB4lHQ), and it can mean different things depending on the context. This can get confusing. Like Abbott and Costello asking “Who’s on first?” or Aretha Franklin wondering “Who’s Zoomin’ Who?”, we ask ourselves: *Who’s serving what to where?*",
      },
      {
        type: "paragraph",
        text: "It’s funny while dining at my favorite restaurant, I found myself having a discussion with my **server**. I said, “Let’s clarify the key difference between programming a server in code and the physical machine we call a server!” She furrowed her brow and replied, “I asked what you’d like to drink.”",
      },
      {
        type: "paragraph",
        text: "For beginners, it’s easy to get lost. And honestly, even for seasoned developers, the term can still be misleading at times.",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/waiting.png",
        alt: "Waiting server illustration",
      },
      {
        type: "heading",
        level: 2,
        text: "1. The Physical Machine (Hardware / Cloud Server)",
      },
      {
        type: "paragraph",
        text: "A server is a physical machine that provides resources to other computers. It may live in a data center or exist as a virtual server provisioned in the cloud. Either way, it typically runs 24/7 to serve files or data to the web, whether on-premises or in massive data centers managed by AWS, Google Cloud, or Microsoft Azure.",
      },
      {
        type: "paragraph",
        text: "To deliver content, these physical servers rely on software like Apache or Nginx, which handle incoming requests and send the appropriate data to users.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "On-premise servers: Dedicated hardware maintained by a company or data center.",
          "Cloud servers: Virtual machines running on shared infrastructure, providing scalability without managing physical hardware.",
          "It’s hardware with CPU, memory, and storage.",
          "Both on-premise and cloud servers provide computing power for applications.",
          "Cloud servers offer elastic scaling, but underneath, they’re still physical machines.",
        ],
      },
      {
        type: "paragraph",
        text: "After a volleyball game, a teammate and I were discussing his confusion about what Node.js is. Man, he’s a strong **server**. I explained that in programming, a server can also refer to software that listens for requests and responds to them. A server within a server, so to speak. **Server-ception.**",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/top-gun-server.png",
        alt: "Serverception visual",
      },
      {
        type: "heading",
        level: 2,
        text: "2. The Program (Software Server)",
      },
      {
        type: "paragraph",
        text: "When we talk about a server in programming, we’re usually referring to software that listens for and responds to requests. This server-side code runs on a physical (or cloud) machine and handles everything from delivering web pages to managing databases.",
      },
      {
        type: "paragraph",
        text: "The software server is the brain behind what the user sees. It can be written in many programming languages, each with its own strengths and tradeoffs.",
      },
      {
        type: "heading",
        level: 3,
        text: "Popular Server-Side Programming Languages",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**JavaScript (Node.js)** — Great for asynchronous operations. Common frameworks: Express.js, Nest.js.",
          "**Python** — Simple and readable. Common frameworks: Django, Flask.",
          "**Ruby** — Optimized for developer happiness. Common frameworks: Ruby on Rails, Sinatra.",
          "**Java** — Highly scalable and stable. Common frameworks: Spring Boot, Java EE.",
          "**PHP** — A long-standing web powerhouse. Common frameworks: Laravel, Symfony.",
          "**C# (ASP.NET)** — Enterprise-grade development within the .NET ecosystem. Common framework: ASP.NET Core.",
        ],
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/seth-served.png",
        alt: "Server analogy image",
      },
      {
        type: "paragraph",
        text: "Just the other day, while deploying my Node.js server to AWS, there was a knock at the door. A [process server](https://www.uslegalsupport.com/blog/what-is-a-process-server/) stood there delivering legal documents. As he handed me the papers, he said, “A server can be both hardware and software and both matter.”",
      },
      {
        type: "heading",
        level: 3,
        text: "The Takeaway",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Physical servers handle the hardware side moving data from point A to point B.",
          "Software servers handle the programming side receiving requests, processing them, and sending responses.",
          "And sometimes, other servers exist just to remind you not all servers live in the digital world.",
        ],
      },
    ],
  },
  "american-reflections": {
    id: "007",
    slug: "american-reflections",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: true,
    title: "Reflections on Being American: November 6, 2024",
    description:
      "Reflecting on American identity and values in 2024, this personal post explores the complexity of feeling disconnected in a divided nation after the recent election. A candid look at what it means to belong, hope, and navigate a sense of home amid political and cultural shifts.",
    date: "06 Nov 2024",
    published_time: "2024-11-06T19:02:51Z",
    modified_time: "2024-11-06T19:02:51Z",
    keywords: [
      "personal reflection on American identity 2024",
      "disconnected from American values",
      "post-election reflections US politics",
      "feeling disconnected in America 2024",
      "what does it mean to be American 2024",
      "American values and identity post-election",
    ],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/this-is-america.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/this-is-america.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/This-Is-America.m4a",
    contentBlocks: [
      {
        type: "paragraph",
        text: "I’m sitting at my desk on Wednesday morning, November 6, 2024, sipping coffee and reflecting on what it truly means to be American. And honestly, I’m having a hard time figuring out if I fit in.",
      },
      {
        type: "paragraph",
        text: "I’m not so naïve to believe that all, or even most politicians are selfless champions of the public good. More often, personal agendas seem to take precedence over the well-being of the people. But here we are, with Donald Trump as our president once again. When the country’s direction feels out of step with my own values, it feels isolating — almost as if the idea of *home* is shifting into something unrecognizable.",
      },
      {
        type: "paragraph",
        text: "Seeing someone in a role as symbolic as the presidency who doesn’t reflect any of the values I hold feels like a rejection of those values on a grand scale. When a leader’s values feel so out of sync with my own, it’s not just disappointing, it’s unsettling.",
      },
      {
        type: "paragraph",
        text: "Leaders shape culture not only through policy, but through the behavior they model. When respect or empathy seem optional at the top, it sends a message downstream. It can almost feel like permission.  Permission for attitudes and actions that, under other circumstances, would be unacceptable. It’s more than policy. It’s about identity.",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/it-complicated.png",
        alt: "Complex emotions illustration",
      },
      {
        type: "paragraph",
        text: "I’m not perfect, *shocker*. I don’t have all the answers, and I know I have my own flaws, sometimes immense ones. But maybe that’s why this is so troubling. If I can recognize my own limitations, it feels reasonable to hope that those in positions of power might strive to set a better example.",
      },
      {
        type: "paragraph",
        text: "It’s not about expecting perfection. It’s about modeling values that encourage growth, understanding, and respect, especially when that’s hard. Watching what feels like a shift in what’s considered acceptable is unsettling. When leaders mock adversaries or dismiss entire groups of people, those behaviors can be echoed and amplified.",
      },
      {
        type: "paragraph",
        text: "Over time, this shapes culture. Hostility, division, and disrespect begin to feel justified, even patriotic. And that, more than any single policy decision, makes me question whether my values will ever align with the direction this country seems to be heading.",
      },
      {
        type: "paragraph",
        text: "Then there’s the phrase people love to throw around: *“Love it or leave it.”* But is love really the right word? Love suggests blind loyalty, something that leaves little room for criticism or nuance. Relationships aren’t that simple, and neither is my relationship with America.",
      },
      {
        type: "paragraph",
        text: "This is where my family lives. This is where I’ve built my life. These are my roots. Leaving isn’t simple, and staying doesn’t mean everything here aligns with who I am. Like most things in life, it’s complicated.",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/the-bottom.png",
        alt: "Reflection and uncertainty",
      },
      {
        type: "paragraph",
        text: "Maybe this isn’t about love at all, maybe it’s about hope. A hope that there’s still room to build something better, even when the road forward isn’t clear. But at the same time, I wonder how long someone can feel like a stranger in their own country before that hope starts to fade.",
      },
    ],
  },
  "closures-javascript": {
    id: "008",
    slug: "closures-javascript",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: false,
    title: "Closure on the Concept of JavaScript Closures",
    description:
      "Learn about JavaScript closures. This post covers what closures are, provides clear examples, breaks down complex concepts, and explains why closures are an essential part of any JavaScript developer's toolkit.",
    date: "07 Jan 2025",
    published_time: "2025-01-07T15:32:05Z",
    modified_time: "2025-01-07T15:32:05Z",
    keywords: ["closures", "javascript", "scope"],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/closers-cover.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/closers-cover.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/closure-song.mp3",
    contentBlocks: [
      {
        type: "paragraph",
        text: "I was recently talking with a senior developer who was asking me JavaScript questions to gauge my knowledge. Before that conversation, I felt confident. After it, I felt deflated. It became clear that I still had work to do.",
      },
      {
        type: "paragraph",
        text: "My goal is to become comfortable with the areas where I fell short. To that end, I want to bring clarity to one of the most important and confusing JavaScript concepts: **closures**.",
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding Closures",
      },
      {
        type: "paragraph",
        text: "Closures are tricky, but they become easier to understand when broken down. A closure happens when a function can **remember** and access variables from its outer [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope), even after that outer scope has finished executing.",
      },
      {
        type: "paragraph",
        text: "**Key takeaway:** Closures enable functions to remember and access variables from their surrounding context, even after that context has finished executing.",
      },
      {
        type: "heading",
        level: 2,
        text: "Example of a Closure",
      },
      {
        type: "paragraph",
        text: "Here’s a simple example to illustrate how closures work. Create an HTML file, link a `script.js` file, and paste the following code. Refer back to this block throughout the article.",
      },
      {
        type: "code",
        language: "javascript",
        code: `function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(\`Outer Variable: \${outerVariable}\`);
    console.log(\`Inner Variable: \${innerVariable}\`);
  };
}

const closureFunc = outerFunction('outside');
closureFunc('inside');`,
      },
      {
        type: "paragraph",
        text: "**Explanation:**",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "`outerFunction` takes a parameter `outerVariable`.",
          "It returns `innerFunction`, which takes its own parameter `innerVariable`.",
          "`innerFunction` logs both `outerVariable` and `innerVariable`.",
          "Even after `outerFunction` finishes executing, `innerFunction` retains access to `outerVariable` because of the closure.",
        ],
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/arnald-closers.png",
        alt: "Closure concept illustration",
      },
      {
        type: "heading",
        level: 2,
        text: "Breaking Down the Code",
      },
      {
        type: "paragraph",
        text: "Let’s reference the code block above and walk through it step by step.",
      },
      {
        type: "heading",
        level: 4,
        text: "Step 1: Defining the Outer Function",
      },
      {
        type: "paragraph",
        text: "`outerFunction` is defined with one parameter: `outerVariable`.",
      },
      {
        type: "heading",
        level: 4,
        text: "Step 2: Returning the Inner Function",
      },
      {
        type: "paragraph",
        text: "Instead of executing `innerFunction`, `outerFunction` returns it. The returned function retains access to `outerVariable`.",
      },
      {
        type: "heading",
        level: 4,
        text: "Step 3: Parameters in Scope",
      },
      {
        type: "paragraph",
        text: "`outerVariable` belongs to `outerFunction`, but remains accessible inside `innerFunction` due to the closure.",
      },
      {
        type: "heading",
        level: 4,
        text: "Step 4: Logging Inside the Inner Function",
      },
      {
        type: "paragraph",
        text: "`innerFunction` logs both `outerVariable` and `innerVariable`, demonstrating how closures preserve access to outer scope variables.",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/How-does-closers.png",
        alt: "How closures work diagram",
      },
      {
        type: "heading",
        level: 2,
        text: "How the Function Calls Work",
      },
      {
        type: "heading",
        level: 4,
        text: "1. Calling outerFunction",
      },
      {
        type: "paragraph",
        text: "`const closureFunc = outerFunction('outside');`",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "`outerFunction` is called with the argument `'outside'`.",
          "It returns `innerFunction`.",
          "The returned function is stored in `closureFunc`.",
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "2. Calling innerFunction via closureFunc",
      },
      {
        type: "paragraph",
        text: "`closureFunc('inside');`",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "`closureFunc` is invoked with the argument `'inside'`.",
          "`innerFunction` logs both values.",
          "`outerVariable` remains accessible even though `outerFunction` has completed.",
        ],
      },
      {
        type: "paragraph",
        text: "**In short:** `closureFunc` is the returned `innerFunction`. It remembers the argument passed to `outerFunction` and accepts a new argument for itself.",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/think-mcfly-closures.png",
        alt: "Thinking about closures",
      },
      {
        type: "heading",
        level: 2,
        text: "Common Misunderstandings",
      },
      {
        type: "paragraph",
        text: "Why doesn’t `closureFunc('inside')` invoke `outerFunction` again?",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "`closureFunc` is just a reference to `innerFunction`.",
          "`outerFunction` is no longer involved after returning `innerFunction`.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Why Closures Matter",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Data encapsulation — variables can remain private.",
          "Function factories — create functions with preset behavior.",
          "State management — especially useful in asynchronous code.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Final Thoughts",
      },
      {
        type: "paragraph",
        text: "Closures are a foundational JavaScript concept. While they can be confusing at first, understanding them deepens your grasp of functions and scope. With practice, closures become a natural and powerful part of your JavaScript toolkit.",
      },
    ],
  },
  "scrolling-text": {
    id: "009",
    slug: "scrolling-text",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: false,
    title: "A CallBack, Modulo, and setInterval Walk into a Bar...",
    description:
      "How I learned to cycle words in React without using a loop. Learn how to cycle through an array in React using setInterval, a state callback, and the modulo (%) operator. A practical walkthrough for handling timed updates without using traditional loops.",
    date: "30 Mar 2025",
    published_time: "2025-03-30T15:38:13Z",
    modified_time: "2025-03-30T15:38:13Z",
    keywords: ["React", "modulo operator", "setInterval"],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/modulo-with-you.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/modulo-with-you.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/fistfull.mp3",
    contentBlocks: [
      {
        type: "paragraph",
        text: "I was working on a project that required cycling through an array of words and displaying them one at a time. Sounds simple. Show a word, wait a few seconds, show the next — and loop it [forever](https://www.youtube.com/watch?v=EsMdABK3SKU#t=1m43s).",
      },
      {
        type: "paragraph",
        text: "My instinct? A **loop**. That’s always been my go-to when iterating over arrays — like a trusty six-shooter at my side.",
      },
      {
        type: "paragraph",
        text: "But this time, nothing was firing properly. I’ve never been super confident with JavaScript timing functions like `setTimeout` or `setInterval`, but I knew this problem lived there. As I dug deeper, I realized the tools I thought I needed weren’t the ones I actually needed.",
      },
      {
        type: "paragraph",
        text: "Enter: the [callback function](https://www.w3schools.com/js/js_callback.asp), the [modulo operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder), and the often misunderstood [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval).",
      },
      {
        type: "paragraph",
        text: "Those three didn’t just wrangle my problem — they changed the whole corral.",
      },
      {
        type: "heading",
        level: 2,
        text: "My First Attempt: forEach + setTimeout",
      },
      {
        type: "paragraph",
        text: "My first instinct was to use `forEach`. I thought I could loop through the words and delay each one using `setTimeout`. In theory, this should’ve worked:",
      },
      {
        type: "code",
        language: "javascript",
        code: `const words = ['Innovate', 'Elevate', 'Create'];

words.forEach((word) => {
  setTimeout(() => {
    console.log(word);
  }, 2000);
});`,
      },
      {
        type: "heading",
        level: 3,
        text: "WRONG",
      },
      {
        type: "video",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/video/Charlie-Murphy.mp4",
      },
      {
        type: "paragraph",
        text: "This approach worked once — and then stopped. No loop. No reactivity. No way to update the UI properly in React.",
      },
      {
        type: "heading",
        level: 3,
        text: "setInterval: What I Actually Needed",
      },
      {
        type: "paragraph",
        text: "After realizing that `forEach` and `setTimeout` weren’t going to cut it, I turned to `setInterval`. I knew it ran a block of code every X milliseconds, but I’d never used it confidently inside a React component.",
      },
      {
        type: "code",
        language: "javascript",
        code: `setInterval(() => {
  console.log('This runs every 2 seconds');
}, 2000);`,
      },
      {
        type: "paragraph",
        text: "Simple enough — but in React, we don’t just log things. We update state. So I wrapped the interval inside `useEffect` and tracked the current index with `useState`.",
      },
      {
        type: "code",
        language: "javascript",
        code: `const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prevIndex) => prevIndex + 1);
  }, 2000);

  return () => clearInterval(interval);
}, []);`,
      },
      {
        type: "paragraph",
        text: "Every two seconds, state updated, React re-rendered, and the UI changed. Sweet! But there was still a problem… what happens when the index reaches the end of the array?",
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/maddog-yella.png",
        alt: "Western-style showdown illustration",
      },
      {
        type: "heading",
        level: 2,
        text: "Modulo — My New Favorite Loop",
      },
      {
        type: "paragraph",
        text: "The index just kept climbing forever and eventually crashed the app. Arrays don’t appreciate being asked for `words[1000]`. What I needed was a way to loop back to the beginning.",
      },
      {
        type: "paragraph",
        text: "That’s when the modulo operator (%) strolled in, tipped its hat, and said: *I’ll take it from here.*",
      },
      {
        type: "code",
        language: "javascript",
        code: "const nextIndex = (prevIndex + 1) % words.length;",
      },
      {
        type: "paragraph",
        text: "This single line increments the index and resets it to `0` when it reaches the end of the array. Simple math. Perfect loop.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Final Working Solution",
      },
      {
        type: "code",
        language: "javascript",
        code: `const words = ['Innovate', 'Elevate', 'Create', 'Accelerate'];
const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);

{words[index]}`,
      },
      {
        type: "heading",
        level: 2,
        text: "Final Thoughts",
      },
      {
        type: "paragraph",
        text: "This was one of those moments where I had to unlearn what I thought I knew. I wanted to reach for a loop because loops feel natural with arrays — but React and time-based updates play by different rules.",
      },
      {
        type: "paragraph",
        text: "The real solution came from combining a state callback, the modulo operator to create a loop, and `setInterval` to drive timing.",
      },
      {
        type: "paragraph",
        text: "Moral of the story? If an array walks into a bar… don’t automatically pull a loop on ’em.",
      },
      {
        type: "video",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/video/dance_runt.mp4",
      },
    ],
  },
  "framer-motion": {
    id: "010",
    slug: "framer-motion",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: true,
    title: "Sometimes I Doubt Your Commitment to Framer Motion",
    description:
      "A developer’s deep dive into Framer Motion, layout animations, and why trusting height: 'auto' might just change the way you build UI forever. Inspired by Donnie Darko, frustration, and the thrill of things that just work.",
    date: "23 Apr 2025",
    published_time: "2025-04-24T00:58:25Z",
    modified_time: "2025-04-24T00:58:25Z",
    keywords: [
      "Framer Motion",
      "React animation",
      "layout animation",
      "height auto",
      "useRef alternative",
      "AnimatePresence",
      "scrollHeight",
      "developer blog",
    ],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/framerMotionCover.png",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/framerMotionCover.png",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/HeadOverHeels.m4a",
    contentBlocks: [
      {
        type: "paragraph",
        text: "**TL;DR:** `height: 'auto'` is a thing in Framer Motion, and it changed everything.",
      },
      {
        type: "paragraph",
        text: `**Twenty-eight days, six hours, forty-two minutes, twelve seconds.**

That’s how long it *felt* like I spent trying to measure the height of a div manually before realizing Framer Motion just… handles it.`,
      },
      {
        type: "paragraph",
        text: `And by “handle it,” I mean it gave me an animation that worked the first time. No \`useRef\`, no \`scrollHeight\`, no \`setTimeout\`, no confusion at all — unlike that time I woke up on a putting green with no idea how I got there.

Just smooth, expanding UI bliss with \`height: 'auto'\`.

Wait… who woke up on a putting green?`,
      },
      {
        type: "video",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/video/golf-donny.mp4",
      },
      {
        type: "heading",
        level: 2,
        text: "I Was Just Trying to Unfurl Some Divs",
      },
      {
        type: "paragraph",
        text: "I love the look of a section that expands smoothly — like when you click a category and the content unfurls beneath it. (Is that the right word? Maybe not. But it fits my vibe.)",
      },
      {
        type: "paragraph",
        text: `In my case, I was mapping out categories, each opening up a group of feature rows. Each row had content that could grow, including a video player that revealed itself with a button click.

So I used \`useRef\` to measure the height on open. It mostly worked… until it didn’t. Nested videos broke everything. The ref wouldn’t pick up the change fast enough. \`scrollHeight\` came back stale. I threw in \`setTimeout\`.

I was trying to force the DOM to bend to my will.`,
      },
      {
        type: "paragraph",
        text: `And that’s when Donnie's voice popped into my head:

> There are other things that need to be taken into account here, like the whole spectrum of framer motion.

Wait… Framer Motion?`,
      },
      {
        type: "video",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/video/humanEmotion.mp4",
      },
      {
        type: "heading",
        level: 2,
        text: "The ScrollHeight Spiral",
      },
      {
        type: "paragraph",
        text: "So the idea is: when new content renders, use the ref to measure `scrollHeight`, then animate your container to that height. It works in many cases.",
      },
      {
        type: "paragraph",
        text: `It works… until it doesn’t.

And that’s when the doubt sets in. And suddenly you’re staring at your console log like Grandma Death at her mailbox, waiting for a message that means something this time — not just in your code, but in your commitment to layout animation as a concept.`,
      },
      {
        type: "paragraph",
        text: "I was questioning my commitment to Framer Motion.",
      },
      {
        type: "callout",
        text: "**Dev tip:** If you ever want to see what else you can play with in a ref, run `console.log(ref.current)`. It opens up a whole world of DOM properties you can poke at — height, width, offset, class list, children… you name it.",
      },
      {
        type: "video",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/video/Grandma-mail.mp4",
      },
      {
        type: "heading",
        level: 2,
        text: "The Sparkle Motion Moment",
      },
      {
        type: "paragraph",
        text: `There’s a scene in *Donnie Darko* where Kitty Farmer shouts:

> **“Sometimes I doubt your commitment to Sparkle Motion!”**

That line echoed in my head as I was struggling with this issue… and then, like through a wormhole, it was presented to me: \`height: 'auto'\`.`,
      },
      {
        type: "paragraph",
        text: `Surely that can’t work. Browsers don’t animate to \`auto\`, right?

But I tried it anyway.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `initial={{ height: 0, opacity: 0 }}
animate={{ height: 'auto', opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.3 }}
style={{ overflow: 'hidden' }}`,
      },
      {
        type: "paragraph",
        text: `And it just… worked.

The important addition is \`overflow: 'hidden'\` — it keeps everything tucked neatly inside the surrounding div.`,
      },
      {
        type: "paragraph",
        text: "No `useRef`, no measuring, no delay tricks. Framer Motion did the layout calculation behind the scenes and gave me the smooth unfurl I’d been searching for.",
      },
      {
        type: "heading",
        level: 2,
        text: "What’s Actually Happening",
      },
      {
        type: "paragraph",
        text: `Framer Motion uses a layout measurement system internally — so when you use \`height: 'auto'\` in a \`motion.div\`, it measures before and after render and animates the change.

It’s like \`scrollHeight\`, but with none of the stress.

It also plays beautifully with \`AnimatePresence\`, so your exits are as clean as your entrances.

*This excludes Frank’s.*`,
      },
      {
        type: "heading",
        level: 2,
        text: "So Should You Ditch useRef Forever?",
      },
      {
        type: "paragraph",
        text: "Definitely not. I still find `useRef` incredibly useful — especially when working with video elements. I’ve used it to access the duration of a video. It’s great for tapping into properties you can’t reach through state or props alone.",
      },
      {
        type: "paragraph",
        text: `But when it comes to animating height based on content — especially when that content changes dynamically — I’ve stopped reaching for refs.

If \`height: 'auto'\` gets me there without the hassle?

I’m in.`,
      },
      {
        type: "paragraph",
        text: `Sometimes, you just gotta trust the Motion.

After all, it’s not the size of the \`ref\`… it’s the Framer of the Motion… or something like that.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Final Thoughts",
      },
      {
        type: "paragraph",
        text: "They say fear and love are the deepest of human emotions. But did that person ever get caught up in a front-end development bug? Because that got me in some **deep** emotions.",
      },
      {
        type: "paragraph",
        text: `“What if you could go back in time, and take all those hours of pain and darkness and replace them with something better?” Gretchen said in the movie.

I wish I could, Gretchen. Yes I do…`,
      },
      {
        type: "paragraph",
        text: "But maybe those rough learning patches — the ones where you wake up confused on a metaphorical putting green, unsure how you even got there — are what shape us the most. Not just as developers, but as thinkers, builders, and people willing to wrestle with complexity until something clicks.",
      },
      {
        type: "paragraph",
        text: `And I no longer doubt my commitment to Framer Motion… most of the time.

Sometimes it still seems a bit janky.`,
      },
      {
        type: "paragraph",
        text: `**Bonus:** [My favorite sequence in the movie Donnie Darko](https://latestartbucket.s3.us-east-2.amazonaws.com/video/Darko-intro.mp4)

Honestly, does it get much better than this scene? If you’ve never seen *Donnie Darko*, it’s for sure worth a watch… I personally don’t love how the ending unravels, but it does a lot right.

[As of this post it is playing on YouTube for free](https://www.youtube.com/watch?v=LZnCfn4W-8s)`,
      },
    ],
  },
  "showing-up-consistently": {
    id: "011",
    slug: "showing-up-consistently",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    live: true,
    featured: true,
    title: "Showing Up for the Process",
    description:
      "I used to think ideas were enough. Turns out, it takes a weekly system, quiet structure, and a few hard shifts to actually get things done.",
    date: "03 May 2025",
    published_time: "2025-05-03T20:08:15Z",
    modified_time: "2025-05-03T20:08:15Z",
    keywords: [
      "build a weekly system",
      "stay consistent with goals",
      "how to stay productive",
      "personal growth routine",
      "structure vs motivation",
      "trust the process",
      "quarterly goals for personal growth",
      "realistic productivity system",
      "developer habits for consistency",
      "progress over perfection mindset",
      "how to structure your week for progress",
      "routines for creative professionals",
      "burnout",
      "discipline",
      "energy management",
      "momentum",
      "habits",
    ],
    hero_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/practice.webp",
    meta_image:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/image/practice.webp",
    vibe_audio:
      "https://latestartbucket.s3.us-east-2.amazonaws.com/audio/Process.m4a",
    contentBlocks: [
      {
        type: "paragraph",
        text: `Do you have a goal or an idea?

Personally, I’ve always been a dreamer. For years, I kept notebooks on the side of my bed, filling them with short films, business plans, apps, t-shirt slogans. I used to think that was the important part — just having the ideas.`,
      },
      {
        type: "paragraph",
        text: `Years go by and a lot of those ideas are still sitting in that notebook. Sometimes I bring them to life, but honestly, most of the things I thought were worth writing down never made it past the page.

Not every idea was worth pursuing, sure. But the point is, most of the time, I never even tried.`,
      },
      {
        type: "paragraph",
        text: `So many things go unfinished. As a developer, there’s always something new to learn or build, and that constant flood of possibilities can be paralyzing.

I’d feel like a sloth playing Frogger, trying to get across the road. And when you’re frozen, even great ideas don’t go anywhere.

I felt like I was halfway done with ten different projects or training sessions, but finishing none of them.`,
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/Sloth-traffic.gif",
        alt: "Sloth stuck in traffic metaphor",
      },
      {
        type: "paragraph",
        text: `I’m a huge Timberwolves fan, and something I’ve heard the players talk about is this idea: when the game presents a big moment, you don’t rise to the occasion — you fall back on the work you’ve already put in.

You stay grounded in the moment because you’ve prepared for it.`,
      },
      {
        type: "paragraph",
        text: `That idea hit me.

Because for years, I thought I could grind my way into progress. Pull all-nighters. Catch bursts of motivation. Wait for inspiration or opportunity to strike.

But when things got busy or I lost focus, I had nothing to lean on. No routine. No structure. No foundation.`,
      },
      {
        type: "paragraph",
        text: `That’s why I started building a system.

I think about that scene in *Moneyball* where Brad Pitt keeps saying, *“It’s a process.”* That stuck with me.

Because that’s what this really is — not a shortcut, but a process I’m learning to trust. One week at a time.`,
      },
      {
        type: "paragraph",
        text: `I’m finally starting to understand what sustained progress looks like and what it takes to achieve it.

The goal isn’t to push myself to the edge of burnout. It’s to create a rhythm I can return to. A structure I can lean on — one that helps me get the most out of myself.

Not through intensity, but through consistency.`,
      },
      {
        type: "paragraph",
        text: `One thing that’s helped me stay grounded is thinking in quarters.

I’ve started setting quarterly goals instead of chasing huge transformations. Three months is long enough to make real progress, but short enough to stay focused.

It forces me to break goals down into pieces I can actually finish. That’s been a big mindset shift — from *“how do I become successful?”* to *“how do I make progress this week?”*`,
      },
      {
        type: "video",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/video/money-process.mp4",
      },
      {
        type: "paragraph",
        text: `One of the biggest shifts has been making Saturday morning non-negotiable.

That’s my protected time. Two hours minimum for focused work, learning, or building something that I find meaningful.`,
      },
      {
        type: "paragraph",
        text: `And honestly, I think everyone should ask themselves:

What are you really doing where you can’t carve out two hours on a Saturday morning, afternoon, or evening for your own growth?

That block is sacred for me now.`,
      },
      {
        type: "paragraph",
        text: `You know why I’m up for Saturday mornings?

I cut out alcohol.

Nothing dramatic — just a decision to stop doing something that was slowing me down. I don’t lose momentum. Mondays are more tolerable. Weekends are more productive. I’m clear-headed and don’t have lagging recovery time.

That one switch made it easier to stick with everything else.`,
      },
      {
        type: "paragraph",
        text: `My workouts are essential to my focus and productivity as well.

If I sat in a chair all day grinding through tasks without moving my body, I don’t think I’d be making the kind of progress I am now.

Lifting. Sweating. Moving. That’s how I reset my mind and refill my tank.

So many mental blocks have cleared during a workout session.`,
      },
      {
        type: "paragraph",
        text: `Of course, it’s not perfect.

Tuesday nights are usually gym nights for me — but life happens. Plans shift. Things come up.

I’ve learned that sustainability doesn’t mean rigid. If I can’t make Tuesday work, I shift things to Wednesday.

The key is not abandoning the plan — just adjusting the schedule.`,
      },
      {
        type: "paragraph",
        text: `My system is more complex than what I’ve shared here, but that’s not the point.

The point is to start small, stay consistent, and build something that supports your life.`,
      },
      {
        type: "paragraph",
        text: `This doesn’t feel like sacrifice.

It feels like alignment.

Things are finally clicking. The structure I’ve been working toward is starting to support me back.`,
      },
      {
        type: "paragraph",
        text: `You don’t have to be perfect.

You just have to keep showing up.`,
      },
      {
        type: "paragraph",
        text: `Have I arrived? No.

I’m still chasing goals. I’m not at the point where I can say, *“Damn, I made it.”*

I don’t know if this system is building toward anything relevant.

But it’s building **something**.

And for now, that feels like enough.`,
      },
      {
        type: "paragraph",
        text: `I’m still showing up.

**Broncos’ country, let’s ride.**`,
      },
      {
        type: "video",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/video/wilson-ride.mp4",
      },
    ],
  },
  "video-seo-trifecta": {
    id: "012",
    slug: "video-seo-trifecta",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    title: "The Video SEO Trifecta: How to Use YouTube for Business SEO",
    description:
      "A simple system that connects video, blog content, and structured data to strengthen your digital presence and build long-term authority.",
    date: "2026-02-16",
    published_time: "2026-02-16T00:00:00-06:00",
    modified_time: null,
    published: true,
    featured: true,
    keywords: [
      "YouTube SEO for business",
      "Video SEO strategy",
      "VideoObject schema",
      "E-E-A-T",
      "JSON-LD sameAs",
      "Cross-linking SEO",
    ],
    hero_image:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/images/video_seo_thumbnail.png",
    meta_image:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/images/video_seo_thumbnail.png",
    primaryVideo: {
      title: "The Video SEO Trifecta",
      thumbnail:
        "https://nciholasegner.s3.us-east-2.amazonaws.com/images/video_seo_thumbnail.png",
      videoDescription:
        "Nicholas Egner breaks down the three-step 'Trifecta' system: combining YouTube authority, blog content, and structured data for maximum search visibility.",
      duration: "PT3M28S",
      src: {
        mp4: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/Video-Trifecta.mp4",
      },
      youtube: {
        url: "https://youtu.be/wHJtIFRg4eU",
        label: "Watch on YouTube",
      },
      sameAs: [
        "https://youtu.be/wHJtIFRg4eU",
        "https://www.linkedin.com/posts/nicholas-egner_the-most-underutilized-seo-tool-for-businesses-activity-7429507797115027457-1fy-",
        "https://www.facebook.com/share/v/1CfiFh4nbv/",
      ],
      familyFriendly: true,
      isAccessibleForFree: true,
    },
    contentBlocks: [
      {
        type: "paragraph",
        text: `The most underutilized SEO tool for a business might very well be YouTube.”

I think most businesses think YouTube is only for influencers. Or tutorials. Or people they think are way more outgoing than them.

It’s not!

YouTube is the second-largest search engine in the world.

And I personally see it as an underutilized asset a business can gain a foothold in for organic SEO.

Hello! I’m Nicholas Egner, Creative Technologist.
And today I’m going to show you the three parts that create what I call…
The Video SEO Trifecta.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Step 1: Make a Video",
      },
      {
        type: "paragraph",
        text: `This video can be a talking head… just like this.

Talk about something from your real client work.
Something that hits Google’s E-E-A-T:

Experience – You speak from real projects.
Expertise – You explain what you’ve learned.
Authoritativeness – You consistently publish content.
Trustworthiness – Your face + your name build credibility.

Now shoot that video — I’m using OBS.
Now you have a little video nugget you can share with the world.
“Aww… isn’t he cute!”`,
      },
      {
        type: "heading",
        level: 2,
        text: "Step 2: Upload to Your Branded YouTube Channel",
      },
      {
        type: "paragraph",
        text: `Fill out the metadata. Create a thumbnail. Write a real description.

Now here’s the key… keep it Unlisted for a moment.
Because we’re about to complete the loop.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Step 3: Make the Video the Focal Point of a Blog Post",
      },
      {
        type: "paragraph",
        text: `If you wrote a script — that’s your text for the blog post. Google can crawl that text.

If you didn’t — YouTube auto-transcribes your video.
Clean it up.
Add a proper H1 title.
Break it into H2 sections.
Embed the new video at the top.

Personally, I host my videos outside of YouTube — I use AWS S3 — so I control the branding with no commercials.

Now your page has:
• A video
• Structured text
• Real headings

That’s powerful.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Close the Loop",
      },
      {
        type: "paragraph",
        text: `Now here’s where it gets even better.

Link your YouTube video URL inside the blog post.
Then go back to YouTube and link the blog post URL in the description.

That’s called cross-linking.
You’re closing the loop.

Now… (kendrick lamar energy)
Bing-bop-boom-boom-boom-bop-bam.
You’ve completed the Video Trifecta!
Video → Blog → YouTube.

Now switch your video on YouTube from Unlisted to Public.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Why This Works",
      },
      {
        type: "paragraph",
        text: `Google now sees:

• Your YouTube video
• Your article
• Your website

All pointing to the same creator.

Now you’re building authority.
Every time you repeat this process, your E-E-A-T grows.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Bonus Level: Entity Lock-In",
      },
      {
        type: "paragraph",
        text: `Let’s take this a little farther. (Squints like Sandlot.)

Use JSON-LD.
There’s an object called sameAs.
This is where you link your YouTube channel, your website, your LinkedIn, and your other socials.

Now Google recognizes you as a complete entity.

Set your page’s schema type to VideoObject.
There are lots of valuable things you can put in that object.

This tells Google, in a structured way, that this page contains a video.
You’re not hoping Google figures it out.
You’re explicitly labeling it.

Now your page becomes eligible to appear in:
• Video search results
• Rich results with thumbnails
• And sometimes even key moments

That’s not a trick.
That’s structured clarity.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Close",
      },
      {
        type: "paragraph",
        text: `You don’t need to be an influencer.
You need a system.

Video.
Blog.
Structured data.
Repeat.

That’s how authority compounds.

And if you want help building that system. I offer free website and content consultations.
Let’s make sure your digital presence is working as hard as you are.`,
      },
    ],
  },
  "your-gardens-by-design-video": {
    id: "013",
    slug: "your-gardens-by-design-video",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    title: "How a Video Can Transform a Business’s Online Presence",
    description:
      "A real example of how video can elevate a small business, build trust, and create a stronger digital presence without overcomplicating the process.",
    date: "2026-05-04",
    published_time: "2026-05-04T00:00:00-05:00",
    modified_time: null,
    published: true,
    featured: false,
    keywords: [
      "video marketing for local business",
      "small business video example",
      "brand storytelling video",
      "website showcase video",
      "digital presence strategy",
    ],
    hero_image:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/images/yourGardens-Thumb.webp",
    meta_image:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/images/yourGardens-Thumb.webp",
    primaryVideo: {
      title: "Your Gardens By Design - Brand Video",
      thumbnail:
        "https://nciholasegner.s3.us-east-2.amazonaws.com/video/thumbnails/yourGardens-Thumb.png",
      videoDescription:
        "A brand video created to showcase the personality, environment, and real experience behind a local business, helping strengthen their digital presence and build trust with potential clients.",
      duration: "PT2M23S",
      src: {
        mp4: "https://nciholasegner.s3.us-east-2.amazonaws.com/video/your-gardens.mp4",
      },
      youtube: {
        url: "https://youtu.be/XlRwp921mp8",
        label: "Watch on YouTube",
      },
      sameAs: [
        "https://www.linkedin.com/posts/nicholas-egner_httpslnkdingcwe6kut-we-just-wrapped-ugcPost-7457212440305610752-T1Ie?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAYTAn4BcF7sy62CIllX2WLTXwk90Ug7XCo",
        "https://www.facebook.com/share/v/17s8B51yeC/",
        "https://youtu.be/XlRwp921mp8",
      ],
      familyFriendly: true,
      isAccessibleForFree: true,
    },
    contentBlocks: [
      {
        type: "paragraph",
        text: `A lot of small businesses don’t have a visibility problem.

They have a presentation problem.

The work is great. The people are great.
But when someone looks them up online… it just doesn’t feel like it matches.

That’s exactly what this project was about.`,
      },
      {
        type: "heading",
        level: 2,
        text: "The Goal",
      },
      {
        type: "paragraph",
        text: `This video was created for Your Gardens By Design, owned by Bette Fenton and Sandra Mangel, to help showcase who they are and what it actually feels like to work with them.

Not a commercial.
Not a script-heavy production.

Just something real.

The kind of video that gives someone confidence before they even pick up the phone.`,
      },
      {
        type: "heading",
        level: 2,
        text: "The Approach",
      },
      {
        type: "paragraph",
        text: "The focus was simple for Bette and Sandra’s business:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Show the people behind the business",
          "Capture the space and environment",
          "Let the personality come through naturally",
        ],
      },
      {
        type: "paragraph",
        text: "And most importantly… reflect the client, not the creators. Because as they put it, the garden isn’t about them it’s about the person they’re designing for.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Result",
      },
      {
        type: "paragraph",
        text: "After the video was delivered, they started getting immediate feedback. 'We keep getting rave reviews on the video.' That’s the goal.Not just views. Not just likes.Real reactions from real people that reinforce the business and help future customers understand the value before they even reach out.",
      },
      {
        type: "heading",
        level: 2,
        text: "Where This Fits In",
      },
      {
        type: "paragraph",
        text: `This kind of video isn’t just for social media.

It becomes a core part of a business’s digital presence.

It can live on a website.
It can be shared in emails.
It can be posted across platforms.

And most importantly…

It gives people a reason to trust what they’re seeing online.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Close",
      },
      {
        type: "paragraph",
        text: `You don’t need a massive production to make an impact.

You need something that actually represents your business the right way.

That’s where video becomes powerful.

If you’re thinking about improving how your business shows up online, this is exactly the kind of starting point I’d recommend.`,
      },
    ],
  },
  "voice-to-markdown-workflow": {
    id: "014",
    slug: "voice-to-markdown-workflow",
    showOnGignovate: false,
    canonicalSite: "nicholasegner",
    title:
      "I Built a Voice-to-Markdown Workflow with ChatGPT, GitHub, and Next.js",
    description:
      "A lightweight workflow using ChatGPT voice conversations, GitHub markdown files, Next.js, and AWS Amplify to turn spoken ideas into organized, editable notes.",
    date: "2026-09-21",
    published_time: "2026-09-21T19:40:41Z",
    modified_time: null,
    published: true,
    featured: true,
    keywords: [
      "ChatGPT voice workflow",
      "voice to markdown",
      "GitHub notes",
      "Next.js",
      "AWS Amplify",
      "Markdown workflow",
      "custom productivity tools",
    ],
    hero_image:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/blog/voice-to-md.webp",
    meta_image:
      "https://nciholasegner.s3.us-east-2.amazonaws.com/blog/voice-to-md.webp",
    contentBlocks: [
      {
        type: "paragraph",
        text: `A few days ago, I was driving and had a couple ideas pop into my head that I really wanted to remember. I've been working with [Davis Defense](https://www.davisdefenselawyers.com/video/traffic-violations-minnesota) on content about Minnesota's hands-free driving law, so I've gotten careful about not picking up my phone. But I also knew there was a good chance those ideas would be gone by the time I got where I was going. So, I started talking.`,
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/mobile-phone/ChatGPT-phone-1789927741074-b64ff7d1.webp",
        alt: "ChatGPT conversation on a phone used for voice notes",
      },
      {
        type: "paragraph",
        text: `I opened ChatGPT and worked through the ideas out loud using the talk function. That part was easy. What I started thinking about afterward was where those conversations go. I didn't want another chat buried in a list somewhere. I wanted actual notes I could find, scan, edit, and keep.`,
      },
      {
        type: "paragraph",
        text: `That became a small project I'm calling **Chat Notes**. The concept is pretty straightforward. I talk through an idea in ChatGPT, save the useful parts as a markdown file in a GitHub repository, and view those files in a simple interface I built, so everything's visible at a glance.`,
      },
      {
        type: "paragraph",
        text: `GitHub was a natural fit because I was already using it and already had it connected to chatGPT. Markdown keeps it simple. Just text that's easy to edit. GitHub renders it automatically, and the app converts it for the web.`,
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/mobile-phone/github-screenshot-1789928101399-d653f0ad.webp",
        alt: "GitHub repository showing markdown note files",
      },
      {
        type: "paragraph",
        text: `The technical setup is minimal: a Next.js app on AWS Amplify, a GitHub repo where each note is a markdown file, and this ChatGPT project with instructions for turning conversations into structured notes.`,
      },
      {
        type: "paragraph",
        text: `There are two connections in play. The dashboard uses GitHub to read and manage the markdown files, and there's a button that links straight to the Chat Notes project in ChatGPT. No custom API work there, just a direct project link.`,
      },
      {
        type: "image",
        src: "https://latestartbucket.s3.us-east-2.amazonaws.com/mobile-phone/chat-hub-screenshot-1789928238958-313a821f.webp",
        alt: "Chat Notes dashboard for viewing markdown notes",
      },
      {
        type: "paragraph",
        text: `And that's how this post got written. I talked it through, saved the useful parts, and cleaned it up inside that same workflow.`,
      },
      {
        type: "paragraph",
        text: `It's the same kind of practical, lightweight tooling I build for clients. If you're curious about simple automations or custom workflows, feel free to reach out. [Click Here](https://nicholasegner.com/contact) `,
      },
    ],
  },
};

export default posts;
