import styled from "styled-components";
import ListHandler from "../components/list-handler";
import books from "../components/books.json";

const DisplayBooksContainer = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
  font-weight: 600;
  margin-bottom: 1rem;
`;

const StyledBook = styled.div`
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  max-width: 20rem;
  margin: 0.5rem auto;
`;

const booksData = books.slice(0, 4);
export const RenderPropsDemo = () => {
  return (
    <DisplayBooksContainer>
      <Title>Books List</Title>
      <div>
        <ListHandler
          items={booksData}
          keyExtractor={(book) => book.id}
          renderItem={(item) => <StyledBook>{item.title}</StyledBook>}
        />
      </div>
    </DisplayBooksContainer>
  );
};
