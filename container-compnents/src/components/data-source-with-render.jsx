import React from "react";

export const DataSourceWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);
  return render(resource);
};
