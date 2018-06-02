import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends Component {
    
    constructor() {
        super();
        this.state = {query: ""};
    }

    handleChange = (event) => {
        this.setState({query: event.target.value});
        if(this.props.onChange) {
            this.props.onChange(event);
        }
    }

    render() {
        return(
            <div className="custom-header-with-search">
                <h1>Top 100 on <i className="fab fa-apple"></i> iTunes.</h1>
                <input placeholder={this.props.placeholder} type="text" value={this.state.query} onChange={this.handleChange} />
            </div>
        );
    }
}

Search.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Search;