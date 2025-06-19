const Modal = () => {
    return (
        <>
            <button id="openDialog">Open Modal</button>
            <dialog open>
                <h2>Hola</h2>
                <p>Body Text</p>
                <footer>Footer</footer>
            </dialog>
        </>
    )
}

export default Modal;
