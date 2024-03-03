import "./FormStyle.css";
import { useState } from "react";
import Modal from "./Modal";

export default function LoanForm() {
  const [errorMassage, setErrorMassage] = useState(null);
  const [loneInputs, setLoneInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmploy: false,
    salaryRange: "less than 500$",
  });

  const [showModel, setShowModel] = useState(false);

  const btnIsDisable =
    loneInputs.name == "" ||
    loneInputs.age == "" ||
    loneInputs.phoneNumber == "";

  function handleFormSubmit(event) {
    setErrorMassage(null); // هذا بمثابة تصفير للستيت الخاصة بارسال الاخطاء ك بروب للموديل لانه اذا لم يتم تصفيرها .. عند تعبئة بيانات خاطئة وارسال الفورم والرجوع عن الخطأ وتصحيح البيانات فإنه لايتم حذف رسالة الخطأ
    event.preventDefault();

    const { age } = loneInputs;

    if (age < 18 || age > 100) {
      setErrorMassage("the age is not allowed");
    }
    const { phoneNumber } = loneInputs;
    if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMassage("phone number formate is incorrect");
    }
    setShowModel(true);
  }

  function handleDivClick() {
    if (showModel) {
      setShowModel(false);
    }
  }

  return (
    <div className="flex" onClick={handleDivClick}>
      <form className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input
          type="text"
          value={loneInputs.name}
          onChange={(event) => {
            setLoneInputs({ ...loneInputs, name: event.target.value });
          }}
        />

        <label>Phone Number:</label>
        <input
          type="number"
          value={loneInputs.phoneNumber}
          onChange={(event) => {
            setLoneInputs({ ...loneInputs, phoneNumber: event.target.value });
          }}
        />

        <label>Age:</label>
        <input
          type="number"
          value={loneInputs.age}
          onChange={(event) => {
            setLoneInputs({ ...loneInputs, age: event.target.value });
          }}
        />

        <hr />

        <label>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loneInputs.isEmploy}
          onChange={(event) => {
            setLoneInputs({ ...loneInputs, isEmploy: event.target.checked });
          }}
        />

        <hr />

        <label>Salary</label>
        <select
          value={loneInputs.salaryRange}
          onChange={(event) => {
            setLoneInputs({ ...loneInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          className={btnIsDisable ? "disabled" : ""}
          disabled={btnIsDisable}
          onClick={handleFormSubmit}
          // style={
          //   btnIsDisable
          //     ? { backgroundColor: "green" }
          //     : {}
          // }
        >
          Submit
        </button>
      </form>
      <Modal isVisible={showModel} errorMassage={errorMassage} />
    </div>
  );
}
