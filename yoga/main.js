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
  };
  
  hideContent(1);

  const showTabContent = (b) => {
    if(tabcontent[b].classList.contains('hide')){
        tabcontent[b].classList.remove('hide');
        tabcontent[b].classList.add('show');
       
      }
  };

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

  });

  const deadline = '2021-07-30';
    

  const getTimeRemaining = (deadline) => {
    const t = Date.parse(deadline) - Date.parse(new Date()),
          seconds = Math.floor((t/1000) % 60),
          minutes = Math.floor((t/1000/60) % 60),
          hours = Math.floor((t/1000/60/60));
    return {
      'total' : t,
      seconds,
      minutes,
      hours
    } ;
  }

  function setClock(id, deadline){
    const timerContainer = document.querySelector(id),
          hours = timerContainer.querySelector('.hours'),
          minutes = timerContainer.querySelector('.minutes'),
          seconds = timerContainer.querySelector('.seconds');
    
    function updateClock(){
      const t = getTimeRemaining(deadline);
      if(t.total <= 0) {
        clearInterval(updateClock);
      }
      
      hours.textContent = t.hours > 9 ? t.hours : `0${t.hours}`;
      minutes.textContent = t.minutes > 9 ? t.minutes : `0${t.minutes}`;
      seconds.textContent = t.seconds > 9 ? t.seconds : `0${t.seconds}`;
    }
    setInterval(updateClock, 1000);

   
  }

  setClock('#timer', deadline);

  const more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

  more.addEventListener('click', function(){
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });  
  
  close.addEventListener('click', function(){
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });  
  
});