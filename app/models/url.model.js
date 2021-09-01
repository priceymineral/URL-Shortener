//Require Mongoose
import mongoose from 'mongoose';

// Define Schema
const urlSchema = new mongoose.Schema({
  url: String,
  code: String
});

// Compile model from schema
const URL = mongoose.model('URL', urlSchema );

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#using_named_exports
export { URL };