import { useEffect, useState } from "react";
import axios from "axios";
import Book from "../components/WithoutInitialStateComps/books/book";
import Loader from "../components/WithoutInitialStateComps/loader/loader";

export type Book = {
  id: number;
  title: string;
  author?: string;
};

export const fetchRandomBook = async () => {
  const response = await axios.get(`/api/books/random`);
  return response.data;
};

export const fetchBook = async (count: number) => {
  const response = await axios.get(`/api/books?limit=${count}`);
  return response.data;
};

function WithoutInitialStateDemo() {
  const [book, setBook] = useState<Book | undefined>();

  useEffect(() => {
    fetchRandomBook().then(setBook);
  }, []);

  if (!book) return <Loader />;

  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      <Book title={book.title} author={book.author} />
    </main>
  );
}

export default WithoutInitialStateDemo;
