const animation = gsap.to('#Opaque_Ring', {
    duration: 2, ease: 'none',
    motionPath: "#Transparent_Ring"
})
console.log("gsap")
GSDevTools.create({ animation: animation })