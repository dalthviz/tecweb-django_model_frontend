import React, { Component } from 'react';
import $ from 'jquery';

class SendModel extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state={name:"Modelo"}
  }


  handleSubmit() {
    var data = new FormData();
    var fileData = document.querySelector('input[type="file"]').files[0];
    data.append("model", fileData);
    data.append("name", this.state.name);
    console.log("FILE DATA:")
    console.log(fileData);
    $.ajax({
      method: "POST",
      url:"http://localhost:8080/api/djmodels",
      data: data,
      cache: false,
      contentType:false,
      processData: false,
      crossDomain: true,
    }).done((data) => {
      console.log(data);
      this.props.ponerCodigo(data.model);
    }).fail((err) => {
      console.log("Errooooorrrrr", err);
    });
    // fetch("http://localhost:8080/api/djmodels", {
    //   mode:'no-cors',
    //   method:"POST",
    //   body: data
    // }).then(function (res) {
    //   if(res.ok) {
    //     alert("Perfect");
    //   } else {
    //     alert("Server error (status code:" + res.status);
    //   }
    // }, function(e) {
    //   alert("ERROR (details):" + e);
    //   throw e;
    // });
    // return false;
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }


  render() {
    return (
      <div>
    <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} value={this.state.name} />
      <input type="file" name="model" defaultValue="model"></input>
    </form>
    <button onClick={this.handleSubmit}>{this.props.text}</button>
    </div>
    )
  }
}

export default SendModel
