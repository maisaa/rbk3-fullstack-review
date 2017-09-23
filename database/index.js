var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  owner: {
  	  login:String,
      id: Number,
      avatar_url: String
  }
});////////////////////////////

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;