
/**
 * NAVBAR
 */

// Element variables
const menu          = document.querySelector('.menu');
const menuLines     = document.querySelectorAll('.line');
const mobTabLinks   = document.querySelector('.mob-tab-links');
const nav           = document.querySelector('nav');
const section       = document.querySelector('section');
const sideBar       = document.querySelector('#sidebar');
const searchBar = document.querySelector('.search-bar');


// toggler function
function togglerFunction(){

    for (let i = 0; i < menuLines.length; i++) {
        menuLines[i].classList.toggle('toggle');     
    }

    if(menu.classList.contains('toggle')){
        menu.classList.remove('toggle');
        mobTabLinks.style.display = "none";


    }else {
        menu.classList.add('toggle');
        mobTabLinks.style.display = "flex";

        // const windowWidth1 = window.matchMedia('(min-width: 52.125rem');

        // Remove the menu and put everything to the default phase after certain amount of time
            const rimove = ()=> {
                for (let j = 0; j < menuLines.length; j++) {
                    menuLines[j].classList.remove('toggle');     
                }
                menu.classList.remove('toggle');
                
                mobTabLinks.style.display = "none";
            
            };

            //Remove the menu unless the mouse it leave's mobTabLinks 
            mobTabLinks.addEventListener("mouseleave", setTimeout(rimove, 15000));

            
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

// Call remove the links function that exist in the MENU section for Close the menu links when the user click some were in the body items

[section, sideBar, searchBar].forEach(item => {
    item.addEventListener('click', removeTheLinks);
});


/**
 * MENU
 */

// Element variables
const body         = document.querySelector('body');
const icons        = document.querySelector('.icons');
const iconsItem    = document.querySelector('.icons-item');
const notification = document.querySelector('.notification');
const customize    = document.querySelector('.customize');
const iconLinks    = document.querySelector('.icons-link');
const links        = document.querySelector('.links');
const navLastEl    = nav.lastElementChild;
const icons2       = document.querySelector('#icons2');

// Variables
const windowWidth = window.matchMedia('(min-width: 75rem');
const icons1 = document.createElement('div');

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


/**
 * SEARCH BAR
 */

// Element Variables
const inputContainer = document.querySelector('.search-bar');
const searchBarInput = document.querySelector('#search-bar');
const searchBarImg   = inputContainer.querySelector("img");

// Change the outline color of the search bar container depend if it's focused or not
searchBarInput.addEventListener("focus", ()=> {
    inputContainer.style.borderColor = "#000956";
    searchBarImg.src ="/images/icons/VectorBlue.svg";
});

searchBarInput.addEventListener("blur", ()=> {
    inputContainer.style.borderColor = "#ededed";
    searchBarImg.src ="/images/icons/Vector.svg";
    
});

/**
 * MENU LINK's
 */

//Element Variables
const link7        = iconLinks.querySelector('li:nth-child(7)');
const link8        = iconLinks.querySelector('li:nth-child(8)');
const link9        = iconLinks.querySelector('li:nth-child(9)');
const link10        = iconLinks.querySelector('li:nth-child(10)');
const link7Icon    = link7.querySelector('img');

// Variables
const moreLinks     = document.createElement('li');
// moreLinks.setAttribute('class', 'link');

// Display the hidden links 
function showHidLinks(){
    link7Icon.src = "/images/icons/Up-menu.svg";

    iconLinks.classList.add('link-hovered');


    [link8, link9, link10].forEach((item)=> {
        moreLinks.appendChild(item);
        item.style.display = 'block';
    });
    
    moreLinks.style.display = 'flex';
    moreLinks.style.flexDirection = 'column';
    moreLinks.style.alignItems = 'center';
    moreLinks.style.rowGap = '1rem';
    link7Icon.style.marginBottom = '.4rem';

    link7.after(moreLinks);

    link7.addEventListener("mouseleave", ()=> {
        setTimeout(hidShowedLinks, 20000);
    });

};

// Undisplay the hidden links 
function hidShowedLinks(){
    link7Icon.src = "/images/icons/down-menu.svg";

    iconLinks.classList.remove('link-hovered');

    [link8, link9, link10].forEach((item)=> {
        moreLinks.after(item);
        item.style.display = 'none';
    });
    
    moreLinks.remove();
};

// Run showhidlinks function when link7 seven is hovered and When it's unhovered run hidShowedLinks function
link7.addEventListener("mouseover", showHidLinks);

moreLinks.addEventListener("mouseleave", hidShowedLinks);

/**
 * DASHBOARD/SHOW LESS/MORE
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
showP.addEventListener('click', controlCurrentT);
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
