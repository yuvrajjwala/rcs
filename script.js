//Background Animation...
var w = window.innerWidth;
var h = window.innerHeight;
// console.log(w)
var ele = Math.floor(Math.random() * 5);
var anim = Math.floor(Math.random() * 5);
const root = document.querySelector(':root');
const e = document.getElementById('_0' + ele);
const e1 = document.getElementById('_00' + ele);
const e2 = document.getElementById('_000' + ele);
const e3 = document.getElementById('_0000' + ele);
var es = getComputedStyle(root);

//variable changing for initial and final position 
if (w > 900) {
    root.style.setProperty('--pos_x_init', Math.floor(Math.random() * (1000 - (-300) + 1) + (-300)) + 'px');
    root.style.setProperty('--pos_y_init', Math.floor(Math.random() * (900 - (950) + 1) + (950)) + 'px');
    root.style.setProperty('--pos_x_final', 'calc(50vw - 700px)');
    root.style.setProperty('--pos_y_final', '-350px');
}
else {
    root.style.setProperty('--pos_x_init', Math.floor(Math.random() * (1000 - (-300) + 1) + (-300)) + 'px');
    root.style.setProperty('--pos_y_init', Math.floor(Math.random() * (900 - (950) + 1) + (950)) + 'px');
    root.style.setProperty('--pos_x_final', '-375px');
    root.style.setProperty('--pos_y_final', '80px');
}
// root.style.setProperty('--pos_x_final', Math.floor(Math.random() * (900 - (-300) + 1) + (-300)) + 'px');
// root.style.setProperty('--pos_y_final', Math.floor(Math.random() * (-250 - (-300) + 1) + (-300)) + 'px');

