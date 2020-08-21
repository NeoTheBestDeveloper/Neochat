import React from 'react';
import s from './FormControl.module.css';

export const FormControl = (Element) => ({ input, meta, ...props }) => {
    let hasError;
    if (Element === "input") {
        hasError = (meta.error !== "Field is required" && meta.error !== undefined) || ((meta.error === "Field is required") && meta.submitFailed);
    } else if (Element === "textarea") {
        hasError = (meta.error !== "Field is required" && meta.error !== undefined) || ((meta.error === "Field is required") && meta.submitFailed && meta.active);
    }

    return <div className={s.formControl + " " + (hasError ? s.error : undefined)}>
        <Element {...input} {...props} />
        <span>{hasError ? meta.error : undefined}</span>
    </div>
}