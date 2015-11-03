require([
    "zepto.min",
    "tpl.min"
], function() {

    $(function() {
        $('body').append(template('myTemplate'));
        $(document).on({
        	click : function(){
        		var _name = this.getAttribute('data-name'),
        			_value = this.getAttribute('data-value'),
        			_data = {
        				name : _name || '',
        				value : _value || ''
        			}
        		$('#box').append(template('myData',{
        			data : _data
        		}));
        	}
        },'button');
    });
})
