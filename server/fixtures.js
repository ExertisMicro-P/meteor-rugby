
Meteor.startup(function () {
    var USECSVFILE = true;

    if (USECSVFILE) {
    	Resellers.remove({}) ;
    	
        // read data from a CSV file
        // @see https://atmospherejs.com/evaisse/csv
        //console.log('pwd='+__meteor_bootstrap__.serverDir);

        dataToLoad = [];


        //var fs = Npm.require('fs');
        //var data = fs.readFileSync('../web.browser/app/data.csv', 'utf8');

        //CSV.readCsvFileLineByLine('../web.browser/app/data.csv', {

        CSV.readCsvFileLineByLine('../web.browser/app/data.csv', {
                        headers: true,
                        delimiter: ","
                    }, function (line) {
                        dataToLoad.push(line);
                    });

        //console.log('dataToLoad ='+JSON.stringify(dataToLoad));
        for(record in dataToLoad) {
            var newRecord = {
                    name: dataToLoad[record].name.trim(),
                    achieved: parseInt(dataToLoad[record].achieved),
                    league: dataToLoad[record].league.trim(),
                    searchableLeague:dataToLoad[record].league.trim().toLowerCase()
                };
            console.log(JSON.stringify(newRecord));
            Resellers.insert(newRecord);
        }






    } else {

        // test fixtures

        var numreqd = 80;
        var curnumResellers = Resellers.find().count();

        console.log('numreqd=' + numreqd);
        console.log('curnumResellers=' + curnumResellers);


        if (curnumResellers < numreqd) {

            var target = numreqd - curnumResellers;
            for (var i = 0; i < target; i++) {
                var newRecord = {
                    name: Fake.user({fields: ['fullname']}).fullname,
                    achieved: Math.floor((Math.random() * 100) + 1),
                    league: Fake.fromArray(['Dell', 'Lenovo', 'Samsung', 'Belkin', 'TP-Link', 'Netgear'])
                };
                Resellers.insert(newRecord);

                console.log(newRecord);
            } // for


        }//if

    } // if USECSVFILE


});
