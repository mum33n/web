var toggler=document.querySelector(".nav-toggler");
function myFunc() {
    document.querySelector(".nav-list").classList.toggle("toggled");
    document.querySelector(".navbar").classList.toggle("black");
}
toggler.addEventListener("click", myFunc)
