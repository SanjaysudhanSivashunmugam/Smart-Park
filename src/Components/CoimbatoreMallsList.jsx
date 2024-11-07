function CoimbatoreMallsList(props) {
    const listItems = props.items.map(item => (
        <li key={item.id} className="items-center text-center px-12 ">
            <img src={item.image} alt={`${item.name} image`} className="w-60 h-60 rounded" />
            <span>{item.name}</span>
        </li>
    ));

    return (
        <div>
            <ol className="flex justify-between p-10 bg-slate-400 rounded-2xl ">
                {listItems.length > 0 ? listItems : <li>No malls available</li>}
            </ol>
        </div>
    );
}

export default CoimbatoreMallsList;
