interface TodoItemProps{
    item : string;
    index : number;
    onDeleteItem : (index : number) => void;
}

interface TodoBoardProps{
    todoList : string[];  // 문자열 배열
    deleteItem : (index : number) => void;

}

export type { TodoItemProps, TodoBoardProps};