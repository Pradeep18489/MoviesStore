import _ from "lodash";
const GetPageMovies = (allMovies, pageNumber, pageSize) => {
  let startIndex = (pageNumber - 1) * pageSize;
  const movies = _(allMovies)
    .slice(startIndex)
    .take(pageSize)
    .value();
  return movies;
};

export default GetPageMovies;
