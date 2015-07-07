Template.resellertruncated.helpers({
	name_truncated: function() {
		//return this.name;
		truncateAt = 25;
		return this.name.length > truncateAt ? this.name.substr(0,truncateAt)+'...' : this.name;
	}

})