const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

function loadData(name){
if (name=='btn1'){
	window.location.href = "GARMENT AND APPARELS.html"
}
else if (name=='btn2'){
	window.location.href = "household.html"
}
else if (name=='btn3'){
	window.location.href = "product page.html"
}
else if (name=='btn4'){
	window.location.href = "product page.html"
}
else if (name=='viewAcc'){
	window.location.href = "login.html"
}
else if (name=='viewcart'){
	window.location.href = "product page.html"
}
else if (name=='Add'){
	window.location.href = "buyItems.html"
}

}