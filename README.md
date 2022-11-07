# International Drought Resilience Alliance Website
Landing page for https://idralliance.global

Also accessible at:
- https://idralliance.com
- https://idralliance.net

## Background
IDRA is the global alliance for drought resilience and preparedness. It was launched at COP27 in support of [UNCCD](https://unccd.int). We were hired by UNCCD to develop the branding and launch collateral for the event.

## Installation
This assumes you already have the basic development set up outlined in the Høst Handbook.

Navigate to your local directory for the site and run the following commands:

`npm install`
This will install the dependecies for the website.


## Dependencies
- Hugo
- TailwindCSS
- AlpineJS


## Development Environment
`hugo server`
This will run a local environment for you to test and build. The site will be available at `http://localhost:1313`


# Hosting
- Github — review `.github/workflows/gh-pages-deployment.yml`

NB: Netlify is blocked by certain governments, so we had to redeploy the site using Github Actions. For a more traditional deployment in the future:
- Netlify - review `netlify.toml`
