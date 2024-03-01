"use strict"

const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const btn = document.querySelector(".light-dark-button");
const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const opened = document.querySelector(".open");
const closed = document.querySelector(".closed");
const icons = document.querySelector(".icons");
const moveIcons = document.querySelector(".move-icons");
const sidebarIcons = document.querySelector(".sidebar-icons");


opened.addEventListener("click", function () {
    if (sidebar.classList.contains("move-sidebar")) {
        sidebar.classList.remove("move-sidebar");
        opened.classList.add("d-none");
        closed.classList.remove("d-none");
        sidebarIcons.classList.remove("d-none");
        moveIcons.classList.add("d-none");
        btn.classList.remove("d-none");
    
    }
});

closed.addEventListener("click", function () {
    if (!sidebar.classList.contains("move-sidebar")) {
        sidebar.classList.add("move-sidebar");
        closed.classList.add("d-none");
        opened.classList.remove("d-none");
        sidebarIcons.classList.add("d-none");
        moveIcons.classList.remove("d-none");  
        btn.classList.add("d-none");
    }
});




moon.addEventListener("click", function () {
    this.classList.add("moon");
    sun.classList.add("sun");
    btn.classList.add("button-dark");
    btn.classList.remove("light-dark-button");
    body.style.backgroundColor = "black";
    sidebar.classList.add("sidebar-dark");

})

sun.addEventListener("click", function () {
    this.classList.remove("moon");
    sun.classList.remove("sun");
    btn.classList.remove("button-dark");
    btn.classList.add("light-dark-button");
    body.style.backgroundColor = "rgba(160, 158, 158, 0.212)";
    sidebar.classList.remove("sidebar-dark");

})
