function redirectToRegistration() {
    window.location.href = 'registration.html';
}

let ele = document.querySelector(".card");
let bgImage = document.getElementById("bg");
console.log(ele);

let lastScrollTop = 0;

function hideOnScroll() {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
       
        ele.style.opacity = 0;
        
        bgImage.src = "fg.jpg"; 
    } else {
        ele.style.opacity = 1;
        
        bgImage.src = "bg.jpg"; 
    }

    lastScrollTop = st;
}
window.addEventListener("scroll", hideOnScroll);
