const hamburger = document.querySelector('.hamburger');
      menu = document.querySelector('.menu');
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active')
});

close.addEventListener('click', ()=>{
    menu.classList.remove('active')
});

const line = document.querySelectorAll('.abilities__line-top');
      percent = document.querySelectorAll('.abilities__percent');

percent.forEach((item, i) => {
    line[i].style.width = item.innerHTML;
});
      