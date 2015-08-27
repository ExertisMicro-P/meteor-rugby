
Template.loginUpdatedUploadBar.helpers({
    updatedAt: function() {
        //return 'zzz';
        config = Config.findOne({});
        // RCH 20150827
        // Hide useless console error "Exception in template helper: TypeError: Cannot read property 'createdAt' of undefined"
        if (config) {
        	updatedAt = Config.findOne({}).createdAt;
        } else {
        	updatedAt = 'Recently';
        	// (this seems to sort itself out once is loads the latest file)
        }
        //console.log('Data Updated:'+updatedAt);
        return moment(updatedAt).fromNow();
    }
});