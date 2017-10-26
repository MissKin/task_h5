/**
 * Created by Auroral on 2017/9/4 0004.
 */
/*tab 选项切换 title里面一定要是li*/
function tab(title,box,active){
  $(title).find('li').click(function () {
	var _this = $(this);
	var index = $(_this).index();
	if(active){
	  _this.addClass(active).siblings().removeClass(active);
	}
	$(box).children().eq(index).removeClass('displaynone').siblings().addClass('displaynone');
  })
}
/*发送验证码 倒计时*/
var time = 6;
function timer(obj) {
  var _this = $(obj);

  if(time > 0){
	$(_this).html('剩余'+time +'s');
	$(_this).attr('disabled',true);
	var classN = $(_this).attr('class');
	if(classN.indexOf('green') > -1){
	  _this.removeClass('green').addClass('disabled');
	}
	time --;
	var t =setTimeout(function () {
	  timer(obj)
	},1000)
  }
  if(time === 1){
	clearTimeout(t);
	$(_this).html('获取验证码');
	_this.removeClass('green').addClass('disabled');
  }
}