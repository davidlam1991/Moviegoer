import modalDl from "../assets/img/modal-download.png";

export default function Instruction({ onClose }) {
  return (
    <div className="modal-bg">
      <h2 className="modal-h2">INSTRUCTIONS</h2>
      <p className="modal-p">1. Log in to your IMDb account.</p>
      <p className="modal-p">2. Go to the "Your Ratings" page.</p>
      <p className="modal-p">3. Click on the 3-dot menu and choose "Export".</p>
      <img src={modalDl} alt="tutorial" />
      <p className="modal-p">4. Upload the CSV file.</p>
      <div className="modal-button">
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}
