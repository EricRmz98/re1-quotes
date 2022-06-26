const ReRandomizeBtn = ({color, reRandomize}) => {
    return (
        <button onClick={reRandomize} className='reload-btn' style={{ background: `${color}` }}><i className="reload-icon fa-solid fa-arrows-rotate"></i></button>
    )
};

export default ReRandomizeBtn;