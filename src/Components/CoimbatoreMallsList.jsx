function CoimbatoreMallsList(props) {
    const { items, mallselect } = props;

    const listItems = items.map(item => (
        <li
            key={item.id}
            className="items-center text-center px-12 cursor-pointer"
            onClick={() => mallselect(item)} // Pass the selected mall item here
        >
            <img src={item.image} alt={`${item.name} image`} className="w-60 h-60 rounded" />
            <span>{item.name}</span>
        </li>
    ));

    return (
        <div>
            <ol className="p-10 bg-slate-400 rounded-2xl">
                {listItems.length > 0 ? (
                    <ul className="flex justify-between">{listItems}</ul>
                ) : (
                    <li>No malls available</li>
                )}
            </ol>
        </div>
    );
}

export default CoimbatoreMallsList;
