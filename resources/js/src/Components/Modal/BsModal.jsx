import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const BsModal = (props) => {
    const { children, FooterBtnTxt, FooterBtnCancel, Title, className, ButtonLabel } = props;

    return (
        <div>
            <Button className={props.btnClassName} onClick={props.onClick()}>{ButtonLabel}</Button>
            <Modal  isOpen={props.Modal} toggle={props.onClick()} className={className}>
                <ModalHeader toggle={props.onClick()}>{Title}</ModalHeader>
                <form onSubmit={props.SubmitData()}>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary" >{FooterBtnTxt}</Button>
                        <Button type="button" color="secondary" onClick={props.onClick()}>{FooterBtnCancel}</Button>
                    </ModalFooter>
                </form>
            </Modal>
        </div>
    );
}

export default BsModal;