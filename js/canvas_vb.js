document.addEventListener('DOMContentLoaded', function(){ 
})

var canvas = document.getElementById('c1');
	var ctx = canvas.getContext('2d');


function checklo(elem) {

	ctx.beginPath();

	var obj1 = elem;
	var list = document.getElementById('modInfo__list_first');
	console.log(elem.getAttribute("property") +"");


	var obj3 = list.querySelector( 'a[property="' + elem.getAttribute("property") + '"]' );
	console.log(obj3.getAttribute("property") +"");	

	obj3.classList.add("active");


	var obj2 = document.getElementById('point-border'); // берем интересующий элемент  

	ctx.strokeStyle = "black";
	ctx.lineWidth = "2";
	ctx.lineCap = "round";
	ctx.moveTo( (obj1.offsetLeft + 10), (obj1.offsetTop + 10));
	ctx.lineTo((obj2.offsetLeft + 10), (obj1.offsetTop + 10));
	ctx.stroke();

	ctx.moveTo( (obj2.offsetLeft + 10), (obj1.offsetTop + 10));
	ctx.lineTo((obj2.offsetLeft + 10), (list.offsetTop + obj3.offsetTop + 15));
	ctx.stroke();

	ctx.moveTo( (obj2.offsetLeft + 10), (list.offsetTop + obj3.offsetTop + 15));
	ctx.lineTo((list.offsetLeft + obj3.offsetLeft + 15), (list.offsetTop + obj3.offsetTop + 15));
	ctx.stroke();

}

function checklo_link(elem) {

	ctx.beginPath();

	var obj1 = document.getElementById('modal-box-wrap')
	.querySelector( 'div[property="' + elem.getAttribute("property") + '"]' );
	var list = document.getElementById('modInfo__list_first');
	console.log(elem.getAttribute("property") +"");


	var obj3 = list.querySelector( 'a[property="' + elem.getAttribute("property") + '"]' );
	console.log(obj3.getAttribute("property") +"");	


	var obj2 = document.getElementById('point-border'); // берем интересующий элемент  

	ctx.strokeStyle = "black";
	ctx.lineWidth = "2";
	ctx.lineCap = "round";

	ctx.moveTo((list.offsetLeft + obj3.offsetLeft + 15), (list.offsetTop + obj3.offsetTop + 15));
	ctx.lineTo( (obj2.offsetLeft + 10), (list.offsetTop + obj3.offsetTop + 15));
	ctx.stroke();

	ctx.moveTo( (obj2.offsetLeft + 10), (list.offsetTop + obj3.offsetTop + 15));
	ctx.lineTo( (obj2.offsetLeft + 10), (obj1.offsetTop + 10));
	ctx.stroke();

	ctx.moveTo( (obj2.offsetLeft + 10), (obj1.offsetTop + 10));
	ctx.lineTo( (obj1.offsetLeft + 10), (obj1.offsetTop + 10));
	ctx.stroke();

}

function checklo_off_link() {
	ctx.clearRect(0, 0, 1200, 550);
}

function checklo_off(elem) {
	var list = document.getElementById('modInfo__list_first');
	var obj3 = list.querySelector( 'a[property="' + elem.getAttribute("property") + '"]' );
	obj3.classList.remove("active");
	ctx.clearRect(0, 0, 1200, 550);
}