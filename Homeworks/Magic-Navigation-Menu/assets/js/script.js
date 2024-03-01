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
 
btn.addEventListener("click",function(){
    closeBar.classList.add("move-nav");
    btnMenu.classList.remove("d-none");
    btn.classList.add("d-none")
});

btnMenu.addEventListener("click",function(){
    closeBar.classList.remove("move-nav");
    btnMenu.classList.add("d-none");
    btn.classList.remove("d-none")
})