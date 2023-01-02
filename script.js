{/* <i class="fa-regular fa-star"></i> */}
const starDiv = document.querySelectorAll('.star')
const shapes = document.querySelectorAll('.shape')

for (let i = 0;i < starDiv.length;i++){
  let st = starDiv[i]
   shapes.forEach(shape => {
     shape.onclick = () => {
       st.innerHTML = `${shape.getAttribute('value')} <i class="fa-solid fa-star"></i>`
     }
   })
}


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




