import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }
 // updateUser(data){
 //    this.setState({repos:data})
 //  }

  search (term) {
    console.log(`${term} was searched`);
     
    $.ajax ({
      url: "http://127.0.0.1:1128/repos",
      type: 'GET',

      data: term,//JSON.stringify
      success: function(data){
        // this.setState({repos:term})
        console.log(term);
      },
      error:function(err){
        console.error('err');
      }

    })
    
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


