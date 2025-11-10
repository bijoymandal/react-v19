import { useState } from "react";
export default function Registration() {

    const [regForm, setRegForm] = useState({
        name: "",
        email: "",
        phone: ""

    });

    const handelChange = (e) => {
        const { name, value } = e.target;
        setRegForm({
            ...regForm,
            [name]: value
        });
    }


    const hanedelSubmitForm = (e) => {
        e.preventDefault();
        console.log("Form Submitted", regForm);
    }
    return (
        <div>
            <h2>Registration Component</h2>
            <form className="flex flex-col w-1/3 gap-4" onSubmit={hanedelSubmitForm}>
                <label>
                    Name:
                    <input type="text" name="name" className="ml-2 border border-gray-400" value={regForm.name} onChange={handelChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" className="ml-2 border border-gray-400" value={regForm.email} onChange={handelChange} />
                </label>
                <label>
                    phone No:
                    <input type="tel" name="phone" className="ml-2 border border-gray-400" value={regForm.phone} onChange={handelChange} />
                </label>
                <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg">Register</button>
            </form>
        </div>
    );
}