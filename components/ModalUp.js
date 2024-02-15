import styles from "../styles/Modal.module.css";
import Modal from "react-modal";
import { useState } from "react";

function ModalUp(props) {
  // const [modallsOpen, setlsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "20%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal(props) {
    setlsOpen(true);
  }
  // function closeModal() {
  //   setlsOpen(false);
  // }

  return (
    <div>
      <p>Hello Word</p>
    </div>
  );
}
export default ModalUp;
