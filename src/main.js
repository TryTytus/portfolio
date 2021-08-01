import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import { gsap } from "gsap";

Vue.config.productionTip = false;
Vue.use(Vuesax, gsap);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

import TweenMax from 'gsap';
import Power2 from 'gsap';

function createParticle (x, y) {
  var size = Math.random() * 50 + 10;
  
  x -= (size / 2);
  y -= (size / 2);
  
  var particle = document.createElement('div');
  particle.setAttribute("id", "democlass");
  document.body.appendChild(particle);
  
  TweenMax.set(particle, {
    x: x, 
    y: y,
    width: size,
    height: size,
    background: function () {
      return `hsl(${Math.random() *20+200}, 100%, 50%)`
    }
  });
  TweenMax.to(particle, Math.random() * 2 + 1, {
    x: x + (Math.random() - 0.5) * 200,
    y: y + (Math.random() - 0.5) * 200,
    opacity: 0,
    scale:0,
    ease: Power2.easeOut,
    onComplete: function () {
      document.body.removeChild(particle);
    }
  })
}

var home = document.querySelector('#home');

home.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  createParticle(x, y);
});
home.body.addEventListener('touchmove', function (e) {
  var x = e.touches[0].clientX;
  var y = e.touches[0].clientY;
  e.preventDefault();
  createParticle(x, y);
});


