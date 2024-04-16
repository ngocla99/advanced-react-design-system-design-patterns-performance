export const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <div>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </div>
  );
};
