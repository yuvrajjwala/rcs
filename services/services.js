
//Background Animation...
var width = window.innerWidth;
if(width<=900){
    document.getElementsByClassName('container')[0].innerHTML = `


    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="317.29" height="313.939" viewBox="0 0 317.29 313.939" id='blob'>
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="1" stop-color="gray"/>
          </linearGradient>
          <clipPath id="clip-path">
            <rect id="Rectangle_2849" data-name="Rectangle 2849" width="317.29" height="313.939" fill="url(#linear-gradient)"/>
          </clipPath>
          <linearGradient id="linear-gradient-2" x1="0.5" y1="0.331" x2="0.5" y2="1.169" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#c9f9b8"/>
            <stop offset="1" stop-color="#62be90"/>
          </linearGradient>
        </defs>
        <g id="Group_10682" data-name="Group 10682" opacity="0.998">
          <g id="Group_10681" data-name="Group 10681" transform="translate(0 0)" clip-path="url(#clip-path)">
            <path id="Path_4955" data-name="Path 4955" d="M129.039,50.651C108.821,75.019,117.573,86.889,92.907,111.6,66.743,137.819,47.1,134.278,21.9,165.015,11.773,177.369-.249,192.473.536,213.086c1.007,26.421,22.357,43.538,25.763,46.185,22.4,17.406,39.707,8.054,78.547,15.081,63.514,11.491,75.925,47.358,114.364,38.331,27.911-6.555,43.224-30.436,44.615-32.675,15.752-25.371,2.086-42.231,10.054-79.489,9.562-44.713,34.479-44.91,41.787-82,7.1-36.019-6.645-85.335-41.787-106.824-46.743-28.583-114.5,2.387-144.84,38.959" transform="translate(-0.343 -0.343)" fill="url(#linear-gradient-2)"/>
            <path id="Path_4956" data-name="Path 4956" d="M129.039,50.651C108.821,75.019,117.573,86.889,92.907,111.6,66.743,137.819,47.1,134.278,21.9,165.015,11.773,177.369-.249,192.473.536,213.086c1.007,26.421,22.357,43.538,25.763,46.185,22.4,17.406,39.707,8.054,78.547,15.081,63.514,11.491,75.925,47.358,114.364,38.331,27.911-6.555,43.224-30.436,44.615-32.675,15.752-25.371,2.086-42.231,10.054-79.489,9.562-44.713,34.479-44.91,41.787-82,7.1-36.019-6.645-85.335-41.787-106.824C227.135-16.891,159.381,14.079,129.039,50.651Z" transform="translate(-0.343 -0.343)" fill="none"/>
          </g>
        </g>
      </svg>
      
      `
      document.getElementsByClassName('container')[0].style.display = 'block'
    document.getElementById('blob').style.display = 'block'
    document.getElementById('blob').style.marginTop = '-5%'
    document.getElementById('blob').style.marginLeft = '34%'
    // document.getElementById('blob').style.scale = '4%'
}
else{
    console.log('yesssssssssssssssssssssss')
    var ele = Math.floor(Math.random() * 5);
    var anim = Math.floor(Math.random() * 5);
    const root = document.querySelector(':root');
    const e = document.getElementById('_0' + ele);
    const e1 = document.getElementById('_00' + ele);
    const e2 = document.getElementById('_000' + ele);
    const e3 = document.getElementById('_0000' + ele);
    var es = getComputedStyle(root);
    
    //variable changing for initial and final position 
    root.style.setProperty('--pos_x_init', Math.floor(Math.random() * (1000 - (-300) + 1) + (-300)) + 'px');
    root.style.setProperty('--pos_y_init', Math.floor(Math.random() * (900 - (950) + 1) + (950)) + 'px');
    root.style.setProperty('--pos_x_final', 'calc(50vw - 420px)');
    root.style.setProperty('--pos_y_final', '-300px');
    
    //animation addition
    e.setAttribute('style', 'display: block;position: relative;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';animation : anim0 1s ease-in-out; z-index:2;transform: scale(0.85);')
    e1.setAttribute('style', 'display: block ; position: absolute;top:-450px;left:calc(50vw - 500px);  height: 1000px;  width: 1000px; animation : anim1 2s ease-in-out ;')
    e2.setAttribute('style', 'display: block ; position: absolute;top:-450px;left:calc(50vw - 500px);  height: 1000px;  width: 1000px; animation : anim2 2s ease-in-out ;')
    e3.setAttribute('style', 'display: block ; position: absolute;top:-500px;left:calc(50vw - 500px);  height: 1000px;  width: 1000px;animation : anim3 2s ease-in-out ;')
    
    
    setTimeout(() => {
        e1.style.transform = 'scale(0.9)';
        e2.style.transform = 'scale(1)';
        e3.style.transform = 'scale(1.25)';
    }, 2000);

}










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



document.getElementById('foot12').addEventListener('mouseenter', () => {
    document.getElementById('bottom2').style.width = '100%'

});



document.getElementById('foot12').addEventListener('mouseleave', () => {
    document.getElementById('bottom2').style.width = '10%'

});





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






const footer = new IntersectionObserver(footer => {

    //    console.log(entries)
    if (footer[0].isIntersecting) {
        document.getElementById('arr12').style.display = 'flex'
    }
    else {
        document.getElementById('arr12').style.display = 'none'
    }
}
)

footer.observe(document.getElementById('arr11'));



function myFunction() {
    console.log('this is the footer function')
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var bottom = scrolled - 89.89
    // var bottom = scrolled-90.74

    if (bottom >= 0) {
        document.getElementById('arr12').style.transform = 'translateY(' + (45.5 - (bottom * 4.5)) + '%)';

    }
    console.log(bottom)
}

window.onscroll = function () { myFunction() };




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

