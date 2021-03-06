const movies = [
  {
    id: 1,
    title: "Terminator",
    genre: "action",
    stock: 6,
    rate: 2.5,
    isLiked: true,
  },
  {
    id: 2,
    title: "Die Hard",
    genre: "action",
    stock: 5,
    rate: 2.5,
    isLiked: false,
  },
  {
    id: 3,
    title: "Get Out",
    genre: "thriller",
    stock: 6,
    rate: 3.5,
    isLiked: true,
  },
  {
    id: 4,
    title: "Trip to Italy",
    genre: "comedy",
    stock: 8,
    rate: 3.5,
    isLiked: false,
  },
  {
    id: 5,
    title: "Airplane",
    genre: "comedy",
    stock: 7,
    rate: 3.5,
    isLiked: true,
  },
  {
    id: 6,
    title: "Mortal",
    genre: "thriller",
    stock: 7,
    rate: 4.5,
    isLiked: false,
  },
  {
    id: 7,
    title: "Kong vs Go",
    genre: "action",
    stock: 8,
    rate: 4.5,
    isLiked: false,
  },
  {
    id: 8,
    title: "Forsaj 9",
    genre: "thriller",
    stock: 6,
    rate: 5.5,
    isLiked: true,
  },
  {
    id: 9,
    title: "Anbel season 3",
    genre: "comedy",
    stock: 5,
    rate: 3.5,
    isLiked: false,
  },
];
export const getMovies = () => {
  return [...movies];
};
