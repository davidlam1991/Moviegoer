export default function Title() {
    const username = localStorage.getItem("enteredUsername")

  return (
    <div className="item-title">
      <p className="item-username">{username}'s</p>
      <p>CINE</p>
      <p>INSIGHT</p>
    </div>
  );
}
