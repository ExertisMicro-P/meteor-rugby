 Template.registerHelper('resellersForThisLeagueCount', function () {
    leagueData = Template.parentData(0);
    console.log('leagueName='+leagueData.name);
    filteredResellers = Resellers.find( {league: leagueData.name}).count();
    return filteredResellers;
});

Meteor.subscribe('Resellers');
Meteor.subscribe('DataUpdatedAt');

Template.layout.onRendered(function() {
  $('[data-toggle="tooltip"]').tooltip()
});

