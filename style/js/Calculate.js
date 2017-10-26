/**
 * @author Auroral on 2017/9/4 0004.
 */
function Calculate() {

}
Calculate.prototype = {
  getNum: function(e){
	var self = this;
	if(e.target.className.indexOf('num') > -1){
	  var value = $(e.target).data('value');
	  var html = $('.show-money').html();
	  if(parseInt(html+value) > 9999999){
		return;
	  }
	  $('#money').html($('#money').html() + String(value));
	  if($('.show-money').html().length > 0){
		self.notZero(true);
	  }else{
		self.notZero(false);
	  }
	}
  },
  notZero:function(con){
	if(con){
	  $('.enter').addClass('gradient-green')
	}else{
	  $('.enter').removeClass('gradient-green')
	}
  },
  deleteNum:function () {
	var self = this;
	var html = $('.show-money').html();
	$('#money').html( html.substr(0,html.length-1));
	if($('.show-money').html().length > 0){
	  self.notZero(true);
	}else{
	  self.notZero(false);
	}
  },
  addDot:function(){
	var html = $('.show-money').html();
	if(html== " "){html = '0'+'.'}
	if(html.split('').indexOf('.') > -1){
	  var x =html.split('.'),y;
	  if(x[1] * 1 >0){
		var k = x[1];
		y = k.substring(0,2);
		$('.show-money').html(x[0]+ '0' + y);
	  }
	}
	if(html.split('').indexOf('.') > -1 || html == '' || parseInt(html)>9999999 ) return
	$('.show-money').html(html + '.')
  }

}