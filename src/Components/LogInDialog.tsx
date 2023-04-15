import React from "react";
import '../Assets/css/log-in-dialog.css';

interface Props {
    onClose: () => void;
}

const LogInDialog = ({onClose}: Props) => {
    return (
        <div className='log-in-dialog'>
            <form className='log-in-card'>
                <legend>Sign In</legend>
                <label htmlFor="email">
                    Email
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder='Enter your email...'
                    /></label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder='Enter your password...'
                    />
                </label>
                <div className='buttons'>
                    <button
                        type='button'
                        className='btn-cancel'
                        onClick={onClose}
                    >Cancel
                    </button>
                    <button type="submit" className='btn-confirm'>
                        Sign In
                    </button>
                </div>

            </form>
        </div>
    )
}

export default LogInDialog