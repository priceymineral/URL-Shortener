//Require Mongoose
import mongoose from 'mongoose';
//Define a schema
var Schema = mongoose.Schema;

var URLSchema = new Schema({
  url: String,
  code: Number
});

// Compile model from schema
let URLModel = mongoose.model('URL', URLSchema );

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#using_named_exports
export { URLModel };