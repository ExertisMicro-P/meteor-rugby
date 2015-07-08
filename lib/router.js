
 //Router.plugin('auth');


Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',
    {
        name: 'leaguesList'
    });

Router.route(
  '/leagues/:name',
  {
    name: 'detailsPageLeague',
    data: function() {
      console.log('league/name='+this.params.name);
      console.log(leaguesData);
      league = _.where(leaguesData, { name: this.params.name});
      console.log(league);
      return league[0];
    }
  }
);

