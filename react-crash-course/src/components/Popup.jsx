function Popup() {
    return (
        <>
            <div className="popup">
                <span>Are you sure?</span>
                <div className="popup__btns">
                    <button className="popup__btn">Confirm</button>
                    <button className="popup__btn popup__btn--cancel">Cancel</button>
                </div>
            </div><div className="backdrop"></div>
        </>
    )
};

export default Popup;