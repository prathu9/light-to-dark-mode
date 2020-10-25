const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon =  document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileNav = document.getElementById("mobile-nav");

//Dark Mode Styles
const darkMode = ()=>{
    nav.style.backgroundColor = "rgb(0 0 0/50%)";
    toggleIcon.children[0].textContent = "Dark";
    toggleIcon.children[1].classList.replace("fa-sun","fa-moon");
    imageMode("dark");
    textBox.style.backgroundColor = "rgb(255 255 255/50%)";
}

//Light Mode Styles
const lightMode = ()=>{
    nav.removeAttribute("style");
    toggleIcon.children[0].textContent = "Light";
    toggleIcon.children[1].classList.replace("fa-moon","fa-sun");
    imageMode("light");
    textBox.removeAttribute("style");
}


const imageMode = (color)=>{
    image1.src=`image/undraw_Online_world_re_h4cb_${color}.svg`;
    image2.src=`image/undraw_Mail_sent_re_0ofv_${color}.svg`;
    image3.src=`image/undraw_camping_noc8_${color}.svg`;
}

//Check Local Storage for Theme
(()=>{
    const currentTheme = localStorage.getItem("theme");
    if(currentTheme){
        document.documentElement.setAttribute("data-theme", currentTheme);
        if(currentTheme==="dark"){
            toggleSwitch.checked = true;
            darkMode();
        }
    }
})();

//Change Theme Dynamically
const changeTheme = (event)=>{
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        darkMode();
        localStorage.setItem("theme","dark");
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
        lightMode();
        localStorage.setItem("theme","light");
    }   
}

//For Hamburger Icon
//changing hamburger Icon
const changeHamburgerIcon = ()=>{
    let hamburgerChildren = hamburgerIcon.children;
    for(let i=0; i < hamburgerChildren.length; i++){
        hamburgerChildren.item(i).classList.toggle("hamburger-icon-close");
    }
    if(hamburgerIcon.dataset.mobilenav === "open"){
        mobileNav.style.display = "flex";
        // mobileNav.style.transform = "translateX(100%)";
        nav.style.zIndex = "100";
        nav.style.backgroundColor = "initial";
        hamburgerIcon.dataset.mobilenav = "close";
    }
    else{
        mobileNav.style.display = "none";
        // mobileNav.style.transform = "translateX(-100%)";
        nav.style.zIndex = "10";
        nav.style.backgroundColor = "default";
        hamburgerIcon.dataset.mobilenav = "open";
    }
    
}

//Event Listener
toggleSwitch.addEventListener("change", changeTheme);
hamburgerIcon.addEventListener("click", changeHamburgerIcon);