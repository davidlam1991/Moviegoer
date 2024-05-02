import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadButton from "./UploadButton.jsx";
import Modal from "./Modal.jsx";
import Instruction from "./Instruction.jsx";

import uploadImg from "../assets/img/upload-ticket.png";

export default function UploadCsv() {
  const navigate = useNavigate();
  // const [imdbData, setImdbData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("enteredUsername");

    if (!username) {
      navigate("/", { replace: true });
    }

    window.addEventListener("beforeunload", removeUsername);

    return () => {
      window.removeEventListener("beforeunload", removeUsername);
    };
  }, [navigate]);

  function removeUsername() {
    localStorage.removeItem("enteredUsername");
  }

  // function handleImdbData(imdbDataJson) {
  //   setImdbData(imdbDataJson);
  // }

  function handleModalOpen() {
    setModalIsOpen(true);
  }

  function handleModalClose() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleModalClose}>
        <Instruction onClose={handleModalClose} />
      </Modal>
      <section className="upload-page">
        <div className="upload-container">
          <img src={uploadImg} alt="upload ticket" />
          <UploadButton />
          <button onClick={handleModalOpen} className="instruction-btn">
            How to play
          </button>
        </div>
      </section>
    </>
  );
}
