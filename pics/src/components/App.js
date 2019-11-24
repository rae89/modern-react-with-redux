import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";


class App extends React.Component {

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID e725f0e22e7dd9ca6129af47a675b67a8e888ad425aa020fecf4553fa25f1ae6'
      }
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
