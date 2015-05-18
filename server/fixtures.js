var numreqd=80;
var curnumResellers = Resellers.find().count() ;

console.log('numreqd='+numreqd);
console.log('curnumResellers='+curnumResellers);


if (curnumResellers < numreqd) {
  
  var target = numreqd - curnumResellers;
  for (var i=0; i<target; i++) {
    var newRecord =  {
        name: Fake.user({fields: ['fullname']}).fullname,
        achieved: Math.floor((Math.random() * 100) + 1),
        league: Fake.fromArray(['Dell', 'Lenovo', 'Samsung', 'Belkin','TP-Link','Netgear'])
      };
    Resellers.insert(newRecord);
    
    console.log(newRecord);
  } // for


}//if

 