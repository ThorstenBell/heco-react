import React, {ChangeEventHandler, useState} from "react";
import '../Assets/css/waiting-list-dialog.css'
import {ITool} from "../Interfaces";
import {useForm, ValidationError} from '@formspree/react';
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

interface Props {
    tool: ITool;
    closeDialog: () => void;
}

const WaitingListDialog = ({tool, closeDialog}: Props) => {
    const {executeRecaptcha} = useGoogleReCaptcha();

    const [state, handleSubmit] = useForm(tool.link || "", {
        data: {"g-recaptcha-response": executeRecaptcha}
    });
    const backgroundImg: { backgroundImage: string } = {
        backgroundImage: `url(${tool.image})`,
    };
    const handleClick = (event: any) => {
        if (event.target.classList.value === "waiting-list-dialog") {
            closeDialog();
        }
    }

    const [formValid, setFormValid] = useState(false)

    const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement;
        const element = document.getElementById(target.id);

        if (target.value.length > 0) {
            element?.classList.add('has-input');
        } else {
            element?.classList.remove('has-input');
        }

        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        setFormValid(nameValue.length > 0 && emailValue.length > 0 && emailInput.checkValidity())
    };


    return (
        <div className='waiting-list-dialog' onClick={handleClick}>
            <div className='waiting-list-card' style={backgroundImg}>
                <div className='waiting-list-content'>
                    <div>
                        <h3>{tool.name}</h3>
                        {tool.description.map((para: string, key: number) => {
                            if (state.succeeded && tool.description.length === key+1) {
                                return <p key={key}></p>
                            }
                            return <p key={key}>{para}</p>
                        })}
                        {state.succeeded && <div className='buttons'><p className='success'>Submitted Successfully</p>
                            <button type='button' className='btn-confirm' onClick={closeDialog}>Close</button>
                        </div>}
                        {!state.succeeded && <form onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                <span>Full name</span>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={handleInput}
                                /></label>
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <label htmlFor="email">
                                <span>Email Address</span>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={handleInput}
                                />
                            </label>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <div className='buttons'>
                                <button type='button' className='btn-cancel' onClick={closeDialog}>Cancel</button>
                                {formValid && <button type="submit" className='btn-confirm' disabled={state.submitting}>
                                    Submit
                                </button>}
                                {!formValid &&
                                    <button title="Please enter valid details" type="button" className='btn-disabled'>
                                        Submit
                                    </button>}
                            </div>

                        </form>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingListDialog