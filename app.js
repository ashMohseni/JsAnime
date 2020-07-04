const hero = document.querySelector('.hero');
const hero2 = document.querySelector('#hero2');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const menu = document.querySelector('.menu');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(
    hero,
    1, {
        height: "10%"
    }, {
        height: '80%',
        ease: Power2.easeInOut
    }
).fromTo(
    hero,
    1.2, {
        width: "100%"
    }, {
        width: "80%",
        position: "relative",
        left: "10",
        transform: "translate(10%)",
        ease: Power2.easeInOut
    }
).fromTo(
    slider,
    1.2, {
        x: "-100%"
    }, {
        x: "0%",
        ease: Power2.easeInOut
    },
    "-=1.2"
).fromTo(
    logo,
    0.5, {
        opacity: 0,
        x: 30
    }, {
        opacity: 1,
        x: 0
    },
    "-=0.5"
).fromTo(
    menu,
    0.5, {
        opacity: 0,
        x: 30
    }, {
        opacity: 1,
        x: 0
    },
    "-=0.5"
).fromTo(
    headline,
    0.5, {
        opacity: 0,
        x: 30
    }, {
        opacity: 1,
        x: 0
    },
    "-=0.5"
);

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,

  onLeave: function(origin, destination, direction){
    const tl2 = new TimelineMax();



    if (destination.index === 1) {
      tl2.fromTo(
          hero2,
          0, {
              height: "10%"
          }, {
              height: '80%',
              ease: Power2.easeInOut
          }
      ).fromTo(
          hero2,
          0, {
              width: "100%"
          }, {
              width: "80%",
              position: "relative",
              left: "10",
              transform: "translate(10%)",
              ease: Power2.easeInOut
          }
      )
    }


  }


});
