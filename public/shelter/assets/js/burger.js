let burgerElem = document.querySelector("#burger")
console.log(burgerElem)
burgerElem.onclick = burger;
function burger(event){
    const nav = document.querySelector('nav');
    const navWrapper = document.querySelector('.nav-wrapper');
    const section = document.querySelector('.greeting-screen-wrapper')
    if (burgerElem.classList.contains("opened")) {
        burgerElem.classList.remove('opened');
        const header = document.querySelector('header')
        const windowWrapper= document.querySelector('.window-wrapper')
        windowWrapper.remove()
        nav.classList.remove('burger-nav')
        header.insertAdjacentElement('beforeend', nav)
        navWrapper.classList.remove('opened');
        document.body.style.overflow = 'auto';
        document.onclick = '';
        return
    } else {
        burgerElem.classList.add('opened');
        document.body.style.overflow = 'hidden';
        nav.classList.add('burger-nav');
        let windowWrapper = document.createElement('div')
        windowWrapper.classList.add('window-wrapper')
        navWrapper.insertAdjacentElement('afterbegin', nav)
        // burgerElem.insertAdjacentElement('beforebegin', navWrapper);
        navWrapper.classList.add('opened')
        let body = document.querySelector('body')
        body.insertAdjacentElement('afterbegin', windowWrapper)
        setTimeout(() => document.onclick = popUp, 0);
    }
    function popUp (event){
        const windowWrapper= document.querySelector('.window-wrapper')
        if((event.target === windowWrapper) || event.target.tagName === 'A') {
            burger()
        }
    }
}