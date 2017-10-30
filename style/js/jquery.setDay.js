/**
 * @author Auroral on 2017/10/27 0027.
 */
;(function($){
  var Datebox = function(ele,option){
	this.$element = $(ele);
	this.activeDate;//选中的日期数字
	this.body = $('body'),//body
	this.date_mask = $('<section class="popmask date_mask">'),//日期弹窗遮罩
	this.date_box = $('<div class="date_box"></div>'),//日期box
	this.date_number_box = $('<ul class="date_number_box"></ul>'),//日期的数字box
	this.date_number = '',//具体的数字
	this.btns = $('<div class="date_btns"></div>'),//按钮组
	this.cancle = $('<a href="javascript:;" class="date_cancel">取消</a>'),//取消按钮
	this.ok = $('<a href="javascript:;" class="date_ok">确定</a>');//确认按钮
  };
  Datebox.prototype = {
    init:function(){
     /* var self = this.$element;*/
	  var self = this;
	  self.body =this.body;
	  this.load();
	},
	load:function(){

	  var self = this;
	  self.ele = self.$element ;
	  self.activeDate = self.activeDate;
	  var html_num = '';
	  self.body =self.body;
	  self.date_mask = self.date_mask;
	  self.date_box = self.date_box;
	  self.date_number_box =  self.date_number_box;
	  self.date_number = self.date_number;
	  self.btns = self.btns;
	  self.cancle = self.cancle;
	  self.ok = self.ok;
	  if(!self.date_number){
	    for(var d =1;d <32; d++){
		  html_num +='<li class="number">'+d+'</li>';
		}
		self.date_number = html_num;
	  }
	  /*开始渲染*/
	//将数字append到box里面
	  self.date_number_box.append(self.date_number);
	  //按钮组append 到按钮box
	  self.btns.append(self.cancle);
	  self.btns.append(self.ok);
	  //遮罩层
	  self.date_box.prepend(self.date_number_box);
	  self.date_box.append(self.btns);
	  self.date_mask.append(self.date_box);
	  //添加到 body
	  self.body.append(self.date_mask);
	  /*渲染结束*/
	  $('.date_number_box').on('click','li',function(){
		self.addActive(this);
		self.activeDate = self.addActive(this);
	  });
	  //取消按钮
	  $('.date_cancel').on('click',function(){
	    self.close();
	  });
	  //确认按钮
	  $('.date_ok').on('click',function(){
		//self.ele
		console.log(self.activeDate);
		$(self.ele).val(self.activeDate);
		self.close();
	  })

	},
	close:function(){
	  $('.date_mask').remove();
	  console.log('close');
	},
	ok:function(){
	  console.log('yes');
	},
	addActive(obj){
	  $(obj).addClass('active').siblings().removeClass('active');
	  return $(obj).text();
	}
  }
  $.fn.$setDay = function(options){
    var datebox = new Datebox(this,options);
    return datebox.init();
  }
})(jQuery)