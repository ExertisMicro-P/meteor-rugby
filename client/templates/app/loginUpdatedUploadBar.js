
Template.loginUpdatedUploadBar.helpers({
    updatedAt: function() {
        //return 'zzz';
        updatedAt = Config.findOne({}).createdAt;
        //console.log('Data Updated:'+updatedAt);
        return moment(updatedAt).fromNow();
    }
});