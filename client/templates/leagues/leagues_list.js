leaguesData = [
  {
    name: 'Dell-Server',
  },
  {
    name: 'Dell-Computing',
  },
  {
    name: 'Dell-Visual',
  },
  {
    name: 'Intel',
  },
  {
    name: 'Microsoft',
  },
  {
    name: 'Acer-Computing',
  },
  {
    name: 'Acer-Visual',
  },
  {
    name: 'Plantronics',
  },
  {
    name: 'Fujitsu',
  },
  {
    name: 'Lenovo-Computing',
  },
  {
    name: 'Lenovo-Server',
  },
  {
    name: 'APC',
  },
  {
    name: 'ZTE',
  },
  {
    name: 'BT',
  },
  {
    name: 'TP-Link',
  },
];


//leaguesData = [];

Template.leaguesList.helpers({
  leagues: leaguesData,

  leaguesX: function() {
    resellers = Resellers.find({})
    //var leaguesData = [];
    resellers.forEach(function(reseller) {
          var league = {};
          
          league.name = reseller.league;
          leaguesData[league.name] = league;
        }
      );
    console.log(leaguesData);

    var ld = [];
    for(i in leaguesData) {
      ld.push(leaguesData[i]);
    };
    console.log(ld);
    return ld;
  }
});