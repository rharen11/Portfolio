
//variables----------
import { projects } from "./data.js"

//cached elements---------
const cardContainer = document.getElementById('card-container')
const navBtns = document.querySelector('.nav-bar')
const githubBtn = document.getElementById('github-contact')
const linkedinBtn = document.getElementById('linkedin-contact')

console.log(githubBtn, linkedinBtn)
//event listeners-------------

githubBtn.addEventListener('mouseover', function(evt){
    githubBtn.style.color = 'red'
    githubBtn.style.backgroundColor = 'black'

    setTimeout(function(){
        evt.target.style.color = ""
        evt.target.style.backgroundColor = ""
    }, 500)
}, false)

linkedinBtn.addEventListener('mouseover', function(evt){
    linkedinBtn.style.color = 'red'
    linkedinBtn.style.backgroundColor = 'black'

    setTimeout(function(){
        evt.target.style.color = ""
        evt.target.style.backgroundColor = ""
    }, 500)
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