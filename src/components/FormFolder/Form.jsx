
import React, { useState, useEffect } from 'react';
import { Modal } from '../ModalFolder/Modal';
import './form.css';


const Form = () => {

    const [formValue, setFormValue] = useState({ name: '', email: '', password: '', occupation: '', state: '' });
    const [data, setData] = useState({});
    const [modal, setModal] = useState(false);

    //Toggle Modal
    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    };

    //Button Submit
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    };

    //Post data
    const handleFormSubmit = (e) => {
        e.preventDefault();
        toggleModal();

        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return response.json()
        };
        postData('https://frontend-take-home.fetchrewards.com/form', formValue)
            .then((data) => {
                console.log(data)
            });
    };


    //fetching data
    useEffect(() => {
        fetch('https://frontend-take-home.fetchrewards.com/form')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${res.status}`
                    );
                }
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);



    return (
        <>
            {/* Modal */}
            {modal && <Modal />}

            <div className="form"  >
                
                {/* Form */}
                <form className='formInputs' onSubmit={handleFormSubmit} method='post' action='https://frontend-take-home.fetchrewards.com/form'>

                    {/* Title */}
                    <div className='titleDiv'>
                        <h1 className='title'>Registration Form</h1>
                    </div>

                    {/* Labels and inputs for form data */}
                    <div className='allInputs'>
                        
                        <div className='inputFieldDiv'>
                            <label className="label">Name </label>
                            <input className="input" name='name' type='text' onChange={handleInput}
                                value={formValue.name} placeholder="Enter Full Name" required />
                        </div>

                        <div className='inputFieldDiv'>
                            <label className="label">Email </label>
                            <input className="input" name='email' type="email" onChange={handleInput}
                                value={formValue.email} placeholder="Enter Email" required />
                        </div>

                        <div className='inputFieldDiv'>
                            <label className="label">Password </label>
                            <input className="input" name='password' type="password" onChange={handleInput}
                                value={formValue.password} placeholder="Enter Password" required />
                        </div>

                        <div className='inputFieldDiv'>
                            <label>Occupation </label>
                            <select name='occupation' type='text' onChange={handleInput}
                                value={formValue.occupation} required>
                                <option value='' disabled hidden>Choose an occupation</option>
                                {data.occupations?.map((items, index) => (
                                    <option key={index} >{items}</option>
                                ))}
                            </select>
                        </div>

                        <div className='inputFieldDiv'>
                            <label>State </label>
                            <select name='state' type='text' onChange={handleInput}
                                value={formValue.state} required>
                                <option value='' disabled hidden>Choose a state</option>
                                {data.states?.map((items, index) => (
                                    <option key={index} >{items.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button onClick={handleInput} className="btn" type="submit">
                        Submit
                    </button>

                    {/* Instructions */}
                    <p>All fields are required for submission.</p>

                </form>

            </div>
        </>
    );
};


export default Form;