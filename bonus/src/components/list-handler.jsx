const ListHandler = (props) => {
  const { items, keyExtractor, renderItem } = props;
  return (
    <div>
      {items.map((item, index) => {
        return <div key={keyExtractor(item)}>{renderItem(item, index)}</div>;
      })}
    </div>
  );
};
export default ListHandler;
