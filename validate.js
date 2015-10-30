require([
	"zepto.min"
], function() {
	$.fn.validate = function(options){
		var data = getFormDataAsObj(this),
            valid = true;
	        for (var i in data) {
	            var value = data[i],
	                $item = $('[name=' + i + ']'),
	                require = $item.data('require'),
	                nullMsg = $item.data('null'),
	                errorMsg = $item.data('error'),
	                ruleName = $item.data('rule') || '',
	                rule = options.rule[ruleName];

	            if (require) {
	                if(value == '-1'){
	                    valid = false;
	                    console.log(nullMsg);
	                    showMsg(nullMsg);
	                    break;
	                }
	                if (!value) {
	                    valid = false;
	                    console.log(nullMsg);
	                    showMsg(nullMsg);
	                    break;
	                } else if (ruleName && !rule.test(value)) {
	                    valid = false;
	                    console.log(errorMsg);
	                    showMsg(errorMsg);
	                    break;
	                }
	            } else {
	                if (value && ruleName && !rule.test(value)) {
	                    valid = false;
	                    console.log(errorMsg);
	                    showMsg(errorMsg);
	                    break;
	                }
	            }
	        }
        	return valid ? data : false;

		function getFormDataAsObj(form) {
            var obj = {},
                arr = $(form).serializeArray();
            for (var i = 0; i < arr.length; i++) {
                obj[arr[i].name] = arr[i].value;
            }
            return obj;
        }

        function showMsg(msg){
			if(!document.getElementById('_lyqShowMsgStyle')){
				var style = document.createElement('style'),
                	_cssText = "._lyqShowMsg{position:fixed;width:100%;height:100%;top:0;left:0;text-align:center;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center;z-index:1}.hidden{display:none!important}._lyqShowMsg .mask{position:fixed;width:100%;height:100%;top:0;left:0;background:#000;opacity:.5}._lyqShowMsg .content{display:block;width:100%;z-index:2000;position:absolute;height:auto;left:0;overflow-y:scroll;overflow-x:hidden;box-sizing:border-box;padding:0 20px;}._lyqShowMsg .box{padding:16px 10px;background:white;border-radius: 10px;}._lyqShowMsg p{line-height:24px;color:#4c4c4c}";
	                style.type = "text/css";
	                style.id = '_lyqShowMsgStyle';
	                style.styleSheet ? style.styleSheet.cssText = _cssText : style.innerHTML = _cssText
	                document.getElementsByTagName('head')[0].appendChild(style);
			}
			if(!document.getElementById('_lyqShowMsg')){
				$('<div id="_lyqShowMsg" class="_lyqShowMsg hidden"><div class="mask"></div><div class="content"><div class="box"><p>'+msg+'</p></div></div></div>').appendTo($('body'));
				showTips();
			}else{
				$('#_lyqShowMsg p').html(msg);
				showTips();
			}

			function showTips(){
		        $('#_lyqShowMsg').removeClass('hidden').find('.content').css({
		            height : (function(){
		                var _H = $(window).height(),
		                _h = $('#_lyqShowMsg .content').height();
		                return _h > _H * 0.9 ? _H*0.9 : _h ;
		            }()),
		            marginTop : (function(){
		                var _H = $(window).height(),
		                _h = $('#_lyqShowMsg .content').height(),
		                __h = _h > _H * 0.9 ? _H*0.9 : _h ;
		                return -__h*0.5
		            }()),
		            top : (function(){
		                var _H = $(window).height();
		                return _H*0.5
		            }())
		        });
		        setTimeout(function(){
		        	$('#_lyqShowMsg').addClass('hidden')
		        },options.time || 1500);
		    }
		}
    }
})
