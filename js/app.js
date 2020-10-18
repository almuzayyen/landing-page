// creat list and appeted to unorder list
let title1 = document.createElement('a');
let title2 = document.createElement('a');
let title3 = document.createElement('a');
let title4 = document.createElement('a');
let ulist = document.querySelector('.ulist'); 
let li= document.createElement("li");
let section1 = document.getElementById('section-1-id');
let section2 = document.getElementById('section-2-id');
let section3 = document.getElementById('section-3-id');
let section4 = document.getElementById('section-4-id');

title1.href='#section-1-id'
title1.textContent='section1'
title1.id='section-1-title';
title2.href='#section-2-id'
title2.textContent='section2';
title2.id='section-2-title';
title3.href='#section-3-id'
title3.textContent='section3'
title3.id='section-3-title';
title4.href='#section-4-id'
title4.textContent='section4'
title4.id='section-4-title';

li.className='.li-nav1'
li.setAttribute('style','display: flex; gap: 1rem; justify-content: space-around;list-style: none;font-size: 1.5rem;flex-wrap: wrap;color:#ffffff;')
li.append(title1,title2,title3,title4);

ulist.append(li);
 
 

// add scrrpll event lisner  
window.addEventListener('scroll', function(e) {
  let  section1Top = section1.getBoundingClientRect().top;
  let  section2Top = section2.getBoundingClientRect().top;
  let  section3Top = section3.getBoundingClientRect().top;
  let  section4Top = section4.getBoundingClientRect().top;
  //let section1 = document.getElementById('section-1-id').getBoundingClientRect().top;
  //let section2 = document.getElementById('section-2-id').getBoundingClientRect().top;
  //let section3 = document.getElementById('section-3-id').getBoundingClientRect().top;
  //let section4 = document.getElementById('section-4-id').getBoundingClientRect().top;
  //let title1 = document.getElementById('section-1-title');
  

  if( section1Top < window.innerHeight){
    section1.setAttribute('style','background-color: yellow; color: black;text-decoration: underline;');
    section2.setAttribute('style','non');
    section3.setAttribute('style','non')
    section4.setAttribute('style','non')
      title1.style.color= '#ff0000';
      title2.style.color= '#ffffff';
      title3.style.color= '#ffffff';
      title4.style.color= '#ffffff';
     
  } 
  if( section2Top< window.innerHeight){
       
      section2.setAttribute('style','background-color: yellow; color: black;text-decoration: underline;');
      section1.setAttribute('style','non');
    section3.setAttribute('style','non')
    section4.setAttribute('style','non')
     title2.style.color= '#ff0000';
      title1.style.color= '#ffffff';
      title3.style.color= '#ffffff';
      title4.style.color= '#ffffff';
  } 
  if( section3Top< window.innerHeight){
      section3.setAttribute('style','background-color: yellow; color: black;text-decoration: underline;');
      section1.setAttribute('style','non');
    section2.setAttribute('style','non')
    section4.setAttribute('style','non')
     title3.style.color= '#ff0000';
      title1.style.color= '#ffffff';
      title2.style.color= '#ffffff';
      title4.style.color= '#ffffff';
  } 
  if( section4Top< window.innerHeight){
      section4.setAttribute('style','background-color: yellow; color: black;text-decoration: underline;');
      section1.setAttribute('style','non');
    section2.setAttribute('style','non')
    section3.setAttribute('style','non')
     title4.style.color= '#ff0000';
      title1.style.color= '#ffffff';
      title3.style.color= '#ffffff';
      title2.style.color= '#ffffff';
  } 
  
});