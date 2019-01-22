import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

const Collection = () => (
  <section className="heading">
    <img id="logo" src="/assets/images/bloc_jams_logo.png" width="100" height="50" alt="Bloc Jams Logo"/>
    <h1 className="title">Collection</h1>
  </section>
)

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
   return (
     
     <section className='library'>
      {
       this.state.albums.map( (album, index) =>
       <Link to={`/album/${album.slug}`} key={index}>
       <table>
        <tr>

            <img src={album.albumCover} alt={album.title} />
            <div>{album.title}</div>
            <div>{album.artist}</div>
            <div>{album.songs.length} songs</div>

        </tr>
      </table>
      </Link>
     )
   }
  </section>
    );

  }
}




export default Library;
