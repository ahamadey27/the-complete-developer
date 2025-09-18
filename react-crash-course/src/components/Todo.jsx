function Todo(props) {
    return (
        <div className="todo-item">
            <h2>{props.task}</h2>
            <button>Delete</button>
        </div>
    )
};

export default Todo;