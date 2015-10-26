require([
	"zepto.min",
	"mobiscroll.min"
], function() {
	//preset: 'date', //日期类型--datatime --time,
    //theme: 'ios', //皮肤其他参数【android-ics light】【android-ics】【ios】【jqm】【sense-ui】【sense-ui】【sense-ui】
								//【wp light】【wp】
    //mode: "scroller",//操作方式【scroller】【clickpick】【mixed】
    //display: 'bubble', //显示方【modal】【inline】【bubble】【top】【bottom】
    //dateFormat: 'yyyy-mm-dd', // 日期格式
    //setText: '确定', //确认按钮名称
    //cancelText: '清空',//取消按钮名籍我
    //dateOrder: 'yymmdd', //面板中日期排列格
    //dayText: '日', 
    //monthText: '月',
    //yearText: '年', //面板中年月日文字
    //startYear: (new Date()).getFullYear(), //开始年份
    //endYear: (new Date()).getFullYear() + 9, //结束年份
    //showNow: true,
    //nowText: "明天",  //
    //showOnFocus: false,
    //height: 45,
    //width: 90,
    //rows: 3}

	$(function(){
		$('input[name=date]').each(function(){
			var startYear = $(this).data('startYear') || 1970,
				endYear = $(this).data('endYear') || new Date().getFullYear(),
				theme = $(this).data('theme') || 'android-ics light',
				mode = $(this).data('mode') || 'scroller',
				lang = $(this).data('lang') || 'zh',
				display = $(this).data('display') || 'bottom';
			$(this).mobiscroll().date({
	            theme:theme,
	            mode:mode,
	            lang: lang,
	            display:display,
	            startYear:startYear,
	            endYear:endYear
	        });
	        console.log($.mobiscroll);
		});
	});
})
