import ItemList from "./ItemList";

const RestaurantCategory= ({data}) => {
    return (
        <div>
            <div>
                <span>{data.tite}</span>
                <span>⬇️</span>
            </div>

            <div>
                <ItemList items={data.itemCards}/>
            </div>

        </div>
    )
}

export default RestaurantCategory;