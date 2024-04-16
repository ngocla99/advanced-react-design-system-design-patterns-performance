export const SmallBookListItem = ({ book }) => {
  const { name, price } = book;

  return (
    <h2>
      Name: {name}, Price: {price}
    </h2>
  );
};
