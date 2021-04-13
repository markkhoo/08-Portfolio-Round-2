// Pointers
var aboutContainer = document.getElementById("about");
var work_Container = document.getElementById("work_");
var reposContainer = document.getElementById("repos");
var contaContainer = document.getElementById("conta");

// Global Variables
var repos = [];

// Display for time since started coding
let timeSince = document.getElementById("time-since");
setInterval(function() {
    let time = dayjs().diff(dayjs(1615262400000),'day',true); // Days since March 8, 2020
    timeSince.innerText = time.toString().substring(0,9);
},50);

// Fetch Reops
let requestURL = 'https://api.github.com/users/markkhoo/repos';
fetch(requestURL)
.then(response => {
    return response.json();
})
.then(function(data){
    repos = data;
    displayRepos();
});

// Display GitHub Repos
function displayRepos() {
    reposContainer.innerHTML = "";

    if (repos.length != 0) {
        for (let i = 0; i < repos.length; i++) {
            let singleRepo = document.createElement("a");
            singleRepo.innerHTML = repos[i].name;
            singleRepo.setAttribute("href", repos[i].html_url);
            singleRepo.setAttribute("target","_blank");
            singleRepo.setAttribute("rel", "noreferrer noopener");

            reposContainer.appendChild(singleRepo);
        };
    } else {
        let noRepos = document.createElement("h4");
        noRepos.innerHTML = "No Public Repos";
        reposContainer.appendChild(noRepos);
    };
};

// INITIALIZE
function init () {
    aboutContainer.setAttribute("style", "visibility: initial; height: auto");
    work_Container.setAttribute("style", "visibility: hidden; height: 0px");
    reposContainer.setAttribute("style", "visibility: hidden; height: 0px");
    contaContainer.setAttribute("style", "visibility: hidden; height: 0px");
};
init();

// Click About Me
document.getElementById("click_about").addEventListener("click",function(){
    aboutContainer.setAttribute("style", "visibility: initial; height: auto");
    work_Container.setAttribute("style", "visibility: hidden; height: 0px");
    reposContainer.setAttribute("style", "visibility: hidden; height: 0px");
    contaContainer.setAttribute("style", "visibility: hidden; height: 0px");
});

// Click Work
document.getElementById("click_work_").addEventListener("click",function(){
    aboutContainer.setAttribute("style", "visibility: hidden; height: 0px");
    work_Container.setAttribute("style", "visibility: initial; height: auto");
    reposContainer.setAttribute("style", "visibility: hidden; height: 0px");
    contaContainer.setAttribute("style", "visibility: hidden; height: 0px");
});

// Click Github Repos
document.getElementById("click_repos").addEventListener("click",function(){
    aboutContainer.setAttribute("style", "visibility: hidden; height: 0px");
    work_Container.setAttribute("style", "visibility: hidden; height: 0px");
    reposContainer.setAttribute("style", "visibility: initial; height: auto");
    contaContainer.setAttribute("style", "visibility: hidden; height: 0px");
});

// Click Contact
document.getElementById("click_conta").addEventListener("click",function(){
    aboutContainer.setAttribute("style", "visibility: hidden; height: 0px");
    work_Container.setAttribute("style", "visibility: hidden; height: 0px");
    reposContainer.setAttribute("style", "visibility: hidden; height: 0px");
    contaContainer.setAttribute("style", "visibility: initial; height: auto");
});
