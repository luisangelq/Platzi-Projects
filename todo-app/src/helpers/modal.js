import ReactDom from "react-dom";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal");
  return ReactDom.createPortal(children, modalRoot);
};
export default Modal;
