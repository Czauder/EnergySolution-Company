// nav mobile 
const bars = document.querySelector(".bars")
const nav = document.querySelector(".navMobile")

menuNav = () => {
    bars.classList.toggle("on");
    nav.classList.toggle('on');
}

bars.addEventListener('click', menuNav)