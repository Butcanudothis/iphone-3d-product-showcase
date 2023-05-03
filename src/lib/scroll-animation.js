import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate ,isMobile) => {
  const tl = gsap.timeline();
    tl.to(position, {

        x: !isMobile ? -5.4846144856: -8,
        y:!isMobile?-10.8667412319:-12,
        z:isMobile?5.7426481635:5.0,

        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ?-2.6708740234:-0.3,
        y:!isMobile ?-2.8021606445:0,
        z:0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
        },
    })
    .to('.jumbotron-section', {
        opacity: 0,
        zIndex: -1,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
        },
    })
    .to('.sound-section-content', {
       opacity: 1,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
        },
    })
    .to(position, {
        x: -0.0247695367,
        y:!isMobile ?7.4853469649:9,
        z:!isMobile ?-3.4901875041:-4.1,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    .to(target, {
        x: 0,
        y:!isMobile ?1.9029907227:0.78,
        z:0,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
        },
    })
    .to('.display-section', {
        opacity: 1,
         scrollTrigger: {
             trigger: '.display-section',
             start: 'top bottom',
             end: 'top top',
             scrub: 2,
             immediateRender: false,
         },
     })
};
