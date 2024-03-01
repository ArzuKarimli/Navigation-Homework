let list = document.querySelectorAll("li");

function activeLink() {
    list.forEach((li) => {
        li.classList.remove("active");
    });
    this.classList.add("active");
}

list.forEach((li) => {
    li.addEventListener("click", activeLink);
});

let closeBar=document.querySelector(".navigation");
let btn=document.querySelector(".close");
let btnMenu=document.querySelector(".menu")
 
btnMenu.addEventListener("click",function(){
    closeBar.classList.add("move-nav");
    btn.classList.remove("d-none");
    btnMenu.classList.add("d-none")
});

btn.addEventListener("click",function(){
    closeBar.classList.remove("move-nav");
    btn.classList.add("d-none");
    btnMenu.classList.remove("d-none")
})