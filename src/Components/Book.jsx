import { useParams } from "react-router-dom";
import { getBook } from "../data/data";
import notFoundError from "../assets/error404.png"


const Book = () => {
  let params = useParams();
  let book = getBook(params.bookId);
    if(book){
        return (
            <div className="d-flex flex-md-row flex-column-reverse justify-content-end border col-md-7 col-12 rounded-2">
              <div className="d-flex flex-column contentContainer  align-items-center justify-content-end d-flex px-4 ">
              <div className="d-flex flex-column justify-content-start align-items-start px-1" style={{minHeight:"57vh"}}>
            <h5 className="border-bottom w-100 py-3">{book.name}</h5>
            <div className="w-100 py-1 d-flex justify-content-between"><p className="fw-bold">Author:</p><span className="">{book.author}</span></div>
            <div className="w-100 py-1 d-flex justify-content-between"><p className="fw-bold">Price:</p><span className="">{book.price}</span></div>
            <div className="w-100 py-1 d-flex justify-content-between"><p className="fw-bold">Genre:</p><span className="text-primary">{book.genre}</span></div>
            <div className="w-100 py-1 d-flex justify-content-start text-start"><p style={{fontSize:"13px", textAlign:"justify"}}><span className="fw-bold fs-6">Description: </span>{book.description}</p></div>
              </div>
              <button className="btn btn-info w-100 m-3">Purchase</button>
            </div>
            <img className="bookImage" src={book.src} alt={book.name} />
          </div>
        );
    }else{
        return(
            <div className="d-flex flex-column align-items-center border col-md-7 col-12 rounded-2">
            <p className="mt-4 d-block d-md-none">Book Not Found Sir? Maybe Next time!</p>
            <img src={notFoundError} alt="notFound" className="d-none d-md-block"/>
            
            </div>
        )
    }
};
export default Book;
