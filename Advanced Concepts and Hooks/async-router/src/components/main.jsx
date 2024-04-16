import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";
import { MainContainer, MainHeading } from "./styled-elements";

const Main = () => {
  const { promise } = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>
        Main -
        <Suspense fallback="Fetching...">
          <Await resolve={promise}>{(data) => <strong>{data}</strong>}</Await>
        </Suspense>
      </MainHeading>
    </MainContainer>
  );
};

export default Main;
