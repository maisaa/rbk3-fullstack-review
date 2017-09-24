import React from 'react';
import $ from 'jquery';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    /////////////
    //this.search = this.search.bind(this);
   // this.onChange =this.onChange.bind(this.state);
  }////////////////

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search(props) {

    this.props.onSearch(this.state.term);
    // $.ajax ({
    //   url: "http://127.0.0.1:1128/",
    //   type: 'POST',
    //   data: JSON.stringify(this.state.term),
    //   success: function(){
    //     console.log("post username by ajax");
    //   }

    // })//

  }

  render() {
    return (<div>
      <h4>Add - more - repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>) 
  }
}

export default Search;