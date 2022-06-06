# Michelob ULTRA Website Skeleton

The base is currently a Svelte bare skeleton app

## About the current Svelte/Builder structure

/public 
    /img               <!--  can be accessed via 'localhost:3000/img' -->
    /styles            <!--  can be accessed via 'localhost:3000/styles' -->
/src
    app.html
    /lib                <!-- can be accessed via a dollar sign in script ie import Poo from '$lib/Poo.svelte' -->
    /routes
        index.svelte    <!-- Home page -->
        [slug].svelte   <!-- If server looks for a page that does not exist, "used in blog scenarios -->
        __layout.svelte <!-- for any given route, if a __layout file is in it's folder, it acts as a layout template for said file -->
    
## Developing

Once you've created your own branch for the project and installed dependencies with `npm install` you can start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
