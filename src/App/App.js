import React, {Component} from "react";
import Search from "../Search/Search";
import AlbumList from "../AlbumList/AlbumList";
import Loading from "../Loading/Loading";
import MoreInfo from "../MoreInfo/MoreInfo";
import axios from "axios";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.albums = [];
        this.state = {isLoading: true, albumsToShow : [], selectedAlbum: null};
    }

    componentDidMount() {
        axios.get("https://itunes.apple.com/in/rss/topalbums/limit=100/json")
            .then((resp)=>{this.albums = resp.data.feed.entry; this.setState({...this.state, isLoading: false, albumsToShow: resp.data.feed.entry})})
            .catch(console.error);
    }

    filterAlbums = (event) => {
        let filteredAlbums = this.albums.filter((album)=>(album.title.label.match(new RegExp(".*" + event.target.value + ".*", "gi"))));
        this.setState({...this.state, albumsToShow: filteredAlbums});
    }

    onSelect = (album) => {
        this.setState({...this.setState, selectedAlbum: album});
    }

    render() {
        if(this.state.isLoading) 
            return <Loading/>
        return (
            <div>
                <MoreInfo onClear={this.onSelect} className={(this.state.selectedAlbum) ? "show" : ""} album={this.state.selectedAlbum} />
                <Search placeholder="Start Typing to search..." onChange={this.filterAlbums} />
                <div className="container-fluid" style={{marginTop: "10px"}}>
                    <AlbumList albums={this.state.albumsToShow} onSelect={this.onSelect} />
                </div>
            </div>
        )
    }
} 

export default App;