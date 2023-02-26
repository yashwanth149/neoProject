const newsDiv = document.querySelectorAll(".stars");
for (const starDiv of newsDiv) {
  for (let j = 0; j < 5; j++) {
    let subDiv = document.createElement("div");
    subDiv.innerHTML = `<span class="fa-regular fa-star shape" ></span>`;
    subDiv.setAttribute("data-value", j + 1);
    subDiv.style.cursor = "pointer";
    starDiv.appendChild(subDiv);
    subDiv.className = "star";
    subDiv.addEventListener("click", function () {
      if (this.getAttribute("data-value") == 1) {
        starDiv.innerHTML = `<div>${this.getAttribute("data-value")} BAD</div> <span class="fas fa-star shape" ></span>`;
        starDiv.style.fontSize = '12px'
        starDiv.style.padding = '5px 0 4px 5px'
      } else if (this.getAttribute("data-value") == 2) {
        starDiv.innerHTML = `<div>${this.getAttribute("data-value")} NOT BAD</div><span class="fas fa-star shape" ></span>`;
        starDiv.style.fontSize = '12px'
        starDiv.style.padding = '5px 0 4px 5px'
      } else if (this.getAttribute("data-value") == 3) {
        starDiv.innerHTML = `<div>${this.getAttribute("data-value")} GOOD</div><span class="fas fa-star shape" ></span>`;
        starDiv.style.fontSize = '12px'
        starDiv.style.padding = '5px 0 4px 5px'
      } else if (this.getAttribute("data-value") == 4) {
        starDiv.innerHTML = `<div>${this.getAttribute("data-value")} VERY GOOD</div><span class="fas fa-star shape" ></span>`;
        starDiv.style.fontSize = '12px'
        starDiv.style.padding = '5px 0 4px 5px'
      } else if (this.getAttribute("data-value") == 5) {
        starDiv.innerHTML = `<div>${this.getAttribute("data-value")} PERFECT</div><span class="fas fa-star shape" ></span>`;
        starDiv.style.fontSize = '12px'
        starDiv.style.padding = '5px 0 4px 5px'
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


// Adding sudents when the button is clcked
const clickBtn = document.getElementById('new');
const clickButton = () => {
  // List is created when the button is clicked
  const newLs = document.querySelector('.col1');
  const lists = document.createElement('li');
  lists.classList.add('member');
  // outer div tag is created which has name and college name iint
  const topDiv = document.createElement('div');
  topDiv.classList.add('top');
  const studInfoDiv = document.createElement('div');
  studInfoDiv.classList.add('container')
  const studInfo = document.createElement('div');
  topDiv.appendChild(studInfoDiv)
  studInfoDiv.appendChild(studInfo)
  lists.appendChild(topDiv);
  // creating the top part of the list has name and college of the student
  const sp1 = document.createElement('p');
  sp1.setAttribute('style','text-align: right; font-size: 11px; padding: 3px 12px 3px 0;')
  let sudentName = prompt('Enter name: ')
  let clgName = prompt('Enter the college name: ');
  studInfo.innerText = `${sudentName} - ${clgName}`;
  sp1.innerText = 'REQ: #1062';
  topDiv.appendChild(sp1);
  // creating outer div tag for rating stars
  const starDiv = document.createElement('div');
  starDiv.classList.add('stars');
  // Creating the stars
  for(let i = 0; i < 5; i++){
      const stars = document.createElement('div');
      stars.setAttribute('data-value',i + 1)
      stars.classList.add('star')
      stars.innerHTML = `<span class="fa-regular fa-star shape" ></span>`
      stars.addEventListener("click", function () {
        if (this.getAttribute("data-value") == 1) {
          starDiv.innerHTML = `<div>${this.getAttribute("data-value")} </div> <span class="fas fa-star shape" ></span>`;
          starDiv.style.fontSize = '12px'
          starDiv.style.padding = '5px 0 4px 5px'
        } else if (this.getAttribute("data-value") == 2) {
          starDiv.innerHTML = `<div>${this.getAttribute("data-value")}  </div><span class="fas fa-star shape" ></span>`;
          starDiv.style.fontSize = '12px'
          starDiv.style.padding = '5px 0 4px 5px'
        } else if (this.getAttribute("data-value") == 3) {
          starDiv.innerHTML = `<div>${this.getAttribute("data-value")} </div><span class="fas fa-star shape" ></span>`;
          starDiv.style.fontSize = '12px'
          starDiv.style.padding = '5px 0 4px 5px'
        } else if (this.getAttribute("data-value") == 4) {
          starDiv.innerHTML = `<div>${this.getAttribute("data-value")}  </div><span class="fas fa-star shape" ></span>`;
          starDiv.style.fontSize = '12px'
          starDiv.style.padding = '5px 0 4px 5px'
        } else if (this.getAttribute("data-value") == 5) {
          starDiv.innerHTML = `<div>${this.getAttribute("data-value")} </div><span class="fas fa-star shape" ></span>`;
          starDiv.style.fontSize = '12px'
          starDiv.style.padding = '5px 0 4px 5px'
        }
      });
      starDiv.appendChild(stars)
  }
  lists.appendChild(starDiv);
  newLs.appendChild(lists);

}

