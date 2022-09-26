import Lane from '../../components/Lane/Lane'
import './Board.css'
// import { useState, useEffect } from 'react' 
import useDataFetching from '../../hooks/useDataFetching';

const lanes = [
    { id: 1, title: 'To Do'},
    { id: 2, title: 'In Progress'},
    { id: 3, title: 'Review'},
    { id: 4, title: 'Done'}
];


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


    const [loading, error, tasks] = useDataFetching('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks');
    
        
    return (
        <div className="Board-wrapper">
            {lanes.map( (lane)=> (
                <Lane 
                key={lane.id} 
                title={lane.title} 
                loading={loading}
                error={error}
                tasks={tasks.filter( (task)=> task.lane === lane.id)}
                
                />
            ))}
        </div>
    )
}
export default Board;