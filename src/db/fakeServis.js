const movies = [
  {
    id: 1,
    title: "Terminator",
    genre: "Action",
    stock: 6,
    rate: 2.5,
  },
  {
    id: 2,
    title: "Die Hard",
    genre: "Action",
    stock: 5,
    rate: 2.5,
  },
  {
    id: 3,
    title: "Get Out",
    genre: "Thriller",
    stock: 6,
    rate: 3.5,
  },
  {
    id: 4,
    title: "Trip to Italy",
    genre: "Comedy",
    stock: 8,
    rate: 3.5,
  },
  {
    id: 5,
    title: "Airplane",
    genre: "Comedy",
    stock: 7,
    rate: 3.5,
  },
  {
    id: 6,
    title: "Mortal",
    genre: "Thriller",
    stock: 7,
    rate: 4.5,
  },
  {
    id: 7,
    title: "Kong vs Go",
    genre: "Action",
    stock: 8,
    rate: 4.5,
  },
  {
    id: 8,
    title: "Forsaj 9",
    genre: "Thriller",
    stock: 6,
    rate: 5.5,
  },
  {
    id: 9,
    title: "Anbel season 3",
    genre: "Comedy",
    stock: 5,
    rate: 3.5,
  },
];
export const getMovies = () => {
  return [...movies];
};
