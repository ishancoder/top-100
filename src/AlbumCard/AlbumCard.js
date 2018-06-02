import React, {Component} from "react";
import PropTypes from "prop-types";
import "./AlbumCard.css";

class AlbumCard extends Component {
    
    handleSelect = (event) => {
        if(this.props.onSelect) {
            this.props.onSelect(this.props.album);
        }
    }

    render() {
        return (
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 card-container" onClick={this.handleSelect}>
                <div className="img-box" style={{background: "url(" + this.props.album["im:image"][2].label + ")", backgroundSize: "cover"}}>
                    <div className="overlay"></div>
                    <span>{this.props.album["im:name"].label}</span>
                </div>
                <div className="card-content">
                    <span title={this.props.album["im:artist"].label}><strong>ARTIST :</strong> {this.props.album["im:artist"].label} </span>
                    <span><strong>PRICE :</strong> {this.props.album["im:price"].label}</span>
                    <br/>
                    <span className="link"><a target="_blank" href={this.props.album.link.attributes.href}>Get it on <i className="fab fa-apple"></i> iTunes</a></span>
                    <span>{this.props.album["im:releaseDate"].attributes.label}</span>
                </div>
            </div>
        );
    }
}

AlbumCard.propTypes = {
    album: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
};

export default AlbumCard;