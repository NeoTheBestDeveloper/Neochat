import React from 'react';
import s from './FormControl.module.css';

export const FormControl = (Element) => ({ input, meta: {error, submitFailed, active}, ...props }) => {
    let hasError;
    if (Element === "input") {
        hasError = (error !== "Field is required" && error !== undefined) || ((error === "Field is required") && submitFailed);
    } else if (Element === "textarea") {
        hasError = (error !== "Field is required" && error !== undefined) || ((error === "Field is required") && submitFailed && active);
    }

    return <div className={s.formControl + " " + (hasError ? s.error : undefined)}>
        <Element {...input} {...props} />
        <span>{hasError ? error : undefined}</span>
    </div>
}