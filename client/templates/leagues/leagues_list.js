leaguesData = [
  {
    name: 'Dell',
    url: 'http://sachagreif.com/introducing-telescope/'
  }, 
  {
    name: 'Samsung',
    url: 'http://meteor.com'
  }, 
  {
    name: 'Lenovo',
    url: 'http://themeteorbook.com'
  },
  {
    name: 'Belkin',
    url: 'http://sachagreif.com/introducing-telescope/'
  }, 
  {
    name: 'TP-Link',
    url: 'http://meteor.com'
  }, 
  {
    name: 'Netgear',
    url: 'http://themeteorbook.com'
  }
];
Template.leaguesList.helpers({
  leagues: leaguesData
});