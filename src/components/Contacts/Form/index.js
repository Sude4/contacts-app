import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form(addContact, contacts) {
  const [form, setForm] = useState(initialFormValues);

useEffect(() => {
  setForm(initialFormValues);
}, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);


  };


  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {/* {" "} */}
          <input
            name="fullname"
            placeholder="Fullname"
            value={form.fullname}
            onChange={onChangeInput}
          ></input>
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={onChangeInput}
          ></input>
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;