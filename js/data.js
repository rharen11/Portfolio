
//variables----------
import { projects } from "./app.js"

//cached elements---------
const cardContainer = document.getElementById('card-container')
const navBtns = document.querySelector('.nav-bar')

//event listeners-------------
navBtns.addEventListener("mouseover", function(evt){
    evt.target.style.color = "yellow"

    setTimeout(function(){
        evt.target.style.color = ""
    }, 1000)
}, false)

//functions------------------------

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
