const API_KEY = 'ee400b7f372cdf57c6d831363698e398'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const searchbtn = document.querySelector('#search')
// const detailsbtn = document.querySelector('#view-details')
const movieInput = document.querySelector('input')
const movie_list = document.querySelector('.movie-list')

searchbtn.addEventListener('click', async () => {
  let movie = movieInput.value
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`
  )

  // console.log(response)

  const renderList = response.data.results
  renderList.forEach((movie) => {
    const movieItem = document.createElement('li')
    const moviePoster = document.createElement('img')
    moviePoster.setAttribute('src', IMAGE_BASE_PATH + movie.poster_path)
    // console.log(moviePoster)

    movieItem.innerHTML = movie.original_title
    movieItem.append(moviePoster)
    movie_list.append(movieItem)

    // Create Details button

    const detailsbtn = document.createElement('button')
    detailsbtn.innerHTML = 'View Details'
    movieItem.append(detailsbtn)

    //detailsbtn function

    detailsbtn.addEventListener('click', () => {
      console.log(response)
      // const movieDetails = document.createElement('p')
    })
  })
  // }
})
