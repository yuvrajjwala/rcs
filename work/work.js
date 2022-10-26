
//Background Animation...

function set(left1, top2, rotate1) {
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
    root.style.setProperty('--pos_x_final', left1 + 'px');
    root.style.setProperty('--pos_y_final', top2 + 'px');

    //animation addition

    if (rotate1 == 178) {
        e.setAttribute('style', 'display: block;position: relative;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';animation : anim0 1s ease-in-out; z-index:2;transform: scale(0.8); rotate:' + rotate1 + 'deg')
        e1.setAttribute('style', 'display: block ; position: absolute;top:' + (top2-5) + 'px;left:' + (left1 + 80) + 'px;  animation : anim1 2s ease-in-out ; rotate:' + rotate1 + 'deg')
        e2.setAttribute('style', 'display: block ; position: absolute;top:' + (top2-100) + 'px;left:' + (left1 + 150) + 'px;  animation : anim2 2s ease-in-out ; rotate:' + rotate1 + 'deg')
        e3.setAttribute('style', 'display: block ; position: absolute;top:' + (top2-150) + 'px;left:' + (left1 + 181) + 'px; animation : anim3 2s ease-in-out ; rotate:' + rotate1 + 'deg')
    }
    else if (rotate1 == -48) {
        e.setAttribute('style', 'display: block;position: relative;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';animation : anim0 1s ease-in-out; z-index:2;transform: scale(0.8); rotate:' + rotate1 + 'deg')
        e1.setAttribute('style', 'display: block ; position: absolute;top:' + (top2+100) + 'px;left:' + (left1 + 80) + 'px;  animation : anim1 2s ease-in-out ; rotate:' + rotate1 + 'deg')
        e2.setAttribute('style', 'display: block ; position: absolute;top:' + (top2+130) + 'px;left:' + (left1 + 150) + 'px;  animation : anim2 2s ease-in-out ; rotate:' + rotate1 + 'deg')
        e3.setAttribute('style', 'display: block ; position: absolute;top:' + (top2+150) + 'px;left:' + (left1 + 181) + 'px; animation : anim3 2s ease-in-out ; rotate:' + rotate1 + 'deg')
    }
    else {

        e.setAttribute('style', 'display: block;position: relative;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';animation : anim0 1s ease-in-out; z-index:2;transform: scale(0.8); rotate:' + rotate1 + 'deg')
        e1.setAttribute('style', 'display: block ; position: absolute;top:' + (top2 + 140) + 'px;left:' + (left1 + 130) + 'px;  animation : anim1 2s ease-in-out ; rotate:' + rotate1 + 'deg')
        e2.setAttribute('style', 'display: block ; position: absolute;top:' + (top2 + 180) + 'px;left:' + (left1 + 180) + 'px;  animation : anim2 2s ease-in-out ; rotate:' + rotate1 + 'deg')
        e3.setAttribute('style', 'display: block ; position: absolute;top:' + (top2 + 221) + 'px;left:' + (left1 + 221) + 'px; animation : anim3 2s ease-in-out ; rotate:' + rotate1 + 'deg')

    }






    setTimeout(() => {
        e1.style.transform = 'scale(1.15)';
        e2.style.transform = 'scale(1.5)';
        e3.style.transform = 'scale(1.75)';
    }, 2000);
    return
}

// setTimeout(() => {
//    set()
// }, 10);






// function svg(num){
//     document.getElementsByClassName('container')[0].outerHTML = innerhtml[num]
//     console.log(innerhtml[0])
// }

// svg(0)







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
    // l66.classList.remove('accordion');
    document.getElementById('i1').classList.toggle('fa-plus-circle')
    document.getElementById('i1').classList.toggle('fa-minus-circle')
    document.getElementById('i5').classList.add('fa-plus-circle')
    document.getElementById('i5').classList.remove('fa-minus-circle')
    document.getElementById('i4').classList.add('fa-plus-circle')
    document.getElementById('i4').classList.remove('fa-minus-circle')
    document.getElementById('i3').classList.add('fa-plus-circle')
    document.getElementById('i3').classList.remove('fa-minus-circle')
    document.getElementById('i2').classList.add('fa-plus-circle')
    document.getElementById('i2').classList.remove('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
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
    document.getElementById('i2').classList.toggle('fa-plus-circle')
    document.getElementById('i2').classList.toggle('fa-minus-circle')
    document.getElementById('i5').classList.add('fa-plus-circle')
    document.getElementById('i5').classList.remove('fa-minus-circle')
    document.getElementById('i4').classList.add('fa-plus-circle')
    document.getElementById('i4').classList.remove('fa-minus-circle')
    document.getElementById('i3').classList.add('fa-plus-circle')
    document.getElementById('i3').classList.remove('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
    document.getElementById('i1').classList.add('fa-plus-circle')
    document.getElementById('i1').classList.remove('fa-minus-circle')
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
    document.getElementById('i3').classList.toggle('fa-plus-circle')
    document.getElementById('i3').classList.toggle('fa-minus-circle')
    document.getElementById('i5').classList.add('fa-plus-circle')
    document.getElementById('i5').classList.remove('fa-minus-circle')
    document.getElementById('i4').classList.add('fa-plus-circle')
    document.getElementById('i4').classList.remove('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
    document.getElementById('i2').classList.add('fa-plus-circle')
    document.getElementById('i2').classList.remove('fa-minus-circle')
    document.getElementById('i1').classList.add('fa-plus-circle')
    document.getElementById('i1').classList.remove('fa-minus-circle')
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
    document.getElementById('i4').classList.toggle('fa-plus-circle')
    document.getElementById('i4').classList.toggle('fa-minus-circle')
    document.getElementById('i5').classList.add('fa-plus-circle')
    document.getElementById('i5').classList.remove('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
    document.getElementById('i3').classList.add('fa-plus-circle')
    document.getElementById('i3').classList.remove('fa-minus-circle')
    document.getElementById('i2').classList.add('fa-plus-circle')
    document.getElementById('i2').classList.remove('fa-minus-circle')
    document.getElementById('i1').classList.add('fa-plus-circle')
    document.getElementById('i1').classList.remove('fa-minus-circle')
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
    document.getElementById('i5').classList.toggle('fa-plus-circle')
    document.getElementById('i5').classList.toggle('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
    document.getElementById('i4').classList.add('fa-plus-circle')
    document.getElementById('i4').classList.remove('fa-minus-circle')
    document.getElementById('i3').classList.add('fa-plus-circle')
    document.getElementById('i3').classList.remove('fa-minus-circle')
    document.getElementById('i2').classList.add('fa-plus-circle')
    document.getElementById('i2').classList.remove('fa-minus-circle')
    document.getElementById('i1').classList.add('fa-plus-circle')
    document.getElementById('i1').classList.remove('fa-minus-circle')
})



document.getElementById('foot12').addEventListener('mouseenter', () => {
    document.getElementById('bottom2').style.width = '100%'

});



document.getElementById('foot12').addEventListener('mouseleave', () => {
    document.getElementById('bottom2').style.width = '10%'

});





// Photos Population

function populate(arr, count, text, ids, dec, numb, numb1, numb2, rotate1) {

    function svg() {
        document.getElementsByClassName('container')[0].outerHTML = innerhtml[numb]
        console.log(innerhtml[numb])
        set(numb1, numb2, rotate1)
        return
    }





    const ImgArea = document.getElementById('photosarea');
    ImgArea.innerHTML = '';


    document.querySelectorAll('.heading1 ul li').forEach(items => {
        items.classList.remove('active');
        // items.style.borderBottom = 'none';
        items.style.color = 'black';
        items.style.opacity = '0.5';
    })




    document.getElementById(ids).classList.add('active')


    let a = 1;
    arr.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('imgdiv');
        const img = document.createElement('img');
        // console.log(item)
        div.setAttribute('data-aos',"fade-up");
        div.setAttribute('data-aos-duration',a*300);
        if(a==3){
            a=1;   
        }
        else{
            a++;
        }
        img.setAttribute('src', '../img/work/page1/' + item + '.png')
        ImgArea.appendChild(div);
        div.appendChild(img)
        div.appendChild(document.createTextNode(text[count]))
        count++;
    })
    const div = document.createElement('div');
    div.classList.add('bottom-text')
    // div.appendChild(document.createTextNode('and more ...'))
    ImgArea.appendChild(div)

    svg()


    if (dec == 0) {
        document.querySelector('body').style.backgroundColor = '#1C171D';
        document.getElementById('logo').style.filter = 'invert(1)';
        document.getElementById('nav').style.color = 'white';
        document.getElementById('_1').style.backgroundColor = 'white';
        document.getElementById('_2').style.backgroundColor = 'white';
        document.querySelector('.heading1 div').style.color = 'white';
        document.getElementsByClassName('active')[0].style.color = '#CA3BFA';
        // document.getElementsByClassName('active')[0].style.borderBottom = '2px solid #CA3BFA';
        document.getElementsByClassName('container')[0].style.opacity = '0.9';
        document.getElementsByClassName('container')[0].style.filter = 'brightness(1.35)';
        document.getElementsByClassName('bottom-text')[0].style.color = 'white';
        document.querySelectorAll('.imgdiv').forEach(ele => {
            ele.style.color = 'white';
        })
        console.log('nft');

        for (let i = 0; i <= 4; i++) {
            console.log(i);
            document.querySelector('#_00' + i + ' g path').setAttribute('stroke', '#1C171D')
            document.querySelector('#_000' + i + ' g path').setAttribute('stroke', '#1C171D')
            document.querySelector('#_0000' + i + ' g path').setAttribute('stroke', '#1C171D')
            document.querySelectorAll('#_0' + i + ' g defs linearGradient stop')[0].style.stopColor = '#40C9FC'
            document.querySelectorAll('#_0' + i + ' g defs linearGradient stop')[1].style.stopColor = '#DE26FA'
            document.querySelector('#_0' + i + ' g defs linearGradient').setAttribute('x2', '110%')
            document.querySelector('#_0' + i + ' g defs linearGradient').setAttribute('y2', '0%')
            document.getElementById('l' + (i + 1)).style.background = 'transparent';
            document.getElementById('l' + (i + 1)).style.color = 'white';
        }
        document.getElementById(ids).style.background = 'linear-gradient(to right, #52B7FC, #CF36FB)';

        document.getElementById('ham').addEventListener('mouseenter', () => {
            document.getElementById('_1').style.backgroundColor = 'white'
            document.getElementById('_2').style.backgroundColor = 'white'
        })
        document.getElementById('ham').addEventListener('mouseleave', () => {
            document.getElementById('_1').style.backgroundColor = 'white'
            document.getElementById('_2').style.backgroundColor = 'white'
        })



    } else {
        document.querySelector('body').style.backgroundColor = 'transparent';
        document.getElementById('logo').style.filter = 'invert(0)';
        document.getElementById('nav').style.color = 'black';
        document.getElementById('_1').style.backgroundColor = 'black';
        document.getElementById('_2').style.backgroundColor = 'black';
        document.getElementsByClassName('active')[0].style.color = 'black';
        document.getElementsByClassName('active')[0].style.opacity = '1';
        // document.getElementsByClassName('active')[0].style.borderBottom = '2px solid black';
        document.querySelector('.heading1 div').style.color = 'black';
        document.getElementsByClassName('container')[0].style.opacity = '1';
        document.getElementsByClassName('container')[0].style.filter = 'brightness(1)';
        document.getElementsByClassName('bottom-text')[0].style.color = '#181919';
        document.querySelectorAll('.imgdiv').forEach(ele => {
            ele.style.color = '#181919';
        })
        for (let i = 0; i <= 4; i++) {
            document.querySelector('#_00' + i + ' g path').setAttribute('stroke', 'rgba(0,0,0,0.1)')
            document.querySelector('#_000' + i + ' g path').setAttribute('stroke', 'rgba(0,0,0,0.1)')
            document.querySelector('#_0000' + i + ' g path').setAttribute('stroke', 'rgba(0,0,0,0.1)')
            document.querySelectorAll('#_0' + i + ' g defs linearGradient stop')[0].style.stopColor = 'rgb(194, 229, 156)'
            document.querySelectorAll('#_0' + i + ' g defs linearGradient stop')[1].style.stopColor = 'rgb(98, 190, 183)'
            document.querySelector('#_0' + i + ' g defs linearGradient').setAttribute('x2', '0%')
            document.getElementById('l' + (i + 1)).style.background = 'none';
            document.getElementById('l' + (i + 1)).style.color = 'black';
            document.querySelector('#_0' + i + ' g defs linearGradient').setAttribute('y2', '100%')
        }
        document.getElementById(ids).style.background = 'linear-gradient(to right, #C9F9B8, #62BEB7)';
        document.getElementById('ham').addEventListener('mouseenter', () => {
            document.getElementById('_1').style.backgroundColor = 'white'
            document.getElementById('_2').style.backgroundColor = 'white'
        })
        document.getElementById('ham').addEventListener('mouseleave', () => {
            document.getElementById('_1').style.backgroundColor = 'black'
            document.getElementById('_2').style.backgroundColor = 'black'
        })
    }


}





const innerhtml = [
    `<div class="container">
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient)"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656;
                
                        M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_000">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0000">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00000">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_01">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient1)"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656;
                
                        M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_001">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0001">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00001">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_02">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient2)"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656;
                
                        M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_002">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0002">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00002">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_03">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient3)"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656;
                
                        M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_003">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0003">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00003">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_04">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient4)"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656;
                
                        M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_004">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0004">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00004">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M1.576,168.656c-15.313,74.38,85.734,189.591,95.1,200.094,13.661,15.324,49.949,55.364,101.48,80.716C348.952,523.653,558.335,436.659,673,290.747c45.617-58.046,106.925-136.058,83.609-196.7C692.788-71.96,36.3-.026,1.576,168.656"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    </div>`,








































    `<div class="container">
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient)"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M50.334,103.478C-.787,167.536-.359,238.882.081,359.821c2.2,194.613,71,177.171,130.164,239.572A595.815,695.815,100,0,0,265.353,655.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,588.745,622.07,519.947c23.55-66.977,197.706-249.45-32.129-379.581C476.827-22.467,591.044.443,262.882,10.915,217.9,9.462,205.263,22.118,50.334,103.478;
                
                        M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_000">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0000">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00000">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_01">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient1)"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M50.334,103.478C-.787,167.536-.359,238.882.081,359.821c2.2,194.613,71,177.171,130.164,239.572A595.815,695.815,100,0,0,265.353,655.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,588.745,622.07,519.947c23.55-66.977,197.706-249.45-32.129-379.581C476.827-22.467,591.044.443,262.882,10.915,217.9,9.462,205.263,22.118,50.334,103.478;
                
                        M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_001">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0001">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00001">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_02">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient2)"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M50.334,103.478C-.787,167.536-.359,238.882.081,359.821c2.2,194.613,71,177.171,130.164,239.572A595.815,695.815,100,0,0,265.353,655.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,588.745,622.07,519.947c23.55-66.977,197.706-249.45-32.129-379.581C476.827-22.467,591.044.443,262.882,10.915,217.9,9.462,205.263,22.118,50.334,103.478;
                
                        M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_002">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0002">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00002">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_03">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient3)"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M50.334,103.478C-.787,167.536-.359,238.882.081,359.821c2.2,194.613,71,177.171,130.164,239.572A595.815,695.815,100,0,0,265.353,655.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,588.745,622.07,519.947c23.55-66.977,197.706-249.45-32.129-379.581C476.827-22.467,591.044.443,262.882,10.915,217.9,9.462,205.263,22.118,50.334,103.478;
                
                        M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_003">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0003">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00003">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    
    <div>
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_04">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <defs>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                        <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                    </linearGradient>
                </defs>
                <path class="blob" fill="url(#gradient4)"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478">
                    <animate attributeName="d" dur="0.1s" repeatCount="1"
                        values="M50.334,103.478C-.787,167.536-.359,238.882.081,359.821c2.2,194.613,71,177.171,130.164,239.572A595.815,695.815,100,0,0,265.353,655.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,588.745,622.07,519.947c23.55-66.977,197.706-249.45-32.129-379.581C476.827-22.467,591.044.443,262.882,10.915,217.9,9.462,205.263,22.118,50.334,103.478;
                
                        M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478" />
    
                </path>
    
            </g>
        </svg>
    
    
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_004">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0004">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00004">
            <g transform="translate(131.05635833740234, -3.5839157104492188)">
                <path class="blob"
                    d="M50.334,103.478C-.787,167.536-.359,238.882.081,259.821c2.2,104.613,71,177.171,130.164,239.572A595.815,595.815,0,0,0,265.353,605.956c74.971,43.176,140.305,80.8,205.957,65.337C562.332,649.854,601.4,538.745,622.07,479.947c23.55-66.977,87.706-249.45-32.129-379.581C476.827-22.467,291.044.443,262.882,3.915,217.9,9.462,115.263,22.118,50.334,103.478"
                    fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
            </g>
        </svg>
    
    
    
    
    
    
    
    </div>
    
    
    </div>`,

































    `<div class="container">


<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient)"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M61.458,127.936C-.961,205.48-.439,291.846.1,397.193,2.782,643.828,9.09,600.515,199.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,1200.993,274.9,140.735,29.449,61.458,127.936;
            
                    M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_000">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0000">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00000">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_01">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient1)"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M61.458,127.936C-.961,205.48-.439,291.846.1,397.193,2.782,643.828,9.09,600.515,199.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,1200.993,274.9,140.735,29.449,61.458,127.936;
            
                    M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_001">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0001">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00001">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_02">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient2)"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M61.458,127.936C-.961,205.48-.439,291.846.1,397.193,2.782,643.828,9.09,600.515,199.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,1200.993,274.9,140.735,29.449,61.458,127.936;
            
                    M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_002">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0002">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00002">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_03">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient3)"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M61.458,127.936C-.961,205.48-.439,291.846.1,397.193,2.782,643.828,9.09,600.515,199.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,1200.993,274.9,140.735,29.449,61.458,127.936;
            
                    M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_003">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0003">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00003">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_04">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient4)"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M61.458,127.936C-.961,205.48-.439,291.846.1,397.193,2.782,643.828,9.09,600.515,199.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,1200.993,274.9,140.735,29.449,61.458,127.936;
            
                    M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_004">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0004">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00004">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M61.458,127.936C-.961,205.48-.439,291.846.1,317.193,2.782,443.828,59.09,540.515,159.028,607.2c66.721,46.386,96.979-12.123,198.121,45.031C448.689,704.5,495.306,834.006,575.467,815.287,686.6,789.334,734.3,654.835,759.543,583.659,788.3,502.582,866.632,281.7,720.314,124.17,582.2-24.521,434.246,135.185,325.392,149.923,200.993,174.9,140.735,29.449,61.458,127.936"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>


</div>`,






































































    `<div class="container">
    
    
<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient)"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M1.854,279.911c-18.012-67.635,10.846-172.4,211.86-191.248,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,523.669,111.645,558.55,144.325,153.658,152.782,125.773,123.72,58.347,178.864C814.9,698.707,142.7,433.3,1.854,279.911;
            
                    M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_000">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0000">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00000">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_01">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient1)"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M1.854,279.911c-18.012-67.635,10.846-172.4,211.86-191.248,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,523.669,111.645,558.55,144.325,153.658,152.782,125.773,123.72,58.347,178.864C814.9,698.707,142.7,433.3,1.854,279.911;
            
                    M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_001">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0001">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00001">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_02">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient2)"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M1.854,279.911c-18.012-67.635,10.846-172.4,211.86-191.248,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,523.669,111.645,558.55,144.325,153.658,152.782,125.773,123.72,58.347,178.864C814.9,698.707,142.7,433.3,1.854,279.911;
            
                    M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_002">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0002">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00002">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_03">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient3)"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M1.854,279.911c-18.012-67.635,10.846-172.4,211.86-191.248,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,523.669,111.645,558.55,144.325,153.658,152.782,125.773,123.72,58.347,178.864C814.9,698.707,142.7,433.3,1.854,279.911;
            
                    M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_003">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0003">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00003">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_04">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient4)"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M1.854,279.911c-18.012-67.635,10.846-172.4,211.86-191.248,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,523.669,111.645,558.55,144.325,153.658,152.782,125.773,123.72,58.347,178.864C814.9,698.707,142.7,433.3,1.854,279.911;
            
                    M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_004">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0004">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00004">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>


</div>`,













































































    `<div class="container">
    
    
<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient)"
                d="M1.854,279.911c-18.012-67.635,100.846-172.4,111.86-181.948,16.07-13.934,58.753-50.344,119.368-73.4,177.379-67.46,423.669,11.645,558.55,144.325,53.658,52.782,125.773,123.72,98.347,178.864C814.9,498.707,42.7,433.3,1.854,279.911">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M.914,343.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,82.684-59.99,24.572-65.288,89.326-132.857,24.648-185.174C576.519,362.435,851.342,292.777,783.255,185.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,224.87.914,343.969
                    ;
            
                    M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_000">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0000">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00000">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_01">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient1)"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                ">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M.914,343.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,82.684-59.99,24.572-65.288,89.326-132.857,24.648-185.174C576.519,362.435,851.342,292.777,783.255,185.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,224.87.914,343.969
                    ;
            
                    M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_001">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0001">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00001">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_02">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient2)"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                ">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M.914,343.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,82.684-59.99,24.572-65.288,89.326-132.857,24.648-185.174C576.519,362.435,851.342,292.777,783.255,185.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,224.87.914,343.969
                    ;
            
                    M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_002">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0002">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00002">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_03">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient3)"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                ">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M.914,343.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,82.684-59.99,24.572-65.288,89.326-132.857,24.648-185.174C576.519,362.435,851.342,292.777,783.255,185.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,224.87.914,343.969
                    ;
            
                    M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_003">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0003">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00003">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>



<div>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_04">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <defs>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(194, 229, 156);"></stop>
                    <stop offset="100%" style="stop-color: rgb(98, 190, 183);"></stop>
                </linearGradient>
            </defs>
            <path class="blob" fill="url(#gradient4)"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                ">
                <animate attributeName="d" dur="0.1s" repeatCount="1"
                    values="M.914,343.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,82.684-59.99,24.572-65.288,89.326-132.857,24.648-185.174C576.519,362.435,851.342,292.777,783.255,185.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,224.87.914,343.969
                    ;
            
                    M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
" />

            </path>

        </g>
    </svg>



    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_004">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969"
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_0004">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="1146.633" height="1145.853" viewBox="0 0 1146.633 1145.853" id="_00004">
        <g transform="translate(131.05635833740234, -3.5839157104492188)">
            <path class="blob"
                d="M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969
                "
                fill="none" stroke-width="0.5px" stroke="rgba(0,0,0,0.1)"></path>
        </g>
    </svg>







</div>


</div>`]












populate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 0, ['Ruminatic- SaaS Wes ', 'Cake- SaaS Dashboard', 'Amarette- Watch Ecom Store', 'Botiko- Interiors Web Design', 'Saletion- Saas Web Design', 'Dappr- CRM Dashboard', 'Macron- Team Club Web Design', 'Mager- Arm Dashboard', 'MR- Interior Design Web', 'Branova- Air Purifier Web Design', 'Sooth- Organic Creams Web Design', 'Phantom- Discord Bot Design', 'Artchitec- Architecture Studio Web Design', 'VK BYGG- Construction Web Design', 'Mustang Garage- Car Forum Web Design', 'Creatsy- Mask Ecom Store Design', 'Datra- Marketing Web Design', 'Acura- Management Dashboard Design '], 'l1', -1, 0, 550, -140, 0)





// M.914,243.969c-7.151,56.763,29.154,103.645,57.862,140.716,78.955,101.958,162.1,92.978,239.886,188.856,68.722,84.7,39.074,135.146,122.349,166.925,38.974,14.873,104.465,26.338,154.906,8.6,45.3-15.931,58.292-48.323,62.684-59.99,24.572-65.288,29.326-132.857,4.648-185.174C576.519,362.435,831.342,292.777,783.255,155.1,753.73,70.562,595.192,9.508,456.576,1.049,219.172-13.437,15.918,124.87.914,243.969







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

