import React, { Component } from 'react';
// import Input from '@material-ui/core/Input';
// import TextArea from '@material-ui/core/TextField';
import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPicture: {
        path: '',
        description: '',
      }
    }
  }

  render() {
    return (
      <div className="galleryList">
        <ul>
          {/* map start here */}
          {this.props.list.map((item) =>
            <li key={item.id} style={{ display: "inline-block" }}>
              <GalleryListItem id={item.id} path={item.path} description={item.description} likes={item.likes} />
            </li>
          ).sort()}
          {/* map ends here */}
        </ul>
      </div>
    );
  }
}

export default GalleryList;