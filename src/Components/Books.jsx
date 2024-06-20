import { NavLink, Outlet } from "react-router-dom";
import { getBooks } from "../data/data";

const Books = () => {
  const books = getBooks();
  return (
    <div>
      <h3 className="p-4 ">My Books</h3>
        <div className="container">
      <div className="d-flex justify-content-center flex-md-row flex-column gap-5 " >
        <div
          className="d-flex flex-column justify-content-start col-md-5 col-12"
        >
          <form class="form-inline d-flex pb-2 gap-2">
            <input
              style={{ outline: "none !important" }}
              className="form-control p-3 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-secondary  my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          {books.map((book) => (
            <NavLink
              className="text-decoration-none py-2 rounded"
              style={({ isActive }) => {
                return {
                  color: isActive ? "black" : "gray",
                  fontWeight: isActive ? "normal" : "lighter",
                  border: isActive ? "2px solid #ade8f4" : "1px solid #ade8f4",
                  boxShadow: isActive ? "0px 0px 10px #ade8f4" : "",
                  margin: isActive ? "25px 0" : "2px 0",
                  scale: isActive ? "1.04" : "1",
                };
              }}
              to={book.id}
              key={book.id}
            >
              {book.name}
            </NavLink>
          ))}
        </div>
        <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Books;
