'use strict';

const spider = document.querySelector('.spider');

function centerSpider() {
  spider.style.position = 'absolute';
  spider.style.top = '50%';
  spider.style.left = '50%';
  spider.style.transform = 'translate(-50%, -50%)';
}

window.addEventListener('load', centerSpider);
