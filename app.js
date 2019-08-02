
const bg = document.querySelector('.bg');
const nbar = document.querySelector('.nav-bar');
const hero = document.querySelector('.hero-box');


const tween = new TimelineLite();

tween.add(TweenLite.to(".project-container",4,{transform:"scale(1,1)"})
);




const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".projects",
    duration: 850,
    triggerHook: 1
})
 .setTween(tween)
 .addTo(controller);



 const tween1 = new TimelineLite();

tween1.add(TweenLite.to(".form-contact",4,{transform: "scale(1,1)"})
);
const controller2 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({

    triggerElement: ".contact",
    duration:850,
    triggerHook: 1
})
 .setTween(tween1)
 .addTo(controller);


const tl = new TimelineMax()


tl.fromTo(bg,1.5,{height:"0vh"},{height:"100vh", ease:Power2.easeInOut})
  .fromTo(nbar,3,{opacity:"0"},{opacity:"1",ease:Power2.easeInOut},"-=1.5")
  .fromTo(hero,3,{opacity:"0"},{opacity:"1",ease:Power2.easeInOut},"-=2");







