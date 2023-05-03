import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();
    tl.to(position, {
        x: -5.4846144856,
        y:-10.8667412319,
        z:5.7426481635,

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
        x: -2.6708740234,
        y:-2.8021606445,
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
        y:7.4853469649,
        z:-3.4901875041,
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
        y:1.9029907227,
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
