/**
 * @author Auroral on 2017/9/7 0007.
 */
function uploadImg(obj,showimg,hidden) {

  window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
  var showimg = document.getElementById(showimg);
  var hiddenimg = document.getElementById(hidden);
  console.log( hidden)
  var files = obj.files;
  if(window.URL){
	if(files.length !== 0){
	  hiddenimg.style.display = 'none';
	}
	showimg.src = window.URL.createObjectURL(files[0]);
	showimg.onload = function () {
	  window.URL.revokeObjectURL(this.src);//释放URL对象，垃圾回收
	}
  }else if(window.FileReader){
	//opera不支持createObjectURL/revokeObjectURL方法。我们用FileReader对象来处理
	var reader = new FileReader();
	reader.readAsDataURL(files[0]);
	reader.onload = function(e){
	  alert(files[0].name + "," +e.total + " bytes");
	  showimg.src = this.result;
	  fileList.appendChild(showimg);
	}
  }else{
	//ie
	obj.select();
	obj.blur();
	var nfile = document.selection.createRange().text;
	document.selection.empty();
	showimg.src = nfile;
	showimg.width = 200;
	showimg.onload=function(){
	  alert(nfile+","+img.fileSize + " bytes");
	}
	fileList.appendChild(img);
	//fileList.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src='"+nfile+"')";
  }
}