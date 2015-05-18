Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'leaguesList'});
Router.route(
  '/leagues/:name', 
  {
    name: 'leagueDetails',
    data: function() {
      console.log('league/name='+this.params.name);
      console.log(leaguesData);
      league = _.where(leaguesData, { name: this.params.name});
      console.log(league);
      return league[0];
    }
  }
);

