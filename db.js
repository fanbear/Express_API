const MongoClient = require('mongodb').MongoClient;

let state = {
    db: null
}

exports.connect = (url, done) => {
    if (state.db) {
        console.log("Connect to active database")
        return done();
    }
    MongoClient.connect(url, (err, db) => {
        if (err) {
            return done(err)
        }
        console.log("Create new database API");
        state.db = db.db("API");
        done();
    })
};

exports.get = function() {
    return state.db
};