import React from 'react'
import "./FormInput.scss"

const FormInput = ({ label, ...props }) => {
    return (
        <div className='group'>
            <input className='form-input' {...props} />
            <label
                className={`${props.value.length ? 'shrink' : ""} form-input-label`}
                htmlFor="">{label}
            </label>
        </div>
    )
}

export default FormInput