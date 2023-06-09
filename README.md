# iPhone Showcase
[![Netlify Status](https://api.netlify.com/api/v1/badges/2b1b0500-fb26-44a5-9963-e53140019538/deploy-status)](https://app.netlify.com/sites/iphone3dshowcase/deploys)


This is a showcase website for iPhone 14 built with React and CSS. In this project, we learned how to build a 3D animation in React using WebGi (powered by Three.js) and GSAP. [Here](https://iphoneshowcase.avarma.me) is the live deployed version on netlify.

## Desktop Preview
![Alt Text](https://github.com/Butcanudothis/iphone-3d-product-showcase/blob/main/iphone.gif)

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Building for Production](#building-for-production)
- [Changelog](#changelog)

## Technologies Used

The following technologies were used to build this project:
- React
- WebGi (powered by Three.js)
- GSAP
- postcss
- @studio-freight/lenis
- Jest
- Testing Library

## Getting Started

To get started, you can clone this repository and run the following commands:

```
cd my-react-app
npm install
npm run dev
```

This will start the development server at `http://localhost:5173`.

## Building for Production

To build the project for production, run the following command:

```
npm run build
```

This will generate a `build` folder containing the optimized production-ready files.

## Changelog

### May 3, 2023
- Added loader, fixed position and targets for mobile.
- Added back button and adjusted model position upon exit.
- Added 3D preview for "Try Me" and added `scrollToTop` functionality.
- Updated scene initial position and scroll trigger properties.
 
### Mar 4, 2023
- First commit. Basic layout with scroll functionality and added 3D model using WebGiViewer.
