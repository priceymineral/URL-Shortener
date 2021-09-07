//Require Mongoose
import mongoose from 'mongoose';

// Define Schema
const Schema = mongoose.Schema;
const UrlSchema = new Schema({
  url: String, // can try using validation here
  code: String
});

// Compile model from schema
const UrlModel = mongoose.model('url', UrlSchema );

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#using_named_exports
export { UrlModel };