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
	                    alert(nullMsg);
	                    break;
	                }
	                if (!value) {
	                    valid = false;
	                    console.log(nullMsg);
	                    alert(nullMsg);
	                    break;
	                } else if (ruleName && !rule.test(value)) {
	                    valid = false;
	                    console.log(errorMsg);
	                    alert(errorMsg);
	                    break;
	                }
	            } else {
	                if (value && ruleName && !rule.test(value)) {
	                    valid = false;
	                    console.log(errorMsg);
	                    alert(errorMsg);
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
    }
})
