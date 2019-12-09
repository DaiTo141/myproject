// Khoi Tao Lai Ban Co
let imported = document.createElement('script');
imported.src = 'sources.js';
document.head.appendChild(imported);
//Ve Ban Co Trang Den
function VeBanCoTrangDen(){
	for(let i = 1; i < 9; i++){
		for(let j = 1; j < 9; j++){
			document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(255,255,255)";
			if(i % 2 != 0 ){
				if(j % 2 == 0)
					document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(170,182,155)";
			}else{
				if(j % 2 != 0)
					document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(170,182,155)";
			}
		}
	}
}

//Dat Co
function DatCo () 
{
 	for(let i =3; i < 7; i++)
 	{
 		for (let j = 1; j<9; j++) 
 		{
 		document.getElementById("i" + i.toString() + j.toString()).src = "Img/Rong.png";
 		}
 	}
//Dat Quan Den}
 	for (let i = 1; i < 9; i++) {
 		document.getElementById("i7"+i.toString()).src="Img/Tot_Den.png"
 	}

	document.getElementById("i81").src="Img/Xe_Den.png"
	document.getElementById("i82").src="Img/Ma_Den.png"
	document.getElementById("i83").src="Img/Tuong_Den.png"
	document.getElementById("i84").src="Img/Hau_Den.png"
	document.getElementById("i85").src="Img/Vua_Den.png"
	document.getElementById("i86").src="Img/Tuong_Den.png"
	document.getElementById("i87").src="Img/Ma_Den.png"
	document.getElementById("i88").src="Img/Xe_Den.png"
//Dat Quan Do
for (let i = 1; i < 9; i++) {
 		document.getElementById("i2"+i.toString()).src="Img/Tot_Do.png"
 	}

	document.getElementById("i11").src="Img/Xe_Do.png"
	document.getElementById("i12").src="Img/Ma_Do.png"
	document.getElementById("i13").src="Img/Tuong_Do.png"
	document.getElementById("i14").src="Img/Vua_Do.png"
	document.getElementById("i15").src="Img/Hau_Do.png"
	document.getElementById("i16").src="Img/Tuong_Do.png"
	document.getElementById("i17").src="Img/Ma_Do.png"
	document.getElementById("i18").src="Img/Xe_Do.png"
}

