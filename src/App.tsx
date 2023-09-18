import React,{useState,useRef} from 'react';
//hook 선언부
import './App.css';
import TodoBoard  from './component/TodoBoard';


// 값을 전달시에는 props사용

export function App() {

  const [inputValue , setInputValue] =useState <string> ('');
  const [todoList ,setTodoList] =useState<string[]>([]);
 
  //ref(값이 변해도 화면 전환 x) 의 경우에는 null 인지 아닌지 체크해주는게 좋다 - 제너릭 사용 (태그)
  //const inputEl = useRef(null);
  const inputEl = useRef<HTMLInputElement>(null);
  const content  =inputEl.current;
 
  // 아이템 추가
  //form을 submit 하는 event 의 경우에는 e : React.FormEvent
  const  addItem =(e : React.FormEvent) =>{
        e.preventDefault();
        
        //ref 유무 파악
        if(content){
          if(inputValue != null && inputValue !=''){  
          setTodoList([...todoList ,inputValue]);
          setInputValue('');
          content.focus();
          }else{
            alert("일정을 입력해주세요");
            content.focus();
          }
        }
  };

  // 아이템 삭제
  // splice index 기준 몇번쨰
  // 스프레드 연산자
  const deleteItem = (idx : number ) =>{
    console.log(idx);
    const updateList =[...todoList];
    updateList.splice(idx , 1);
    setTodoList(updateList);
   };
 // 엔터 입력시 제출 및 input 초기화
  const handleKeyDown =(e: React.KeyboardEvent<HTMLInputElement>)=>{  
      if(e.key =='Enter'){
        addItem(e);
      }
  };

  return (

          <div className ='container'>
              <h1>ToDo List</h1>       
            <form onSubmit ={addItem}>         
            <input className={inputValue ? `input_invalid` : `input`} type="text" value ={inputValue} ref ={inputEl} onChange={(e)=> setInputValue(e.target.value)} onKeyDown={handleKeyDown}/>
            <button className='button' type ='submit'>입력</button>
            </form>      
            <TodoBoard todoList = {todoList} deleteItem ={deleteItem}/>
        </div> 

  );
}

export default App;
