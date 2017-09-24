import $ from 'jquery';
import index

var getData= $.ajax({
	 url: "http://127.0.0.1:1128/repos",
      type: 'GET',
      //data: term,//JSON.stringify
      success: function(term){
        this.setState({repos:term})
        console.log("post username by ajax");
      },
      error:function(err){
        console.log('err',err);
      }
})