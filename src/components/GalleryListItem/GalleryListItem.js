import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';

class GalleryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      showDescription: false,
    }
  }

  toggleShow = () => {
    this.setState({
      showDescription: !this.state.showDescription,
    });
  }

  addLike = (id) => {
    const reqBody = {
      likes: this.state.likes
    }
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      data: reqBody
    }).then(response => {
      console.log(response.data);
      this.setState({
        likes: this.state.likes + 1
      });
    }).catch(error => {
      console.log(`ERROR during PUT /gallery/like/:id: ${error}`);
    });
  }

  render() {
    return (
      <Paper style={{ display: "inline-block", margin: "15px" }}>
        {this.state.showDescription ?
          <p
            onClick={this.toggleShow}
            style={{ height: "206px", width: "220px", padding: "10px", fontSize: "1.1em", position: "relative"}}>{this.props.description}</p>
          : 
          <img src={this.props.path} onClick={this.toggleShow} alt="disturbing animal hybrid" style={{ width: "240px", height: "240px", borderRadius: "2px", position: "relative"}} />
        }
        {/* The REALLY complicated way of deriving/displaying the name based  */}
        <h3>{this.props.path.charAt(7).toUpperCase() + this.props.path.substring(8, (this.props.path.length - 4))}</h3>
        <Button variant="raised" color="primary" style={{ margin: "10px" }} onClick={() => this.addLike(this.props.id)}><ThumbUp /><pre> </pre>{this.state.likes}</Button>
      </Paper>
    );
  }
}

export default GalleryListItem;