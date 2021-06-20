window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  const tab = document.querySelectorAll('.info-header-tab');
  const info = document.querySelector('.info-header');
  const tabcontent = document.querySelectorAll('.info-tabcontent');

  const hideContent = (a) => {
    for(let i = a; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('show');
      tabcontent[i].classList.add('hide');
    }
  }
  
  hideContent(1);

  const showTabContent = (b) => {
    if(tabcontent[b].classList.contains('hide')){
        tabcontent[b].classList.remove('hide');
        tabcontent[b].classList.add('show');
       
      }
  }

  info.addEventListener('click',(event) => {
    let target = event.target;
    if(target && target.classList.contains('info-header-tab')){
        for(let i = 0; i < tab.length; i++) {
          if(target === tab[i]) {
            hideContent(0);
            showTabContent(i);
          }
        }
    }

  })

})