import React from 'react'

const Form = (props) => {

    return (
        <div className="block-body">
            {props.errors.name}
            <div className="form-group">
                <label className="form-control-label">Full Name</label>
                <input type="text" placeholder="write your full name" className={props.errors.name ? 'form-control is-invalid' : 'form-control'} name="name" value={props.name}
                    onChange={props.changeHandler} />
                {props.errors.name &&
                    <div className="invalid-feedback">{props.errors.name}</div>}
            </div>
            <div className="form-group">
                <label className="form-control-label">Email</label>
                <input type="text" placeholder="Example:- example@gmail.com" className={props.errors.email ? 'form-control is-invalid' : 'form-control'} name="email"
                    value={props.email}
                    onChange={props.changeHandler} />
                {props.errors.email &&
                    <div className="invalid-feedback">{props.errors.email}</div>}
            </div>
            <div className="form-group">
                <label className="form-control-label">Phone (optional)</label>
                <input type="number" placeholder="" className="form-control" name="phone"
                    value={props.phone}
                    onChange={props.changeHandler}
                />
            </div>
            <div className="form-group">
                <label className="form-control-label">Address (optional)</label>
                <textarea className="form-control" name="address" id="" cols="20" rows="2"
                    value={props.address}
                    onChange={props.changeHandler}
                ></textarea>
            </div>
            <div className="form-group">
                <label className="form-control-label">Password</label>
                <input type="password" placeholder="******" name="password" className={props.errors.password ? 'form-control is-invalid' : 'form-control'} name="password"
                    value={props.password}
                    onChange={props.changeHandler}
                />
                {props.errors.password &&
                    <div className="invalid-feedback">{props.errors.password}</div>}
            </div>
            <div className="form-group">
                <label className="form-control-label">Confirm Password</label>
                <input type="password" name="password_confirmation" placeholder="*****" className={props.errors.c_password ? 'form-control is-invalid' : 'form-control'} name="c_password"
                    value={props.c_password}
                    onChange={props.changeHandler}
                />
                {props.errors.c_password &&
                    <div className="invalid-feedback">{props.errors.c_password}</div>}
            </div>
            <button type="submit" className="btn btn-dark btn-block">Submit</button>
        </div>
    )
}

export default Form
