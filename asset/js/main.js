//Navbar 

const NavItems = document.querySelector('.nav-items');
const OpenNavBtn = document.querySelector('#open_nav-btn');
const CloseNavBtn = document.querySelector('#close_nav-btn');

//function to open navbar
const OpenNav = () => {
    NavItems.style.display= 'flex';
    OpenNavBtn.style.display= 'none';
    CloseNavBtn.style.display ="inline-block";
}

// function to close navbar
const CloseNav = () =>{
    NavItems.style.display = 'none';
    OpenNavBtn.style.display = 'inline-block';
    CloseNavBtn.style.display = 'none';
}

OpenNavBtn.addEventListener('click', OpenNav);
CloseNavBtn.addEventListener('click', CloseNav);



// Admin dashboard Menu bar
const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show_sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide_sidebar-btn');

//function to show side menu bar
const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none'
    hideSidebarBtn.style.display = 'inline-block'
}

//function to hide side menu bar
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block'
    hideSidebarBtn.style.display = 'none'
}

showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);