//animation addition
if (w > 900 && w < 1300) {
    e.setAttribute('style', 'display: block;position: relative;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';animation : anim0 1s ease-in-out; z-index:2;transform: scale(0.6);filter:brightness(1.05);')
    e1.setAttribute('style', 'display: block ; position: absolute;top: calc(' + es.getPropertyValue('--pos_y_final') + ' + 50px);left:calc(50vw - 510px);  height: 1000px;  width: 1000px; animation : anim1 2s ease-in-out ;')
    e2.setAttribute('style', 'display: block ; position: absolute;top: calc(' + es.getPropertyValue('--pos_y_final') + ' + 50px);left:calc(50vw - 510px);  height: 1000px;  width: 1000px; animation : anim2 2s ease-in-out ;')
    e3.setAttribute('style', 'display: block ; position: absolute;top: calc(' + es.getPropertyValue('--pos_y_final') + ' + 50px);left:calc(50vw - 510px);  height: 1000px;  width: 1000px;animation : anim3 2s ease-in-out ;')
}
else if (w > 900) {
    e.setAttribute('style', 'display: block;position: relative;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';animation : anim0 1s ease-in-out; z-index:2;transform: scale(0.8);filter:brightness(1.05);')
    e1.setAttribute('style', 'display: block ; position: absolute;top: calc(' + es.getPropertyValue('--pos_y_final') + ' + 50px);left:calc(50vw - 510px);  height: 1000px;  width: 1000px; animation : anim1 2s ease-in-out ;')
    e2.setAttribute('style', 'display: block ; position: absolute;top: calc(' + es.getPropertyValue('--pos_y_final') + ' + 50px);left:calc(50vw - 510px);  height: 1000px;  width: 1000px; animation : anim2 2s ease-in-out ;')
    e3.setAttribute('style', 'display: block ; position: absolute;top: calc(' + es.getPropertyValue('--pos_y_final') + ' + 50px);left:calc(50vw - 510px);  height: 1000px;  width: 1000px;animation : anim3 2s ease-in-out ;')
}
else {
    e.setAttribute('style', 'display: block;position: relative;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';animation : anim0 1s ease-in-out; z-index:2;transform: scale(0.4);filter:brightness(1.05);')
    e1.setAttribute('style', 'display: block ; position: absolute;top:' + es.getPropertyValue('--pos_y_final') + ';left:-230px;  height: 1000px;  width: 1000px; animation : anim1 2s ease-in-out ;')
    e2.setAttribute('style', 'display: block ; position: absolute;top:' + es.getPropertyValue('--pos_y_final') + ';left:-230px;  height: 1000px;  width: 1000px; animation : anim2 2s ease-in-out ;')
    e3.setAttribute('style', 'display: block ; position: absolute;top:' + es.getPropertyValue('--pos_y_final') + ';left:-230px;  height: 1000px;  width: 1000px;animation : anim3 2s ease-in-out ;')
}

setTimeout(() => {
    if (w > 900) {
        e1.style.transform = 'scale(1.15)';
        e2.style.transform = 'scale(1.5)';
        e3.style.transform = 'scale(1.75)';
    }
    else {
        e1.style.transform = 'scale(0.5)';
        e2.style.transform = 'scale(0.6)';
        e3.style.transform = 'scale(0.7)';
    }
}, 2000);













//Changing image in Accordion 

const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const img = document.getElementById('listImg')
img.style.transitionDuration = '0.5s'

l1.addEventListener('click', () => {
    img.setAttribute('src', './img/our1.png');
    img.style.opacity = '0';
    setTimeout(() => {
        img.style.opacity = '1';
    }, 500);
    document.getElementById('p1').classList.toggle('show');
    document.getElementById('p1').classList.toggle('hidden');
    document.getElementById('p3').classList.add('hidden');
    document.getElementById('p4').classList.add('hidden');
    document.getElementById('p2').classList.add('hidden');
    document.getElementById('p3').classList.remove('show');
    document.getElementById('p4').classList.remove('show');
    document.getElementById('p2').classList.remove('show');

    l1.classList.toggle('accordion');
    l3.classList.remove('accordion');
    l2.classList.remove('accordion');
    l4.classList.remove('accordion');
})
l2.addEventListener('click', () => {
    img.style.opacity = '0';
    setTimeout(() => {
        img.setAttribute('src', './img/our2.png');
        img.style.opacity = '1';
    }, 500);
    document.getElementById('p2').classList.toggle('show');
    document.getElementById('p2').classList.toggle('hidden');
    document.getElementById('p3').classList.add('hidden');
    document.getElementById('p4').classList.add('hidden');
    document.getElementById('p1').classList.add('hidden');
    document.getElementById('p3').classList.remove('show');
    document.getElementById('p4').classList.remove('show');
    document.getElementById('p1').classList.remove('show');

    l2.classList.toggle('accordion');
    l1.classList.remove('accordion');
    l3.classList.remove('accordion');
    l4.classList.remove('accordion');
})

l3.addEventListener('click', () => {
    img.style.opacity = '0';
    setTimeout(() => {
        img.setAttribute('src', './img/our3.png');
        img.style.opacity = '1';
    }, 500);
    document.getElementById('p3').classList.toggle('show');
    document.getElementById('p3').classList.toggle('hidden');
    document.getElementById('p2').classList.add('hidden');
    document.getElementById('p4').classList.add('hidden');
    document.getElementById('p1').classList.add('hidden');
    document.getElementById('p2').classList.remove('show');
    document.getElementById('p4').classList.remove('show');
    document.getElementById('p1').classList.remove('show');

    l3.classList.toggle('accordion');
    l1.classList.remove('accordion');
    l2.classList.remove('accordion');
    l4.classList.remove('accordion');
})
l4.addEventListener('click', () => {
    img.style.opacity = '0';
    setTimeout(() => {
        img.setAttribute('src', './img/our4.png');
        img.style.opacity = '1';
    }, 500);
    document.getElementById('p4').classList.toggle('show');
    document.getElementById('p4').classList.toggle('hidden');
    document.getElementById('p2').classList.add('hidden');
    document.getElementById('p3').classList.add('hidden');
    document.getElementById('p1').classList.add('hidden');
    document.getElementById('p2').classList.remove('show');
    document.getElementById('p3').classList.remove('show');
    document.getElementById('p1').classList.remove('show');

    l4.classList.toggle('accordion');
    l3.classList.remove('accordion');
    l2.classList.remove('accordion');
    l1.classList.remove('accordion');
})



//Carousel 
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    effect: 'coverflow',
    grabcursor: true,
    centeredslides: true,
    slidesPerView: '3.05',
    // autoplay: true,
    coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifer: 1,
        slideShadows: true
    },
    loop: true
});


