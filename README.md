# iGEM Toronto 2025 wiki
This project contains the code to generate the wiki site for the iGEM Toronto submission in the 2025 iGEM competition.


## Technology Overview
- [astro](https://astro.build) as the main framework tying everything together
- [rehype](https://github.com/rehypejs/rehype) to convert markdown articles to html inside astro
- [tailwindcss](https://tailwindcss.com/) to make styling a responsive website simpler

Furthermore, we built custom plugins to add:
- A citation system, partially inspired by [rehype-citation](https://github.com/timlrx/rehype-citation)
- Team page generation from a CSV export


## Setup
1. Ensure you have [node](https://nodejs.org/en), we recommend an LTS version, 18+
2. Clone this repo
3. Install the dependencies (`npm install`)


## Running
1. Run `npm run dev`. The `astro` development server should start up.
2. Click the link in the console, or paste it in your browser
3. Wiki should be available to you


## Wiki Software Contributors
- Henrik S. Zimmermann (Web Lead, iGEM Toronto 2023-2025) [GitHub](https://github.com/HenrikSZ) [LinkedIn](https://www.linkedin.com/in/henrikszimmermann/)
