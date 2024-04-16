import React from "react";
import styled from "styled-components";
import { useApi } from "../api/hooks/useApi";
import { fetchUser } from "../api/userApi";
import LazyLoader from "./lazy-loader";

const useFetchUsers = () => {
  const {
    data: users,
    exec: initFetchUsers,
    status: fetchUsersStatus,
    isIdle: isFetchUsersStatusIdle,
    isPending: isFetchUsersStatusPending,
    isSuccess: isFetchUsersStatusSuccess,
    isError: isFetchUsersStatusError,
  } = useApi(() => fetchUser().then((response) => response.data));

  return {
    users,
    fetchUsersStatus,
    isFetchUsersStatusIdle,
    isFetchUsersStatusPending,
    isFetchUsersStatusSuccess,
    isFetchUsersStatusError,
    initFetchUsers,
  };
};

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`;

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`;

export function Users() {
  const {
    users,
    isFetchUsersStatusIdle,
    isFetchUsersStatusPending,
    initFetchUsers,
  } = useFetchUsers();

  return (
    <Container>
      <FetchButton onClick={initFetchUsers}>
        <LazyLoader
          show={isFetchUsersStatusPending}
          delay={500}
          default="Fetch Users"
        />
      </FetchButton>

      {isFetchUsersStatusIdle ? (
        <h1>Welcome to my site!</h1>
      ) : (
        <FlexContainer>
          <ContentContainer>
            {users
              ? users.map((user, index) => (
                  <React.Fragment key={index}>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                  </React.Fragment>
                ))
              : null}
          </ContentContainer>
        </FlexContainer>
      )}
    </Container>
  );
}
