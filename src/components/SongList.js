import React from "react";
import { connect } from "react-redux";
// vid 241 - 4:50
import { selectSong } from "../actions";


class SongList extends React.Component {
  // this.props === {songs: state.songs}

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}


// gets data from redux store, run some calculations, so they can show as props in this component (SongList)
const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
