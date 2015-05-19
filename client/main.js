 Template.registerHelper('resellersForThisLeagueCount', function () {
    leagueData = Template.parentData(0);
    console.log('leagueName='+leagueData.name);
    filteredResellers = Resellers.find( {league: leagueData.name}).count();
    return filteredResellers;
});