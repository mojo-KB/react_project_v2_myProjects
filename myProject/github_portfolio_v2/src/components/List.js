function List ( {items} ) {
    return (
        <ul>
        {
            items.map((i) => (
                <li key={i.field}>
                    <span>{i.field}: </span> 
                    {i.value}
                </li>
            ))
        }
        </ul>
    )
}
export default List;

