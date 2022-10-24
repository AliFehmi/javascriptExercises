let skillset= document.getElementById("spells");
let description= document.getElementById("heroDesc")
let descriptionButton= document.getElementById("descriptionBar");
let skillsetButton= document.getElementById("skillsetBar");
descriptionButton.classList.add("tabList")
skillset.style.display="none";
let descriptionBar=document.getElementById("descriptionBar");
descriptionBar.classList.add("tabLine");
descriptionButton.addEventListener("click", contentHero);
skillsetButton.addEventListener("click", contentSkills);
function contentHero(){
    description.style.display="grid";
    skillset.style.display="none";
    descriptionButton.classList.add("tabLine");
    skillsetButton.classList.remove("tabLine");
}
function contentSkills(){
    description.style.display="none";
    skillset.style.display="grid";
    descriptionButton.classList.remove("tabLine");
    skillsetButton.classList.add("tabLine");
}



