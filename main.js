

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight
         // Mở đóng mobile-menu
mobileMenu.onclick = function(){
    var isClose = header.clientHeight === headerHeight ;
    if (isClose){
        header.style.height='auto';
    }else{
        header.style.height= null;
    }
}
        // Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav>li>a[href*="#"]');

for (var i = 0; i< menuItems.length; i++){
    var menuItem = menuItems[i]; 
    menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParentMenu){
            event.preventDefault();
        }else{
            header.style.height= null;
        }
        
    }
}



const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
//  Hàm hiển thị form modal
function showBuyTickets(){
    modal.classList.add('open')
    console.log('dcmm');
}

function hideBuyTickets(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})


// tabs and lines
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')
requestIdleCallback(function() {
    line.style.left = tabActive.offsetLeft +'px'
    line.style.width = tabActive.offsetWidth +'px'
})
console.log([tabActive]);
console.log(tabs,panes)
tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function() {

        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft +'px'
        line.style.width = this.offsetWidth +'px'

        this.classList.add('active')
        pane.classList.add('active')
    }
});
