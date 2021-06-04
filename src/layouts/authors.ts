export const authors = [
  {
    name: "Faraz Patankar",
    image: "https://og.railway.app/authors/faraz-patankar.jpeg",
  },
  {
    name: "Jake Cooper",
    image: "https://og.railway.app/authors/jake-cooper.jpeg",
  },
];

const defaultAuthor = authors[0];

export const getAuthor = (name: string) => {
  const author = authors.find(author => author.name === name);

  return author ?? defaultAuthor;
};
