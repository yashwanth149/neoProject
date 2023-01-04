const shapes = document.querySelectorAll('.shape');

shapes.forEach(shape => {
  shape.addEventListener('click', event => {
    const star = event.target.closest('.stars');
    star.innerHTML = `${event.target.getAttribute('data-value')} <i class="fas fa-star"></i> `;
    star.style.paddingLeft = '6px';
    star.style.fontSize = '11px'
  });
});


const animate = document.querySelector('.burger');
const fullBar = document.querySelector('.respons-bar')


animate.addEventListener('click', () =>  {
  fullBar.classList.toggle('is-active');
});


animate.classList.add('unToggled');
animate.onclick = () => {
  animate.classList.toggle('toggled');      
  animate.classList.toggle('unToggled');
}

const dragArea = document.querySelectorAll('.dragBox')


dragArea.forEach(column => {
  new Sortable(column, {
    animation: 350
  })
  
})

