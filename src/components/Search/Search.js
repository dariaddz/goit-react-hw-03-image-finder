import React from 'react';
import s from './Search.module.css';

class Search extends React.Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return alert('Введите название картинки');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className={s.SearchFormInput}
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Search;
