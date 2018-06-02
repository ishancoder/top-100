import React, {Component} from "react";
import PropTypes from "prop-types";
import "./MoreInfo.css";

class MoreInfo extends Component {
    render() {
        if(!this.props.album) {
            return <div className="moreinfo-container"></div>;
        }
        return (
            <div className={this.props.className + " moreinfo-container"}>
                <div className="background"></div>
                <div className="moreinfo-content">
                    <span className="close-button" onClick={(event)=>{this.props.onClear(null)}}><i className="fas fa-times"></i></span>
                    <div>
                        <img src={this.props.album["im:image"][2].label} width="400px" height="400px"/>
                        <span title={this.props.album["im:artist"].label}><strong>ARTIST :</strong> {this.props.album["im:artist"].label} </span>
                        <span><strong>PRICE :</strong> {this.props.album["im:price"].label}</span>
                        <span><strong>RELEASE : </strong>{this.props.album["im:releaseDate"].attributes.label}</span>
                        <br/>
                        <span>{this.props.album.rights.label}</span>
                        <span className="link"><a href={this.props.album.link.attributes.href}>Get it on <i className="fab fa-apple"></i> iTunes</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

MoreInfo.propTypes = {
    album: PropTypes.object.isRequired,
    onClear: PropTypes.func.isRequired,
};

export default MoreInfo;