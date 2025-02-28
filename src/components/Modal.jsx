import {createPortal} from "react-dom";
import {forwardRef, useImperativeHandle, useRef} from "react";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed ">
            {children}
            <form method="dialog" className="mt-4 text-right">
               <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;