// Our design Process design
var delay = [0, 0.25, 0.5, 0.75];
var count = 0;
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        document.querySelectorAll('.imgarea div:first-child').forEach(item => {
            item.classList.toggle('animate', entry.isIntersecting)
        })
        if (entry.isIntersecting) {
            document.getElementsByClassName('imgarea_1')[count].classList.add('animate1')
            document.getElementsByClassName('imgarea_1')[count].style.animationDelay = delay[count] + 's'
            entry.target.style.animationDelay = delay[count] + 's'
            count++;
            observer.unobserve(entry.target)
        }

    })

}, {
    threshold: 1,
    rootMargin: '-100px'
})



// observer.observe(document.querySelectorAll('.imgarea')[0]);

document.querySelectorAll('.imgarea').forEach(area => {
    observer.observe(area)
})




//faq


const l11 = document.getElementById('l11');
const l22 = document.getElementById('l22');
const l33 = document.getElementById('l33');
const l44 = document.getElementById('l44');
const l55 = document.getElementById('l55');
// const l66 = document.getElementById('l66');
// const img = document.getElementById('listImg')

l11.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l11.classList.contains('accordion')) {
        setTimeout(() => {
            l11.classList.remove('accordion');
        }, 500);
    } else {
        l11.classList.add('accordion');
    }

    document.getElementById('p11').classList.toggle('hidden');
    document.getElementById('p11').classList.toggle('show');
    document.getElementById('p22').classList.add('hidden');
    document.getElementById('p33').classList.add('hidden');
    document.getElementById('p44').classList.add('hidden');
    document.getElementById('p55').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p22').classList.remove('show');
    document.getElementById('p33').classList.remove('show');
    document.getElementById('p44').classList.remove('show');
    document.getElementById('p55').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l22.classList.remove('accordion');
    l33.classList.remove('accordion');
    l44.classList.remove('accordion');
    l55.classList.remove('accordion');
    document.getElementById('i1').classList.toggle('oo')
    if (document.getElementById('i1').classList.contains('oo')) {
        document.getElementById('i1').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
        <path d="M8 12h8"></path>
      </svg>`;
    }
    else {
        document.getElementById('i1').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
    }
    let a;
    for (a = 1; a < 6; a++) {
        if (a != 1) {
            console.log(a)
            document.getElementById('i' + a).innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
            document.getElementById('i' + a).classList.remove('oo')
        }
    }
})
l22.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l22.classList.contains('accordion')) {
        setTimeout(() => {

            l22.classList.remove('accordion');
        }, 500);
    } else {
        l22.classList.add('accordion');
    }
    document.getElementById('p22').classList.toggle('hidden');
    document.getElementById('p22').classList.toggle('show');
    document.getElementById('p11').classList.add('hidden');
    document.getElementById('p33').classList.add('hidden');
    document.getElementById('p44').classList.add('hidden');
    document.getElementById('p55').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p11').classList.remove('show');
    document.getElementById('p33').classList.remove('show');
    document.getElementById('p44').classList.remove('show');
    document.getElementById('p55').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l11.classList.remove('accordion');
    l33.classList.remove('accordion');
    l44.classList.remove('accordion');
    l55.classList.remove('accordion');
    // l66.classList.remove('accordion');
    document.getElementById('i2').classList.toggle('oo')
    if (document.getElementById('i2').classList.contains('oo'))
        document.getElementById('i2').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
        <path d="M8 12h8"></path>
      </svg>`;
    else
        document.getElementById('i2').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
    for (let a = 1; a < 6; a++) {
        if (a != 2) {
            document.getElementById('i' + a).innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
            document.getElementById('i' + a).classList.remove('oo')
        }
    }
})

