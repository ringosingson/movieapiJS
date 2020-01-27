const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '6c93334a',
      //s: 'avengers'
      //i: 'tt0848228'
      s: searchTerm
    }
  });
  console.log(response.data);
};

const input = document.querySelector('input');

const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...arg) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, arg);
    }, delay);
  };
};

const onInput = e => {
  fetchData(e.target.value);
};
input.addEventListener('input', debounce(onInput, 500));
