// ==UserScript==
// @name     Skip Ease Login
// @version  1
// @include https://www.ease.ed.ac.uk/*
// @grant    none
// ==/UserScript==



setTimeout(() => {  
	btn = document.getElementById('submit');
  btn.dispatchEvent(new MouseEvent('click'));
}, 200);