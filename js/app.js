// creat list and appeted to unorder list
let title1 = document.createElement('a');
let title2 = document.createElement('a');
let title3 = document.createElement('a');
let title4 = document.createElement('a');
let ulist = document.querySelector('.ulist'); 
let li= document.createElement("li");


title1.textContent='section1'
title1.id='section-1-title';
title2.textContent='section2';
title2.id='section-2-title';
title3.textContent='section3'
title3.id='section-3-title';
title4.textContent='section4'
title4.id='section-4-title';

li.className='.li-nav1'
li.setAttribute('style','display: flex; gap: 1rem; justify-content: space-around;list-style: none;font-size: 1.5rem;flex-wrap: wrap;color:#ffffff;')
li.append(title1,title2,title3,title4);

ulist.append(li);
 
 

// add scrrpll event lisner  
window.addEventListener('scroll', function(e) {
  
  let section1 = document.getElementById('section-1-id').getBoundingClientRect().top;
  let section2 = document.getElementById('section-2-id').getBoundingClientRect().top;
  let section3 = document.getElementById('section-3-id').getBoundingClientRect().top;
  let section4 = document.getElementById('section-4-id').getBoundingClientRect().top;
  let title1 = document.getElementById('section-1-title');
  

  if( section1< window.innerHeight){
    
      title1.style.color= '#ff0000';
      title2.style.color= '#ffffff';
      title3.style.color= '#ffffff';
      title4.style.color= '#ffffff';
     
  } 
  if( section2< window.innerHeight){
     title2.style.color= '#ff0000';
      title1.style.color= '#ffffff';
      title3.style.color= '#ffffff';
      title4.style.color= '#ffffff';
  } 
  if( section3< window.innerHeight){
     title3.style.color= '#ff0000';
      title1.style.color= '#ffffff';
      title2.style.color= '#ffffff';
      title4.style.color= '#ffffff';
  } 
  if( section4< window.innerHeight){
     title4.style.color= '#ff0000';
      title1.style.color= '#ffffff';
      title3.style.color= '#ffffff';
      title2.style.color= '#ffffff';
  } 
  
});