let checkCurrentLesson = () => {

  let currentLesson = 0;

  document.querySelectorAll('.lesson').forEach( (l,i) => {
    if( l.getBoundingClientRect().top <= 1 && l.getBoundingClientRect().bottom >= 0 ){
      currentLesson = i;
    }
  } )

  document.querySelectorAll('.tutorialNavigation li').forEach( (n,k)=>{

    if( k < currentLesson ){
      n.classList.add('isDone');
      n.classList.remove('isCurrent');
    }else if( k === currentLesson ){
      n.classList.remove('isDone');
      n.classList.add('isCurrent');
    }else{
      n.classList.remove('isDone');
      n.classList.remove('isCurrent');
    }

  } )

}

let toggleNav = () => {

  let nav = document.querySelector('.tutorialNavigation');
  let toggleBtn = nav.querySelector('.MobileNavToggle');

  toggleBtn.addEventListener('click', ()=>{

    if ( nav.classList.contains('showNavigation') ) {
      toggleBtn.textContent = 'Open Navigation';
    }else{
      toggleBtn.textContent = 'Close Navigation';
    }

    nav.classList.toggle('showNavigation');

  });

   nav.querySelectorAll('li a').forEach((el)=>{
     el.addEventListener('click',()=>{
      nav.classList.remove('showNavigation');
    });
  })

}

document.addEventListener("DOMContentLoaded", function(){
  checkCurrentLesson();
  toggleNav();
});


document.addEventListener("scroll", function(){
  checkCurrentLesson();
});
