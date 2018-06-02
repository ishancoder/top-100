import React, {Component} from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import PropTypes from "prop-types";
import "./AlbumList.css";

class AlbumList extends Component {
    render() {
        let albumCards = this.props.albums.map((album, i)=>{
            return <AlbumCard key={i} album={album} onSelect={this.props.onSelect}/>;
        });
        return (
            <div className="album-list">
                {albumCards}
            </div>
        )
    }
}

AlbumList.propTypes = {
    albums: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
}

export default AlbumList;