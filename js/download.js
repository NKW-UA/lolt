const btnExport = document.querySelector('#btnExport');
var backgroundImageDir = "images";
var can = document.getElementById('mainCanvas_front');
var can1 = document.createElement("canvas");
var img = document.createElement("img");

btnExport.addEventListener("click",function () {
	function getBackUrl(){  
		elem = document.getElementById('mainCanvas_front');
		style = elem.currentStyle || window.getComputedStyle(elem, false),
		backimg = style.backgroundImage.slice(4, -1).replace(/"/g, "");
		backimgArr = backimg.split(backgroundImageDir)
		backimg = backgroundImageDir + '/' + backimgArr[backimgArr.length-1];
		
		return backimg;
	}
	
	function getImage(){	
		const a = document.createElement("a");
		document.body.appendChild(a);
		a.href = can1.toDataURL('image/png');
		a.download = "Creatly.png";
		a.click();
	}
setTimeout(function exportDwnld() {
  var div = document.createElement("div");
  div.style.display = 'none';
  document.body.appendChild(div);
  
  can1.id = 'mainCanvas_result';
  can1.width = can.width;
  can1.height = can.height;
  div.appendChild(can1);

  img.id = 'img_res1';
  div.appendChild(img);

  ctx1 = can1.getContext('2d');
  img.src = can.toDataURL('image/png');

  backimg = getBackUrl();  
  

        pic = new Image();
		pic.src    = backimg;
		pic.onload = function() {
			ctx1.drawImage(pic, 0, 0, can.width, can.height);
		
			pic1 = new Image();
			pic1.src    = img.src;
			pic1.onload = function() {
				ctx1.drawImage(pic1, 0, 0);
				
				getImage();
			}
		}
},3800)
})