l33.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l33.classList.contains('accordion')) {
        setTimeout(() => {

            l33.classList.remove('accordion');
        }, 500);
    } else {
        l33.classList.add('accordion');
    }
    document.getElementById('p33').classList.toggle('hidden');
    document.getElementById('p33').classList.toggle('show');
    document.getElementById('p11').classList.add('hidden');
    document.getElementById('p22').classList.add('hidden');
    document.getElementById('p44').classList.add('hidden');
    document.getElementById('p55').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p11').classList.remove('show');
    document.getElementById('p22').classList.remove('show');
    document.getElementById('p44').classList.remove('show');
    document.getElementById('p55').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l11.classList.remove('accordion');
    l22.classList.remove('accordion');
    l44.classList.remove('accordion');
    l55.classList.remove('accordion');
    // l66.classList.remove('accordion');
    document.getElementById('i3').classList.toggle('oo')
    if (document.getElementById('i3').classList.contains('oo'))
        document.getElementById('i3').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
        <path d="M8 12h8"></path>
      </svg>`;
    else
        document.getElementById('i3').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
    for (let a = 1; a < 6; a++) {
        if (a != 3) {
            document.getElementById('i' + a).innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
            document.getElementById('i' + a).classList.remove('oo')
        }
    }
})
l44.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l44.classList.contains('accordion')) {
        setTimeout(() => {

            l44.classList.remove('accordion');
        }, 500);
    } else {
        l44.classList.add('accordion');
    }
    document.getElementById('p44').classList.toggle('hidden');
    document.getElementById('p44').classList.toggle('show');
    document.getElementById('p11').classList.add('hidden');
    document.getElementById('p33').classList.add('hidden');
    document.getElementById('p22').classList.add('hidden');
    document.getElementById('p55').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p11').classList.remove('show');
    document.getElementById('p33').classList.remove('show');
    document.getElementById('p22').classList.remove('show');
    document.getElementById('p55').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l11.classList.remove('accordion');
    l22.classList.remove('accordion');
    l33.classList.remove('accordion');
    l55.classList.remove('accordion');
    // l66.classList.remove('accordion');
    document.getElementById('i4').classList.toggle('oo')
    if (document.getElementById('i4').classList.contains('oo'))
        document.getElementById('i4').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
        <path d="M8 12h8"></path>
      </svg>`;
    else
        document.getElementById('i4').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
    for (let a = 1; a < 6; a++) {
        if (a != 4) {
            document.getElementById('i' + a).innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
            document.getElementById('i' + a).classList.remove('oo')
        }
    }
})

l55.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l55.classList.contains('accordion')) {
        setTimeout(() => {
            console.log('removed')
            l55.classList.remove('accordion');
        }, 500);
    } else {
        l55.classList.add('accordion');
    }
    document.getElementById('p55').classList.toggle('hidden');
    document.getElementById('p55').classList.toggle('show');
    document.getElementById('p11').classList.add('hidden');
    document.getElementById('p33').classList.add('hidden');
    document.getElementById('p22').classList.add('hidden');
    document.getElementById('p44').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p11').classList.remove('show');
    document.getElementById('p33').classList.remove('show');
    document.getElementById('p22').classList.remove('show');
    document.getElementById('p44').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l11.classList.remove('accordion');
    l22.classList.remove('accordion');
    l33.classList.remove('accordion');
    l44.classList.remove('accordion');
    // l66.classList.remove('accordion');
    document.getElementById('i5').classList.toggle('oo')
    if (document.getElementById('i5').classList.contains('oo'))
        document.getElementById('i5').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
        <path d="M8 12h8"></path>
      </svg>`;
    else
        document.getElementById('i5').innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
    for (let a = 1; a < 6; a++) {
        if (a != 5) {
            document.getElementById('i' + a).innerHTML = `<svg width="46" height="30" style="position:absolute;" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>`;
            document.getElementById('i' + a).classList.remove('oo')
        }
    }
})

// l66.addEventListener('click', () => {
//     // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
//     document.getElementById('p66').classList.toggle('hidden');
//     document.getElementById('p66').classList.toggle('show');
//     document.getElementById('p11').classList.add('hidden');
//     document.getElementById('p33').classList.add('hidden');
//     document.getElementById('p22').classList.add('hidden');
//     document.getElementById('p55').classList.add('hidden');
//     document.getElementById('p44').classList.add('hidden');
//     document.getElementById('p11').classList.remove('show');
//     document.getElementById('p33').classList.remove('show');
//     document.getElementById('p22').classList.remove('show');
//     document.getElementById('p55').classList.remove('show');
//     document.getElementById('p44').classList.remove('show');
//     l11.classList.remove('accordion');
//     l22.classList.remove('accordion');
//     l33.classList.remove('accordion');
//     l44.classList.remove('accordion');
//     l55.classList.remove('accordion');
//     l66.classList.toggle('accordion');
//     document.getElementById('i6').classList.toggle('fa-plus-circle')
//     document.getElementById('i6').classList.toggle('fa-minus-circle')
//     document.getElementById('i5').classList.add('fa-plus-circle')
//     document.getElementById('i5').classList.remove('fa-minus-circle')
//     document.getElementById('i4').classList.add('fa-plus-circle')
//     document.getElementById('i4').classList.remove('fa-minus-circle')
//     document.getElementById('i3').classList.add('fa-plus-circle')
//     document.getElementById('i3').classList.remove('fa-minus-circle')
//     document.getElementById('i2').classList.add('fa-plus-circle')
//     document.getElementById('i2').classList.remove('fa-minus-circle')
//     document.getElementById('i1').classList.add('fa-plus-circle')
//     document.getElementById('i1').classList.remove('fa-minus-circle')
// })


area6 = document.querySelector('#arr11')
// observer1.observe(area6)
// console.log(area6.position().top)

// function getOffset(area6) {
//     const rect = area6.getBoundingClientRect();
//     return {
//       left: rect.left + window.scrollX,
//       top: rect.top + window.scrollY
//     };
//   }


// document.getElementById('center').addEventListener('mouseenter', ()=>{
//     console.log('mouse in')
//     document.getElementById('backhov').style.transform = 'scale(5)'
//     document.getElementById('backhov').style.transitionDuration = '0.5s'

// });

// document.getElementById('center').addEventListener('mouseleave', (event) => {
//     document.getElementById('backhov').setAttribute('style',`position: absolute;
//     height: 50vh;
//     width: 50vh;
//     border-radius: 50%;
//     margin: 22.2vh 37.8vw;
//     background: #62BEB7;
//     z-index: 1;
//     transition-duration : 0.5s`)
//     console.log('mouse out')
// });



