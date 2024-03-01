"use script"


// let h1=document.querySelector("h1");
// console.log(document.querySelector(".item"));
// console.log(h1.parentNode);
// console.log(h1.parentNode.nextElementSibling);
// console.log(h1.parentNode.nextElementSibling.previousElementSibling);

// console.log(h1.closest(".product"));
// let elem = document.querySelector(".item1");



// console.log(elem.parentNode.parentElement.nextElementSibling.firstElementChild);
// console.log(document.querySelector(".salam").nextElementSibling.lastElementChild.innerHTML);


// let btns = document.querySelectorAll("button");
// let elem = document.querySelector("h1")

// btns.forEach(btn => {
//     btn.addEventListener("click", function(e){
//         // elem.style.backgroundColor="red";
//         // this.nextElementSibling.style.backgroundColor = "red";
//         //  console.log(e.target);


//     })
// });

// document.addEventListener("keydown", function(e){
//  if(e.keyCode == 13){
//     document.querySelector("body").style.backgroundColor="black"
// }
// })

//  let sidebar= document.querySelector(".sidebar");
//  let openIcon=document.querySelector(".open-icon");
//  let closeIcon=document.querySelector(".close-icon");

//  openIcon.addEventListener("click",function(){
//     sidebar.classList.remove("move-sidebar");
//     this.classList.add("d-none");
//     this.previousElementSibling.classList.remove("d-none")
//  })
//  closeIcon.addEventListener("click",function(){
//     sidebar.classList.add("move-sidebar");
//     this.classList.add("d-none");
//     this.nextElementSibling.classList.remove("d-none")
//  })


// document.querySelector(".icons").addEventListener("click",function(){
//     sidebar.classList.toggle("move-sidebar");
//     this.firstElementChild.classList.toggle("fa-square-xmark")
// })


// document.querySelector(".paste").addEventListener("click", function () {
//     document.querySelector("h2").innerText = document.querySelector("h1").innerText;
//     document.querySelector("h1").innerText="";
// })

// let sendBtn=document.querySelector(".send");

// sendBtn.addEventListener("mouseover",function(){
//    this.classList.remove("btn-primary");
//    this.classList.add("btn-success")
// })
// sendBtn.addEventListener("mouseout",function(){
//     this.classList.remove("btn-success");
//     this.classList.add("btn-primary")
// })


// let sendBtn=document.querySelector(".send");
// let warning=document.querySelector(".warning");

// sendBtn.addEventListener("mouseover",function(){
//    warning.classList.remove("btn-warning");
//    warning.classList.add("btn-success")
// })
// sendBtn.addEventListener("mouseout",function(){
//     warning.classList.remove("btn-success");
//     warning.classList.add("btn-warning")
// })


// let input = document.querySelector("input");
// input.addEventListener("keydown",function(){
//   console.log("Aqshin bey");
// })
// input.addEventListener("keyup",function(){
//     console.log("Aqshin bey");
// })
// input.addEventListener("keypress",function(){
//     console.log("Aqshin bey");
// })


// document.querySelector(".form-select").addEventListener("change",function(){
//     console.log(this.value);
// })


// console.log(document.querySelector("a").getAttribute("href"));

// document.querySelector("a").setAttribute("href","salam")


// let linkedinBtn = document.querySelector(".linkedin");

// let googleBtn = document.querySelector(".google")


// linkedinBtn.addEventListener("click",function(){
//     document.querySelector("a").setAttribute("href","https://www.linkedin.com/")
//     document.querySelector("a").innerText = "Go to Linkedin"
// })


// googleBtn.addEventListener("click",function(){
//     document.querySelector("a").setAttribute("href","https://www.google.com/")
//     document.querySelector("a").innerText = "Go to Google"
// })