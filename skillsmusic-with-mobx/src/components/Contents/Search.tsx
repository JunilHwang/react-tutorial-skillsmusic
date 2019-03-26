import React, { Component } from 'react'

class Search extends Component  {
  render() {
    return (
      <section className="search">
        <h3>앨범검색</h3>
        <form action="post" name="search">
          <fieldset>
            <legend>앨범검색</legend>
            <input type="text" name="key" placeholder="앨범 검색" size={50} className="input" />
            <button type="submit" className="btn main">검색</button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Search