const observer1 = new IntersectionObserver(entries1 => {

    //    console.log(entries)
    // console.log(entries1[0].intersectionRatio)
    if (entries1[0].isIntersecting) {
        setTimeout(() => {
            if (w > 900) {
                document.getElementById('comp5').style.transform = ' scale(0.85)'
            }
            else {
                document.getElementById('comp5').style.transform = 'scale(0.45)'
            }
            // translateX(25.4vw) translateY(-18vh)
        }, 0);
    }
    // else{
    //     setTimeout(() => {

    //         document.getElementById('comp5').style.transform = ' translateX(25.4vw) translateY(-18vh) scale(0)'
    //     }, 500);
    // }   



}
    // {
    //     threshold:0.5
    // }
)

observer1.observe(document.getElementById('comp5'));


const observer2 = new IntersectionObserver(entries2 => {

    //    console.log(entries)
    // console.log(entries2[0].intersectionRatio)
    if (entries2[0].isIntersecting) {
        setTimeout(() => {
            if (w > 900) {
                document.getElementById('comp4').style.transform = 'scale(0.85)'
            }
            else {
                document.getElementById('comp4').style.transform = 'scale(0.45)'
            }
            // translateX(35vw) translateY(-7vh) 
        }, 0);
    }
    // else{
    //     setTimeout(() => {

    //         document.getElementById('comp4').style.transform = 'translateX(35vw) translateY(-7vh) scale(0)'
    //     }, 1000);
    // }   



}
    // ,{
    //     threshold:0.5
    // }
)

observer2.observe(document.getElementById('comp4'));



const observer3 = new IntersectionObserver(entries3 => {

    //    console.log(entries)
    // console.log(entries3[0].intersectionRatio)
    if (entries3[0].isIntersecting) {
        setTimeout(() => {
            if (w > 900) {
                document.getElementById('comp3').style.transform = 'scale(0.85)'
            } else {
                document.getElementById('comp3').style.transform = 'scale(0.45)'
            }
            // translateX(40vw) 
        }, 0);
    }
    // else{
    //     setTimeout(() => {

    //         document.getElementById('comp3').style.transform = 'translateX(40vw) scale(0)'
    //     }, 1500);
    // }   



}, {
    threshold: 0.5
})

observer3.observe(document.getElementById('comp3'));




const observer4 = new IntersectionObserver(entries4 => {

    //    console.log(entries)
    // console.log(entries4[0].intersectionRatio)
    if (entries4[0].isIntersecting) {
        setTimeout(() => {
            if (w > 900) {
                document.getElementById('comp2').style.transform = 'scale(0.85)'
            } else {
                document.getElementById('comp2').style.transform = 'scale(0.45)'
            }
            // translateX(50vw) translateY(14vh) 
        }, 0);
    }
    // else{
    //     setTimeout(() => {

    //         document.getElementById('comp2').style.transform = 'translateX(50vw) translateY(15vh) scale(0)'
    //     }, 2000);
    // }   



}, {
    threshold: 0.5
})

