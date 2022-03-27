let sideToggle = true;
sideBtnClick = ()=> {
    const getSideBar = document.querySelector("#sideBar");
    const getImg = document.getElementById("myImg");

    if (!!sideToggle) {
        getSideBar.style.display = "unset";
        getSideBar.classList.add("animate__fadeInRight");
        getSideBar.classList.remove("animate__fadeOutRight");

        setTimeout(() => {
            getImg.src = "images/svg/close.svg";
            getSideBar.style.position = "absolute";
        }, 1000);

        sideToggle = false;
    } else if (!sideToggle) {
        getSideBar.classList.remove("animate__fadeInRight");
        getSideBar.classList.add("animate__fadeOutRight");
        getSideBar.style.position = "fixed";

        setTimeout(() => {
            getImg.src = "images/svg/dots.svg";
        }, 500);
        
        sideToggle = true;
    } 
}




const spinner = document.querySelector("#siteSpinner");
const content = document.querySelector("#siteContent");
setTimeout(() => {
    spinner.classList.add("animate__fadeOut");
}, 3000);
setTimeout(() => {
    content.classList.remove("siteContent");
    spinner.style.display = "none";
}, 3250);
