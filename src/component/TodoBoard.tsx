import React from "react"
import TodoItem from "./TodoItem"
import "../App.css"
//props 를 받아올수 있다
//자바스크립트는 무조건 {} 중괄호 사용
// map 과 array함수

interface TodoBoardProps{
    todoList : string[];  // 문자열 배열
    deleteItem : (index : number) => void;

}

function TodoBoard(board : TodoBoardProps){

     return(
        <div className ={board.todoList.length != 0 ? 'itemlist' : '' }>
            {board.todoList.map((item,idx)=> <TodoItem key ={idx} item= {item} index ={idx} onDeleteItem={board.deleteItem}/>)}
        </div>

     )
}
export default TodoBoard;