observer4.observe(document.getElementById('comp2'));



const observer5 = new IntersectionObserver(entries5 => {

    //    console.log(entries)
    // console.log(entries5[0].intersectionRatio)
    if (entries5[0].isIntersecting) {
        if (w > 900) {
            document.getElementById('comp1').style.transform = 'scale(0.85)'
        } else {
            document.getElementById('comp1').style.transform = 'scale(0.45)'
        }
        //    translateX(60vw) translateY(30vh)
    }
    // else{
    //     setTimeout(() => { 
    //         document.getElementById('comp1').style.transform = 'translateX(60vw) translateY(30vh) scale(0)'
    //     }, 2500);
    // }   



}, {
    threshold: 0.5
})

observer5.observe(document.getElementById('comp1'));



document.getElementById('foot12').addEventListener('mouseenter', () => {
    document.getElementById('bottom2').style.width = '100%'

});



document.getElementById('foot12').addEventListener('mouseleave', () => {
    document.getElementById('bottom2').style.width = '10%'

});


// MOUSE HOVER ANIMATION CURSOR

function mouseBgHover(i) {
    // if (i == 1) {
    //     document.getElementById('box-shadow-div').style.backgroundColor = "white";
    // }
    // else {
    //     document.getElementById('box-shadow-div').style.backgroundColor = "#000000cb";
    // }
}




const footer = new IntersectionObserver(footer => {

    //    console.log(entries)
    if (footer[0].isIntersecting) {
        document.getElementById('arr12').style.display = 'flex'
    }
    else {
        document.getElementById('arr12').style.display = 'none'
    }
},
)

footer.observe(document.getElementById('arr11'));





let ar = 0;
const footer12 = new IntersectionObserver(footer => {

    //    console.log(entries)
    if (footer[0].isIntersecting) {
        document.getElementById('arr12').style.zIndex = '0'
        if (ar == 0) {
            document.getElementById('arr12').style.zIndex = '-1'
            ar++
        }
    }
    else {
        document.getElementById('arr12').style.zIndex = '-1'
    }
},
    {
        threshold: 1
    }
)

footer12.observe(document.getElementById('arr12'));















var magnets = document.querySelectorAll(".magnetic");
var strength = 50;

magnets.forEach((magnet) => {
    magnet.addEventListener("mousemove", moveMagnet);
    magnet.addEventListener("mouseout", function (event) {
        TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
    });
});

function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();

    //console.log(magnetButton, bounding)

    TweenMax.to(magnetButton, 1, {
        x:
            ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
            strength,
        y:
            ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
            strength,
        ease: Power4.easeOut
    });

    //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}



































function populate(arr, count, text, ids, dec) {




    const ImgArea = document.getElementById('photosarea');
    ImgArea.innerHTML = '';
    let a = 1;
    arr.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('imgdiv');
        div.setAttribute('data-aos', "fade-up");
        div.setAttribute('data-aos-duration', a * 300);
        const img = document.createElement('img');
        if (a == 3) {
            a = 1;
        }
        else {
            a++;
        }

        // console.log(item)
        img.setAttribute('src', './img/work/page1/' + item + '.png')
        ImgArea.appendChild(div);
        div.appendChild(img)
        // div.appendChild(document.createTextNode(text[count]))
        count++;
    })
    const div = document.createElement('div');
    // div.classList.add('bottom-text')
    // div.appendChild(document.createTextNode('and more ...'))
    ImgArea.appendChild(div)

}

populate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 0, ['Ruminatic- SaaS Wes ', 'Cake- SaaS Dashboard', 'Amarette- Watch Ecom Store', 'Botiko- Interiors Web Design', 'Saletion- Saas Web Design', 'Dappr- CRM Dashboard', 'Macron- Team Club Web Design', 'Mager- Arm Dashboard', 'MR- Interior Design Web', 'Branova- Air Purifier Web Design', 'Sooth- Organic Creams Web Design', 'Phantom- Discord Bot Design', 'Artchitec- Architecture Studio Web Design', 'VK BYGG- Construction Web Design', 'Mustang Garage- Car Forum Web Design', 'Creatsy- Mask Ecom Store Design', 'Datra- Marketing Web Design', 'Acura- Management Dashboard Design '], 'l1', -1)
var num = 0;


