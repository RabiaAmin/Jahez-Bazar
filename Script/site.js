const menuIcon = document.querySelector('.menu-icon');
const categoryListWrap = document.querySelector('.category-list-wrap');
const categoryMenuContainer = document.querySelector('.category-menu-container');
const dropdownSearchBtn = document.querySelector('.dropdown-search-btn');
menuIcon.addEventListener('click',()=>{
    if(categoryListWrap.style.display === 'none'){
        categoryListWrap.style.display = 'flex';
     
    }
    else{
        categoryListWrap.style.display = 'none';
    }
});


// Close the menu when you click anywhere else on the document
document.addEventListener("click", function(e) {
    if (e.target !== menuIcon && e.target !== categoryListWrap) {
        categoryListWrap.style.display = "none";
    }
});

dropdownSearchBtn.addEventListener('click',()=>{
    if(categoryMenuContainer.style.display === 'none'){
        categoryMenuContainer.style.display = 'flex';
    }
    else{
        categoryMenuContainer.style.display = 'none';
    }
})