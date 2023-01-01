{/* <i class="fa-regular fa-star"></i> */}

const starDiv = document.querySelector('.star')
const shape = document.querySelectorAll('.shape')

shape.forEach(sp => {
  sp.onclick = () => {
    starDiv.style.display = 'none'
    // starDiv.innerHTML = '<i class="fa-solid fa-star">333</i>'
    starDiv.innerText = sp.getAttribute('value')
    starDiv.style.display = 'block'
  }
})

const menuBtn = document.querySelector('.burger');
const fullBar = document.querySelector('.respons-bar')

// menuBtn.onclick = () =>  {
//   fullBar.classList.toggle('is-active');
// };

menuBtn.addEventListener('click', () =>  {
  fullBar.classList.toggle('is-active');
});


const animate = document.querySelector('.burger');
animate.classList.add('unToggled');
animate.onclick = () => {
  animate.classList.toggle('toggled');      
  animate.classList.toggle('unToggled');
}



