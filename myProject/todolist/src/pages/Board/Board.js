import Lane from '../../components/Lane/Lane'
import './Board.css'
import { useState, useEffect } from 'react' 
import useDataFetching from '../../hooks/useDataFetching';


const lanes = [
    { id: 1, title: 'To Do'},
    { id: 2, title: 'In Progress'},
    { id: 3, title: 'Review'},
    { id: 4, title: 'Done'}
];


function onDragStart(e, id) {
    e.dataTransfer.setData('id', id)
}

function onDragOver(e) {
    e.preventDefault();
}


function Board() {
    /*
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    useEffect( ()=> {
        async function fetchData() {
            try {
                const tasks = await fetch(
                `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`
                )
            
            const result = await tasks.json();
            
            if (result) {
                setTasks(result);
                setLoading(false);
            }

            } catch (e) {
                setLoading(false)
                setError(e.message)
            }
        }
    
        fetchData();

    }, []);
    */


    const [loading, error, data] = useDataFetching('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks');
    
    const [tasks, setTasks] = useState([]);

    useEffect( ()=> {
        setTasks(data);
    }, [data]);


    function onDrop(e, laneId) {
        const id = e.dataTransfer.getData('id');

        const updatedTasks = tasks.filter( (task) => {
            if (task.id.toString() === id) {
                task.lane = laneId;
            }
            return task;
        })
        
        setTasks(updatedTasks);
    }
    return (
        <div className="Board-wrapper">
            {lanes.map( (lane)=> (
                <Lane 
                key={lane.id} 
                laneId={lane.id}
                title={lane.title} 
                loading={loading}
                error={error}
                tasks={tasks.filter( (task)=> task.lane === lane.id)}
                onDragStart = {onDragStart}
                onDragOver = {onDragOver}
                onDrop={onDrop}
                />
            ))}
        </div>
    )
}
export default Board;