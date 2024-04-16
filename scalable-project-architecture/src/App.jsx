import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id/edit" element={<EditProduct />} />
          <Route path=":id/delete" element={<DeleteProduct />} />
          <Route path=":id" element={<ViewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
