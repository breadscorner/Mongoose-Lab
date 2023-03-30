const database = require("mongoose");

const is_qoddi = process.env.IS_QODDI || false;

const databaseName = "lab_example"

const qoddiURI =
  "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.4ulcc.mongodb.net/"+databaseName+"?retryWrites=true&w=majority"

const localURI =
"mongodb://localhost/"+databaseName+"?authSource=admin&retryWrites=true"

if (is_qoddi) {
  database.connect(qoddiURI, {useNewUrlParser: true, useUnifiedTopology: true})
} else {
  database.connect(localURI, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = database;