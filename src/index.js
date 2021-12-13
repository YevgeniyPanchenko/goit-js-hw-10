import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 1000;

const searchInput = document.querySelector('#search-box');
searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  const searchQuery = evt.target.value.trim();

  fetchCountries(searchQuery);
}
