/**
 * NAVBAR
 */

// Element variables
const menu          = document.querySelector('.menu');
const menuLines     = document.querySelectorAll('.line');
const mobTabLinks   = document.querySelector('.mob-tab-links');
const nav           = document.querySelector('nav');
const section       = document.querySelector('section');
const sideBar        = document.querySelector('#sidebar');


// toggler function
function togglerFunction(){

    for (let i = 0; i < menuLines.length; i++) {
        menuLines[i].classList.toggle('toggle');     
    }

    if(menu.classList.contains('toggle')){
        menu.classList.remove('toggle');
        mobTabLinks.style.display = "none";

    }else{
        menu.classList.add('toggle');
        mobTabLinks.style.display = "flex";
    }
}

// add the event listener to the menu icon
menu.addEventListener("click", togglerFunction);

// remove the menu links if the user click any wer outside the menu links it's self
function removeTheLinks(){
    for (let i = 0; i < menuLines.length; i++) {
        menuLines[i].classList.remove('toggle');     
    }
    
    menu.classList.remove('toggle');
    mobTabLinks.style.display = "none";
    
};

// add event listener to section and sidebar for remove the menu links using foreach lop
[section, sideBar].forEach(item=>{
    item.addEventListener('click', removeTheLinks);
});

/**
 * MENU
 */

// Element variables
const icons        = document.querySelector('.icons');
const iconsItem    = document.querySelector('.icons-item');
const notification = document.querySelector('.notification');
const customize    = document.querySelector('.customize');
const iconLinks    = document.querySelector('.icons-link');
const links        = document.querySelector('.links');
const body         = document.querySelector('body');

// Variables
const windowWidth = window.matchMedia('(min-width: 75rem');

// Break the icons div to multiple element
function breakDiv(){
    

    if(windowWidth.matches){

    [menu, iconsItem].forEach(item=> {
        icons.parentNode.appendChild(item);
        item.style.display = "flex";
    });

    icons.remove();
    
    body.appendChild(iconLinks);

    }
}



// Call breakDiv function when the page is loaded
window.addEventListener('load', breakDiv);


// to fix the menu issue when the screen is resized
function reload(){
    if(window.innerWidth >= 1200 && nav.querySelector('.icons ') !== null){

        [menu, iconsItem].forEach(item=> {
            icons.parentNode.appendChild(item);
            // icons1.parentNode.appendChild(item);
            item.style.display = "flex";
        });

        icons.remove();
        // icons1.remove();
        
        body.appendChild(iconLinks);

    }else if(window.innerWidth < 1200 && nav.querySelector('.icons ') == null){
        const icons1 = document.createElement('div');
        icons1.classList.add('icons');
        nav.appendChild(icons1);
        console.log(icons1);

        [menu, iconsItem].forEach(item=> {
            icons1.appendChild(item);
            item.style.display = "flex";
        });
    
        
        mobTabLinks.appendChild(iconLinks);
    }
}
// Call breakDivDepend function when the page is loaded
window.addEventListener('resize', reload);

/**
 * MENU LINK's
 */

// Element Variables
const searchBar = document.querySelector('.search-bar');

// Call remove the links function that eexist in the MENU section for Close the menu links when the user click some were in the body items

[section, sideBar, searchBar].forEach(item => {
    item.addEventListener('click', removeTheLinks);
});


/**
 * SHOW LESS/MORE
 */

//Element Variables
const currentWeather   = document.querySelector('.current-weather');
const show             = document.querySelector('.show-sitting');
const showP            = show.querySelector('p');
const showI            = show.querySelector('i');
const weatherCondition = document.querySelector('.weather-condition');

// control the current weather tab
function controlCurrentT(){

    if(weatherCondition.style.display == 'none'){
        
        // undisplay the weather condition & change the text and also the icon
        weatherCondition.style.display = "grid";
        showP.innerText = "Show less";
        showI.classList.replace('fa-angle-down', 'fa-angle-up');
    }else{
        
        // display the weather condition & change the text and also the icon
        weatherCondition.style.display = "none";
        showP.innerText = "Show more";
        showI.classList.replace('fa-angle-up', 'fa-angle-down');

    }
}

function controlCurrentt(){

    if(weatherCondition.style.display == 'none'){

        // undisplay the weather condition & change the text and also the icon
        weatherCondition.style.display = "grid";
        showP.innerText = "Show less";
        showI.classList.replace('fa-angle-down', 'fa-angle-up');
    }
}

// call the controlCurrentT function when the show is clicked
show.addEventListener('click', controlCurrentT);
currentWeather.addEventListener('click', controlCurrentt);

/**
 * DAYLIGHT
 */

//Element Variables
const daylight           = document.querySelector('.day-light');
const medalIconContainer = document.querySelector('.medal-icon-container');
const imgContainer       = medalIconContainer.querySelector('div');
const hrLast             = medalIconContainer.lastElementChild;
const sunIcon            = imgContainer.querySelector('img');

const input              = document.querySelector('[type = range]');
const value              = document.querySelector('#value');

// Turn the sun and all the element related to her in the same time using range input value when the range input is changed
input.addEventListener('input', (e)=> {
    value.value = " " + e.target.value + " " + "degree";

    [hrLast, imgContainer].forEach(element => {
    
        element.style.transform = "translate(-50%, -18%) rotate(" + e.target.value + "deg" + ")";
        sunIcon.style.transform = "rotate( -" + e.target.value + "deg" + ")";
    });

});