import React from 'react'

class SearchForm extends React.Component {
  state = {
    search: "",
    results: []
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.search)
    const apiKey = 'AIzaSyDIaG8LKc_wpzZxDB4VLCKrAylaBFzLVic'
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.search

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ results: data.items }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-bar'>Search</label>
          <input
            type='text'
            id='search-bar'
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type='submit'>
            Search
        </button>
        </form>

        <section>
          {
            this.state.results.map(result => (
            <p>{result.volumeInfo.title}</p>
            ))
          }
        </section>
      </>
    )
  }
}

export default SearchForm