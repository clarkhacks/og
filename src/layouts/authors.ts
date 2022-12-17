export const authors = [
  {
    name: "Faraz Patankar",
    image: "https://og.railway.app/authors/faraz-patankar.jpeg",
  },
  {
    name: "Jake Cooper",
    image: "https://og.railway.app/authors/jake-cooper.jpeg",
  },
  {
    name: "Greg Schier",
    image: "https://og.railway.app/authors/greg-schier.jpeg",
  },
  {
    name: "Jake Runzer",
    image: "https://og.railway.app/authors/jake-runzer.jpeg",
  },
  {
    name: "Angelo Saraceno",
    image: "https://og.railway.app/authors/angelo-saraceno.jpeg",
  },
  {
    name: "wyzlle",
    image: "https://og.railway.app/authors/wyzlle.png",
  },
  {
    name: "David Banys",
    image: "https://og.railway.app/authors/david-banys.png",
  },
];

const defaultAuthor = authors[0];

export const getAuthor = (name: string) => {
  const author = authors.find(author => author.name === name);

  return author ?? defaultAuthor;
};
