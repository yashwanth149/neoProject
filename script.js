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


