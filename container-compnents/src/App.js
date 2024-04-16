import axiosClient from "./axios";
import { BookInfo } from "./components/book-info";
import { CurrentUserLoader } from "./components/current-user-loader";
import { DataSource } from "./components/data-source";
import { DataSourceWithRender } from "./components/data-source-with-render";
import { ResourceLoader } from "./components/resource-loader";
import { UserInfo } from "./components/user-info";

const getDataFromServer = async (url) => {
  const response = await axiosClient.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <ResourceLoader resourceUrl={"/api/books/1"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader>

      <DataSource
        getData={() => getDataFromServer("/api/users/2")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>

      <DataSourceWithRender
        getData={() => getDataFromServer("/api/users/2")}
        render={(resource) => <UserInfo user={resource} />}
      />

      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName="msg"
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
