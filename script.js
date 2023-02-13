// const shapes = document.querySelectorAll('.shape');

// shapes.forEach(shape => {
//   shape.addEventListener('click', event => {
//     const star = event.target.closest('.stars');
//     star.innerHTML = `${event.target.getAttribute('data-value')} <i class="fas fa-star"></i> `;
//     star.style.paddingLeft = '6px';
//     star.style.fontSize = '11px'
//   });
// });

const newsDiv = document.querySelectorAll(".stars");
for (const newDiv of newsDiv) {
  for (let j = 0; j < 5; j++) {
    let subDiv = document.createElement("div");
    subDiv.innerHTML = `<span class="fa-regular fa-star shape" ></span>`;
    subDiv.setAttribute("data-value", j + 1);
    subDiv.style.cursor = "pointer";
    newDiv.appendChild(subDiv);
    subDiv.className = "star";
    subDiv.addEventListener("click", function () {
      if (this.getAttribute("data-value") == 1) {
        newDiv.innerHTML = `<div>${this.getAttribute("data-value")} BAD</div> <span class="fas fa-star shape" ></span>`;
        newDiv.style.fontSize = '12px'
        newDiv.style.padding = '5px 0 4px 5px'
      } else if (this.getAttribute("data-value") == 2) {
        newDiv.innerHTML = `<div>${this.getAttribute("data-value")} NOT BAD</div><span class="fas fa-star shape" ></span>`;
        newDiv.style.fontSize = '12px'
        newDiv.style.padding = '5px 0 4px 5px'
      } else if (this.getAttribute("data-value") == 3) {
        newDiv.innerHTML = `<div>${this.getAttribute("data-value")} GOOD</div><span class="fas fa-star shape" ></span>`;
        newDiv.style.fontSize = '12px'
        newDiv.style.padding = '5px 0 4px 5px'
      } else if (this.getAttribute("data-value") == 4) {
        newDiv.innerHTML = `<div>${this.getAttribute("data-value")} VERY GOOD</div><span class="fas fa-star shape" ></span>`;
        newDiv.style.fontSize = '12px'
        newDiv.style.padding = '5px 0 4px 5px'
      } else if (this.getAttribute("data-value") == 5) {
        newDiv.innerHTML = `<div>${this.getAttribute("data-value")} PERFECT</div><span class="fas fa-star shape" ></span>`;
        newDiv.style.fontSize = '12px'
        newDiv.style.padding = '5px 0 4px 5px'
      }
    });
  }
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


fetch('students.json')
  .then(response => response.json())
  .then(data => {
    data.students.forEach((student, index) => {
      const div = document.createElement('div');
      div.textContent = `${student.name} - ${student.college}`;
      document.getElementById(`container${index + 1}`).appendChild(div);
      });
});



