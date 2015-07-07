
function loadFixturesFromFile(filetoload) {
    var fs = Npm.require('fs');
    if (!fs.existsSync(filetoload)) {
        return false;
    }


    Resellers.remove({});

    // read data from a CSV file
    // @see https://atmospherejs.com/evaisse/csv
    //console.log('pwd='+__meteor_bootstrap__.serverDir);

    dataToLoad = [];

    //CSV.readCsvFileLineByLine('../web.browser/app/data.csv', {

    //CSV.readCsvFileLineByLine('../web.browser/app/data.csv', {
    console.log('Loading from ' + filetoload);
    // See https://atmospherejs.com/evaisse/csv
    CSV.readCsvFileLineByLine(filetoload, {
            headers: true,
            delimiter: ","
        }, function (line) {
            dataToLoad.push(line);
        }
    );

    // make a note of the last file loaded
    Config.remove({});
    Config.insert({filetoload:filetoload, createdAt: new Date().valueOf()});

    //console.log('dataToLoad ='+JSON.stringify(dataToLoad));
    for (record in dataToLoad) {
        var newRecord = {
            name: dataToLoad[record].name.trim(),
            achieved: parseInt(dataToLoad[record].achieved),
            league: dataToLoad[record].league.trim(),
            searchableLeague: dataToLoad[record].league.trim().toLowerCase()
        };
        console.log(JSON.stringify(newRecord));
        Resellers.insert(newRecord);
    }
    return true;
}



function dynamicallyCreateFixtures() {
    // test fixtures

    var numreqd = 300;
    var curnumResellers = Resellers.find().count();

    console.log('numreqd=' + numreqd);
    console.log('curnumResellers=' + curnumResellers);


    if (curnumResellers < numreqd) {

        var target = numreqd - curnumResellers;
        for (var i = 0; i < target; i++) {
            var newRecord = {
                name: Fake.user({fields: ['fullname']}).fullname + ' gdsfgjhgdsfjhgdsfgsdg',
                achieved: Math.floor((Math.random() * 100) + 1),
                league: Fake.fromArray(['Dell-Server', 'Dell-Computing', 'Intel',
                    'Dell-Visual', 'Microsoft', 'Acer-Computing', 'Acer-Visual', 'Plantronics',
                    'Fujitsu', 'Lenovo-Computing', 'Lenovo-Server', 'APC', 'ZTE', 'BT', 'TP-Link', 'D-Link'
                ])
            };

            newRecord.searchableLeague = newRecord.league.trim().toLowerCase()
            Resellers.insert(newRecord);

            console.log(newRecord);
        } // for


    }//if
} // dynamicallyCreateFixtures



Meteor.startup(function () {
    var USECSVFILE = true;


    // see https://github.com/tomitrescak/meteor-uploads

        // see https://atmospherejs.com/mrt/platform.js
    console.log('Platform is '+platform);
    console.log('OS is |'+platform.os+'|');

    if (platform.os == 'Win32') {
      console.log("Setting uploadfolder");
      uploadfolder = '../../../../../.uploads/';
    } else {
      console.log("You are running linux!");
      uploadfolder = process.cwd()+'../.uploads/';
    }

    console.log('uploadfolder='+uploadfolder);

    UploadServer.init({
        tmpDir: uploadfolder+'tmp/',
        uploadDir: uploadfolder,
        checkCreateDirectories: true, //create the directories for you
        overwrite: true,
        finished: function (fileInfo, formFields) {
            console.log('New file uploaded: '+uploadfolder+fileInfo.path);
            loadFixturesFromFile(uploadfolder+fileInfo.path);
        }
    });



    if (!(config = Config.findOne({}))) {
        // default file to load
        filetoload = uploadfolder + 'data.csv';
    } else {
        // load the last file
        console.log('Loading from saved config file: '+config.filetoload);
        filetoload = config.filetoload;
    }

    if (USECSVFILE) {

        // if loading from a file failed for any reason
        if (!loadFixturesFromFile(filetoload)) {
            // load test data
            dynamicallyCreateFixtures();
        }
    } else {
        dynamicallyCreateFixtures();
    }// if USECSVFILE

    Meteor.publish('Resellers', function () {
        return Resellers.find();
    });

    Meteor.publish('DataUpdatedAt', function () {
        return Config.find({},{createdAt:1});
    });

});
