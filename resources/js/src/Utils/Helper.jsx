import React from "react";
import Select from "react-select";

import Swal from 'sweetalert2/src/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'

import { createBrowserHistory } from "history";
/**
 *
 * @param {create browser history} props
 */
export const history = createBrowserHistory();

export function InputField(props) {
    let {
        Type,
        Required,
        Name,
        Id,
        ClassName,
        Hendler,
        Placeholder,
        Value,
        Label,
        ...input
    } = props; 
    return (
        <div>
            <div className="form-group">
                <label className="form-control-label">
                    {Label} <span className="text-danger">{Required}</span>
                </label>
                {Type != "textarea" && (
                    <input 
                        type={Type}
                        placeholder={Placeholder}
                        className={"form-control " + ClassName}
                        name={Name}
                        onChange={Hendler}
                        value={Value}
                        {...input} 
                    />
                )}
                {Type == "textarea" && (
                    <textarea
                        className={"form-control " + ClassName}
                        name={Name}
                        onChange={Hendler}
                        {...input}
                        defaultValue={Value}
                    ></textarea>
                )}
                <span
                    v-if={props.errors}
                    className="invalid-feedback dev__invalid"
                >
                    {props.errors}
                </span>
            </div>
        </div>
    );
}

/*
 * start coding for
 * React Select with props
 */
const dot = (color = "#777") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
        backgroundColor: "transparent",
        borderRadius: 10,
        content: '" "',
        display: "block",
        marginRight: 8,
        height: 10,
        width: 10
    }
});
const colourStyles = {
    control: styles => ({
        ...styles,
        backgroundColor: "#2d3035",
        borderColor: "#777"
    }),
    menu: styles => ({ ...styles, backgroundColor: "#2d3035" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isDisabled
                ? "#2d3035"
                : isSelected
                ? "#343a40"
                : isFocused
                ? "#23272b"
                : "#2d3035",
            color: isDisabled
                ? "#343a40"
                : isSelected
                ? "#777"
                    ? "#777"
                    : "#777"
                : "#777",
            cursor: isDisabled ? "not-allowed" : "default",

            ":active": {
                ...styles[":active"],
                backgroundColor: !isDisabled && (isSelected ? "#777" : "#777")
            }
        };
    },
    indicatorSeparator: styles => ({ ...styles, backgroundColor: "#777" }),
    input: styles => ({ ...styles, ...dot(), color: "#777" }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(), color: "#777" })
};

export function ReactSelect(props) {
    let {
        Value,
        Name,
        ChangeSelect,
        Placeholder,
        Options,
        Label,
        Require,
        isDisabled
    } = props;
    return (
        <div className="form-group">
            <label htmlFor={Name}>
                {Label} <span className="text-danger">{Require}</span>
            </label>
            <Select
                value={Value}
                onChange={ChangeSelect}
                options={Options}
                styles={colourStyles}
                placeholder={Placeholder}
                name={Name}
                isDisabled={isDisabled}
            />
            <span v-if={props.errors} className="invalid-feedback dev__invalid">
                {props.errors}
            </span>
        </div>
    );
}

export const Sweetalert = (callback, title ="Are  You Sure?", text ="You won't be able to revert this!", icon ="warning", successbtn="Delete") =>{
    const MySwal = withReactContent(Swal) 
            const sweetalert = MySwal.mixin({
                customClass: {
                    confirmButton: 'btn custom_success_btn',
                    cancelButton: 'btn custom_cancel_btn'
                },
                buttonsStyling: false
            }) 
            sweetalert.fire({
                title: title,
                text: text,
                icon: icon,
                showCancelButton: true,
                confirmButtonText: successbtn,
                cancelButtonText: 'Cancel',
                reverseButtons: true
            }).then((result) => {
               return callback(sweetalert, result); 
            })
}