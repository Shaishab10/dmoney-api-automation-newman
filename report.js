const newman = require('newman');
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:'https://api.postman.com/collections/27913050-99c5ba41-d666-425b-9d58-927be451a81d?access_key=PMAT-01H89PJNK2AT5RJHJTQH8MQWFY',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});