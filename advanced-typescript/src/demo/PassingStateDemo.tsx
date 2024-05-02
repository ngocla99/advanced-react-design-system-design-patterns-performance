import axios from "axios";
import { useState } from "react";
import Books from "../components/WithoutInitialStateComps/books/books";
import Book from "../components/WithoutInitialStateComps/books/book";

export type TBook = {
  id: number;
  title: string;
  author?: string;
};

export const fetchBooks = async (count: number) => {
  const response = await axios.get(`api/books?limit=${count}`);
  return response.data;
};

function PassingStateDemo() {
  const [books, setBooks] = useState<TBook[]>([]);
  const [count, setCount] = useState(10);

  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      <Books
        count={count}
        onSubmit={() => fetchBooks(count).then(setBooks)}
        onChange={(e) => setCount(e.target.valueAsNumber)}
      >
        {books.map((book) => {
          return <Book title={book.title} author={book.author} />;
        })}
      </Books>
    </main>
  );
}

export default PassingStateDemo;
