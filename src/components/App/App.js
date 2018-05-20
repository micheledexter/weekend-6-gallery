import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryList: [],
    }
  }

  getGalleryList = () => {
    axios.get('/gallery').then(response => {
      this.setState({
        galleryList: response.data,
      });
    }).catch(error => {
      console.log(error);
    })
  }

  componentDidMount = () => {
    this.getGalleryList();
  }

  render() {
    return (
      <div className="App" style={{backgroundColor:"lightGrey"}}>
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList list={this.state.galleryList}/>
      </div>
    );
  }
}

export default App;
