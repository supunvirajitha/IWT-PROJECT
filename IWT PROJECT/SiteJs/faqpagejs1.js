const accordionItemeHaders = document.querySelectAll(".accodion-item-header");

accordionItemHeaders.forEach(accordionItemHeader =>{
accordionItemHeader.addEventListener("click",event =>{
	accordionItemHeader.classList.toggle("active");
});
});
function loadData(name){
if (name=='viewAcc'){
	window.location.href = "login.html"
}
else if (name=='viewcart'){
	window.location.href = "product page.html"
}
}
