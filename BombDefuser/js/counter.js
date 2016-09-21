var counter = {
	create : function () {
		var _c = 0;
		function getValue () {
			return _c;
		}
		function increaseValue () {
			_c += 1;
			return _c;
		}
		return {
			getValue : getValue,
			increaseValue : increaseValue
		}
	}
}