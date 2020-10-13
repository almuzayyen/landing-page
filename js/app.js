let title1 = document.getElementById("section-1-title");
title1.style.color= 'red';
window.addEventListener('scroll', function(e) {
  let logScroll = window.scrollY;
  let title1 = document.getElementById("section-1-title");
  let title2 = document.getElementById("section-2-title");
  let title3 = document.getElementById("section-3-title");
  
  title2.style.color= '#ffffff';
  title3.style.color= '#ffffff';
  
  if(logScroll==0 || logScroll< 650 ){
     title1.style.color= 'red';
     
  }  
   if(logScroll >= 650 ){
    title1.style.color= '#ffffff';
    title2.style.color= 'red';
    title3.style.color= '#ffffff';
   
  }
   if  (logScroll >= 1100){
    title1.style.color= '#ffffff';
    title2.style.color= '#ffffff';
    title3.style.color= 'red';
  }
  
});