// JavaScript Document

var display_btn = document.getElementById("btn");

display_btn.addEventListener("click", function() {
	for(i=0;i<10;i++) {
		var num_rn = Math.floor(Math.random() * 1000000);
		var color_rn = generateColor();
		var para = document.createElement("p");
		para.innerText = num_rn;
		para.style.color = color_rn;
		document.getElementById("txt").appendChild(para);
		document.getElementById("txt").style.display = "inline";
	}
});

function generateColor() {
	var clr = "#";
	var str = "1234567890ABCDEF".split("");

	for(j=0;j<6;j++) {
		clr += str[Math.floor(Math.random() * 16)];
	}
	return clr;
}