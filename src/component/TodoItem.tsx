import React from "react"
import { NumberLiteralType } from "typescript";
import  "./css/TodoItem.css"

export interface TodoItemProps{
    item : string;
    index : number;
    onDeleteItem : (index : number) => void;
}

//react 에서는 class x -> className
// 비구조화 할당 
// function TodoItem({item , index, onDeleteItem} : TodoItemProps){
function TodoItem(item : TodoItemProps){
    //item 
    // const updateItem = (e)=>{
    //     console.log("수정 버튼 입력");
    //    };     
      
     
    const deleteItem =() =>{
        console.log("삭제 버튼 입력");
        item.onDeleteItem(item.index);
    };

    return(
       <>     
       <div className="item">   
             <p>     
            {item.index+1}. {item.item}   
            </p>  
            <button onClick ={deleteItem} aria-label ="삭제"></button>        
       </div>
       </>
    )
}
export default TodoItem;