/**
 *
 * Returns lists of ALL Resellers for a particular League (i.e. a full list for the details page)
 */
Template.resellersList.helpers({
  resellers: function() {
    return Resellers.find();
  },

  resellersForThisLeague: function(leagueName) {
    leagueData = Template.parentData(0);
    console.log('leagueName='+leagueData.name);
    filteredResellers = Resellers.find( {searchableLeague: leagueData.name.toLowerCase()}, {sort:{achieved:-1}}).map(function(reseller, index) {
      reseller.rank = index+1;
      return reseller;
    });;

    return filteredResellers;
  }
});



/**
 *
 * Returns lists of the first X Resellers for a particular League (i.e. a short list for the front page)
 */
Template.resellersListShort.helpers({

  resellersForThisLeague: function(leagueName, limit) {
    leagueData = Template.parentData(0);
    console.log('leagueName='+leagueData.name);
    //filteredResellers = _.where(Resellers.find({}), { league: leagueData.name});
    filteredResellers = Resellers.find( { searchableLeague: leagueData.name.toLowerCase()}, {sort:{achieved:-1}, limit:limit}).map(function(reseller, index) {
      reseller.rank = index+1;
      return reseller;
    });
    //return _.sortBy(filteredResellers, 'acheived').reverse().slice(0, limit);

    return filteredResellers;
  }
});