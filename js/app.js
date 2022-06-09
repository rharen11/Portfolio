
//variables----------
import { projects } from "./data.js"

//cached elements---------
const cardContainer = document.getElementById('card-container')
const navBtns = document.querySelector('.nav-bar')
const githubBtn = document.getElementById('github-contact')
const linkedinBtn = document.getElementById('linkedin-contact')
const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")


//event listeners-------------

githubBtn.addEventListener('mouseenter', function(evt){
    githubBtn.style.color = 'red'
})

linkedinBtn.addEventListener('mouseover', function(evt){
    linkedinBtn.style.color = 'red'
})

githubBtn.addEventListener('mouseleave', function(evt){
    githubBtn.style.color = ''
})

linkedinBtn.addEventListener('mouseleave', function(evt){
    linkedinBtn.style.color = ''
})

lightDarkBtn.addEventListener('click', toggleLightDark)

//functions------------------------

function toggleLightDark() {
    body.className = body.className === "dark" ? "" : "dark"
  }

  function checkDarkPref() {
    if (
      window.matchMedia("(prefers-color-scheme:dark)").matches &&
      body.className !== "dark"
    ) {
      toggleLightDark()
    }
  }

  checkDarkPref()

let projectPage = projects.map(project =>
    
`<div class="card text-center" style="width: 18rem;">
<img src="${project.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${project.title}</h5>
  <p class="card-text">${project.description}</p>
  <div>
    <a href="${project.github}" class="btn btn-primary">GitHub</a>
    <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
  </div>
</div>
</div>`

).join('')

cardContainer.innerHTML = projectPage