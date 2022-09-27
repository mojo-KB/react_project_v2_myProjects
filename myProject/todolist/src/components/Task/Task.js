// import './Task.css'
import styled from 'styled-components'


const TaskWrapper = styled.div`
    background: darkgray;
    padding: 20px;
    border-radius: 20px;
    margin: 0% 5% 5% 5%;
`

const Title = styled.h3`
    width: 100%;
    margin: 0;
`

function Task( {
    id, 
    title, 
    body, 
    onDragStart} ) {
    return (
        // <div className="Task-wrapper"  draggable
        // onDragStart={ (e) => onDragStart(e, id)}>
        //     <h3>{ title }</h3>
        //     <p>{body}</p>
        // </div>

        <TaskWrapper draggable
        onDragStart={ (e) => onDragStart(e, id)}> 
           <Title> {title} </Title>
            <p> {body} </p>
        </TaskWrapper>
    )
}
export default Task;