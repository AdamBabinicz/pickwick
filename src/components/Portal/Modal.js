import ReactDOM from "react-dom";
import "./modal.scss";
import Close from "./times-solid.svg";

const Modal = ({ show, close, title, children }) => {
  return ReactDOM.createPortal(
    <>
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        onClick={() => close()}
      >
        <div className="modalX" onClick={(e) => e.stopPropagation()}>
          <header className="modalHeader">
            <h3 className="modalHeaderTitle">{title}</h3>
            <button className="closeX" onClick={() => close()}>
              <img src={Close} alt="close" />
            </button>
          </header>
          <main className="modalContent">{children}</main>
          <footer className="modalFooter">
            {/* <button className="modalClose" onClick={() => close()}>
              Zamknij
            </button> */}
            {/* <button className="submit">Submit</button> */}
          </footer>
        </div>
      </div>
    </>,
    document.getElementById("modalX")
  );
};

export default Modal;
