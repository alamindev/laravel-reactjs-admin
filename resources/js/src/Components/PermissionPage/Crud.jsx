import React, { useState, useEffect } from "react";
import { InputField } from "../../Utils/Helper";
import Checkbox from "../Checkbox/CheckboxComponent";
export default function Crud(props) {
    let [crudSelect, setcrudSelect] = useState({
        checkboxes: [
            {
                id: 1,
                label: "index",
                checked: true
            },
            {
                id: 2,
                label: "create",
                checked: true
            },
            {
                id: 3,
                label: "read",
                checked: true
            },
            {
                id: 4,
                label: "update",
                checked: true
            },
            {
                id: 5,
                label: "delete",
                checked: true
            }
        ]
    });
    let [tableName, setTableName] = useState({ value: "" });

    const toggleCheckBox = toggledIndex => {
        props.Referance.current.state.errors.permission = ''
        setcrudSelect(prevState => ({
            checkboxes: prevState.checkboxes.map((checkbox, index) => {
                if (index === toggledIndex) {
                    return {
                        ...checkbox,
                        checked: !checkbox.checked
                    };
                } else {
                    return {
                        ...checkbox
                    };
                }
            })
        }));
    };

    const CrudSelect = () => {
        return crudSelect.checkboxes.map(check => {
            if (check.checked) {
                return (
                    <tr key={Math.random()}>
                        <td>{crudName(check.label)} </td>
                        <td>{crudSlug(check.label)} </td>
                        <td>{crudDescription(check.label)} </td>
                    </tr>
                );
            }
        });
    };
    const CheckboxHendle = () => {
        return crudSelect.checkboxes.map((checkbox, index) => (
            <Checkbox
                key={Math.random()}
                id={checkbox.label}
                label={checkbox.label}
                name="crudSelect"
                onChange={() => toggleCheckBox(index)}
                value={checkbox.label}
                checkeds={checkbox.checked && "checked"}
            />
        ));
    };
    const crudName = item => {
        let table = tableName.value;
        return (
            item.substr(0, 1).toUpperCase() +
            item.substr(1) +
            " " +
            table.substr(0, 1).toUpperCase() +
            table.substr(1)
        );
    };
    const crudSlug = item => {
        let table = tableName.value;
        return item.toLowerCase() + "-" + table.toLowerCase();
    };
    const crudDescription = item => {
        let table = tableName.value;
        return (
            "Allow a User to " +
            item.toUpperCase() +
            " a " +
            table.substr(0, 1).toUpperCase() +
            table.substr(1)
        );
    };
    useEffect(() => {
        let checkVal = _.filter(crudSelect.checkboxes, function(o) {
            return o.checked;
        });
        checkVal = _.map(checkVal, "label");
        props.Referance.current.initialValues = {
            ...props.Referance.current.initialValues,
            crudName: tableName,
            permission: checkVal
        };
    }, [crudSelect, tableName]);

    useEffect(() => {
        let value = props.name;
        setTableName({ ...tableName, value });
    }, [props.name]);

    let { handleChange, table_name } = props;

    return (
        <div>
            <div className="card mt-2">
                <div className="card-body">
                    <InputField
                        Label={"Table Name"}
                        Required={"(Required)"}
                        Type={"text"}
                        Placeholder={" Write Your Table name"}
                        onChange={handleChange}
                        value={table_name}
                        name="table_name"
                        id="table_name"
                        errors={props.errors.table_name}
                    />

                    <div className="row">
                        <div className="col-lg-4">
                            {CheckboxHendle()}
                            <span
                                v-if={props.errors.permission}
                                className="invalid-feedback dev__invalid"
                            >
                                {props.errors.permission}
                            </span>
                        </div>
                        <div className="col-lg-8">
                            {tableName.value.length >= 3 && (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Slug</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>{CrudSelect()}</tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
