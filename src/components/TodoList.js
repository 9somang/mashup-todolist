import React from "react";
import styled from "styled-components";
import Todoitem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: gray;
`

function TodoList() {
    return( 
        <TodoListBlock>
            <Todoitem text="프로젝트 생성하기" done={true}></Todoitem>
            <Todoitem text="프로젝트 생성하기" done={true}></Todoitem>
            <Todoitem text="프로젝트 생성하기" done={false}></Todoitem>
            <Todoitem text="프로젝트 생성하기" done={false}></Todoitem>
        </TodoListBlock>
    )
}

export default TodoList;