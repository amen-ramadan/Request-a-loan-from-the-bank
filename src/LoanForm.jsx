import "./FormStyle.css";
import Modal from "./Modal";

export default function LoanForm() {
  return (
    <div className="flex">
      <form className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input type="text" />

        <label>Phone Number:</label>
        <input type="number" />

        <label>Age:</label>
        <input type="number" />

        <hr />

        <label>Are you an employee?</label>
        <input type="checkbox" />

        <hr />

        <label>Salary</label>
        <select>
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button>Submit</button>
      </form>
      <Modal />
    </div>
  );
}
