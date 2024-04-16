import { books } from "../list/data/books";
import { Modal } from "./components/Modal";
import { LargeBookListItem } from "../list/components/books/LargeListItem";

export const Demo = () => {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
};
