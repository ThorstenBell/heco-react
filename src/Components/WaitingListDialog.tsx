import React from "react";
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
    return (
        <div className='waiting-list-dialog'>
            <div className='waiting-list-card' style={backgroundImg}>
                <div className='waiting-list-content'>
                    <h3>{tool.name}</h3>
                    {tool.description.map((para: string, key: number) => {
                        return <p key={key}>{para}</p>
                    })}
                    {state.succeeded && <div className='buttons'><p className='success'>Submitted Successfully</p>
                        <button type='button' className='btn-cancel' onClick={closeDialog}>Close</button>
                    </div>}
                    {!state.succeeded && <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            Full name
                            <input
                                id="name"
                                type="text"
                                name="name"
                            /></label>
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        <label htmlFor="email">
                            Email Address
                            <input
                                id="email"
                                type="email"
                                name="email"
                            />
                        </label>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <div className='buttons'>
                            <button type='button' className='btn-cancel' onClick={closeDialog}>Cancel</button>
                            <button type="submit" className='btn-confirm' disabled={state.submitting}>
                                Submit
                            </button>
                        </div>

                    </form>}
                </div>
            </div>
        </div>
    )
}

export default WaitingListDialog