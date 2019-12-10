import React from "react";
import { InputField } from "../../Utils/Helper";

export default function Basic(props) {
    let {handleChange, slug, name, description} = props
    return (
        <div>
            <div className="card mt-2">
                <div className="card-body">
                    <InputField
                        Label={"Name (Human Readable)"}
                        Required={"*"}
                        Type={"text"}
                        Placeholder={"Example: Create Table"}
                        onChange={handleChange}
                        value={name}
                        name="name"
                        id="name" 
                        errors={props.errors.name}
                    />
                    <InputField
                        Label={
                            "Slug (Cant Not be changed and always lower case and dash) "
                        }
                        Required={"*"}
                        Type={"text"}
                        Placeholder={"Example: create-table"}
                        onChange={handleChange}
                        value={slug}
                        name="slug"
                        id="slug" 
                        errors={props.errors.slug}
                    />
                    <InputField
                        Label={"Description (Optional) "}
                        Required={"*"}
                        Type={"textarea"}
                        Placeholder={"Example: create-table"}
                        onChange={handleChange}
                        value={description} 
                        name="description"
                        id="description" 
                    />
                </div>
            </div>
        </div>
    );
}
