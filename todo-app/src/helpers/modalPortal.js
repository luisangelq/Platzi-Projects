import ReactDom from "react-dom";
import styled from "styled-components";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal");
  return ReactDom.createPortal(
    <ModalBackground>{children}</ModalBackground>,
    modalRoot
  );
};

const ModalBackground = styled.div`
  background: rgba(32, 35, 41, 0.8);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export default Modal;
