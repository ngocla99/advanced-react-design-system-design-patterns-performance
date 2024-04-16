import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FetchTopQuotes from "./components/top-quotes";
import UpdateQuotes from "./components/update-quote";
import PaginatedQuotes from "./components/paginated-quotes";
import InfiniteScrollQuotes from "./components/infinite-scroll-quotes";
import QueryCancellationWithAbortSignal from "./components/query-cancellation";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {/* <UpdateQuotes /> */}
        {/* <FetchTopQuotes /> */}
        {/* <PaginatedQuotes /> */}
        {/* <InfiniteScrollQuotes /> */}
        <QueryCancellationWithAbortSignal />
      </QueryClientProvider>
    </>
  );
}

export default App;