function left() {

    const testimonials = [ "After an extensive search we settled on Raw Canvas. We couldn’t be happier with the results. We have no reservations about using them again.",
        "I Was Most Appreciative Of Their Ability To Provide Us With Designers For Specific Needs. Raw Cavas Studio Was Transparent About Deliverables And Any Challenges The Team Was Facing. They Perfectly Met My Expectations — Working With Them Felt Like An Extension Of My In-House Team.",

        " Raw Canvas team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job! ", "After an extensive search we settled on Raw Canvas. We couldn’t be happier with the results. We have no reservations about using them again."
   ]

    const name1 = ['Pranav Sharma','Södra Jumkils Fiberförening', 'Steffen Konrath']
    const post = ['Founding Partner -</span> Woodstock VC Fund','CEO of</span> Glance Tech Inc, Sweden', 'CEO & Founder of</span> Evai-Intelligence']


    var test1 = document.getElementById('test-1')
    var test11 = document.getElementById('arr6_1_p')
    var test12 = document.getElementById('arr6_1_p1')
    test1.style.opacity = 0;
    setTimeout(() => {  
        if (num == 0) {
            num = testimonials.length-1;
        }
        num--;
        test1.innerHTML = testimonials[num]
        test11.innerHTML = name1[num]
        test12.innerHTML = post[num]
        test1.style.opacity = 1;
    }, 500);
    test11.style.opacity = 0;
    setTimeout(() => {
        test11.style.opacity = 1;
    }, 500);
    test12.style.opacity = 0;
    setTimeout(() => {
        test12.style.opacity = 1;
    }, 500);

}
var s=0;
function right() {

    const testimonials = ["I Was Most Appreciative Of Their Ability To Provide Us With Designers For Specific Needs. Raw Cavas Studio Was Transparent About Deliverables And Any Challenges The Team Was Facing. They Perfectly Met My Expectations — Working With Them Felt Like An Extension Of My In-House Team.",

    " Raw Canvas team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job! ", "After an extensive search we settled on Raw Canvas. We couldn’t be happier with the results. We have no reservations about using them again.",
"After an extensive search we settled on Raw Canvas. We couldn’t be happier with the results. We have no reservations about using them again."]
const name1 = ['Södra Jumkils Fiberförening', 'Steffen Konrath','Pranav Sharma']
const post = ['CEO of</span> Glance Tech Inc, Sweden', 'CEO & Founder of</span> Evai-Intelligence','Founding Partner -</span> Woodstock VC Fund']


    var test1 = document.getElementById('test-1')
    var test11 = document.getElementById('arr6_1_p')
    var test12 = document.getElementById('arr6_1_p1')
    test1.style.opacity = 0;
   
    setTimeout(() => {
        if (num == testimonials.length - 2 ) {
         
            num = -1;
           
        }
        if(num==0 && s==0){
            num=-1;
            s++;
        }
        num++;
        test1.innerHTML = testimonials[num]
        test11.innerHTML = name1[num]
        test12.innerHTML = post[num]
        test1.style.opacity = 1;
    }, 500);
    test11.style.opacity = 0;
    setTimeout(() => {
        test11.style.opacity = 1;
    }, 500);
    test12.style.opacity = 0;
    setTimeout(() => {
        test12.style.opacity = 1;
    }, 500);
}


// function console1(){

//     console.log(window.innerHeight )
// }
// setInterval(() => {

//     console1()
// }, 1000);


// document.getElementsByTagName('footer')[0].style.transitionDuration = '0.1s'
function myFunction() {
    console.log('this is the footer function')
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var bottom = scrolled - 95.74
    // var bottom = scrolled-90.74

    if (bottom >= 0) {
        document.getElementById('arr12').style.transform = 'translateY(' + (60 - (bottom * 14.1)) + '%)';

    }
    console.log(bottom)
}

window.onscroll = function () { myFunction() };


function fullWidth(a) {
    if (a === 1)
        document.getElementById('email-bottm-2').style.width = "100%";
    else if (a === 2)
        document.getElementById('email-bottm-22').style.width = "10%";
    else if (a === 3)
        document.getElementById('email-bottm-22').style.width = "100%";
    else
        document.getElementById('email-bottm-2').style.width = "10%";
}

function scrolltop() {
    // window.location.reload();
    document.getElementByClassName('scroll-content')[0].style.transform = 'translate3d(0px, 0px, 0px);';
}
