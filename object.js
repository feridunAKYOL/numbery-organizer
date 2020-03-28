const object = {
	numberyStrings: [],
	NaNyStrings: [],

	isNumberyString: function(param) {
		if (typeof param === 'string') {
			if (isNaN(param)) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	},
	addString: function(param) {
		if (typeof param === 'string') {
			if (isNaN(param)) {
				this.NaNyStrings.push(param);
				return true;
			} else {
				this.numberyStrings.push(param);
				return true;
			}
		} else {
			return false;
		}
	},
	allStrings: function() {
		return [ ...this.numberyStrings, ...this.NaNyStrings ];
	},
	evenStrings: function() {
		return this.numberyStrings.filter((num) => num % 2 === 0);
	},
	oddStrings: function() {
		return this.numberyStrings.filter((num) => num % 2 !== 0 );
	},
	negativeStrings: function() {
		return this.numberyStrings.filter((num) => num < 0);
	},
	positiveStrings: function() {
		return this.numberyStrings.filter((num) => num >= 0);
	},
	zeroStrings: function() {
		return this.numberyStrings.filter((num) => num == 0);
	},
	numberyAsNumbers: function() {
		return this.numberyStrings.map((num) => Number(num));
	},
	NaNyAsNumbers: function() {
		return this.NaNyStrings.map((num) => Number(num));
	},
	sumOfNumbery: function() {
		return this.numberyStrings.reduce(function(total, num) {
			return total + Number(num);
		}, 0);
	},
	sumOfNaNy: function() {
		return this.NaNyStrings.reduce(function(total, num) {
			return total + Number(num);
		}, 0);
	}
};
