gsap.to("#vid",{
    filter : "blur(50px)",
    scrollTrigger:{
        trigger : "#main",
        start : "16% 100%",
        end : "90% bottom",
        scrub : 2,
    }
})