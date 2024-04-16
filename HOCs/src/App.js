import { checkProps } from "./components/check-props";
import { includeUser } from "./components/include-user";
import { UserInfoForm } from "./components/user-form";
import { UserInforFormV2 } from "./components/user-form-v2";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = checkProps(UserInfo);
const UserInfoWithLoader = includeUser(UserInfo, "3");

function App() {
  return (
    <>
      <UserInfoWrapper propA="test1" blabla={{ a: 1, age: 23 }} />
      <UserInfoWithLoader />
      <UserInfoForm />
      <UserInforFormV2 />
    </>
  );
}

export default App;
