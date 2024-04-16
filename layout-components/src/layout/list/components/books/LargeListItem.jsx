export const LargeBookListItem = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>{title}</h2>
      <p># of Pages: {pages}</p>
    </>
  );
};
