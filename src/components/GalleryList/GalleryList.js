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
    // this.handleChangeFor = this.handleChangeFor.bind(this);
    // this.submitDisturbingHybrid = this.submitDisturbingHybrid.bind(this);
  }

  // handleChangeFor = propertyName => event => {
  //   this.setState({
  //     ...this.state.newPicture,
  //     [propertyName]: event.target.value,
  //   });
  //   console.log(this.state.newPicture);
  // }
  
  // submitDisturbingHybrid = () => {

  // };

  render() {
    return (
      <div className="galleryList">
        {/* <div className="newDisturbingHybrid">
          <form onSubmit={this.submitDisturbingHybrid}>
          <Input placeholder="Image URL" value={this.state.newPicture.path} onChange={this.handleChangeFor('path')} />
          </form>
        </div> */}
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