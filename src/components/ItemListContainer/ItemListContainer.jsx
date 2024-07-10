import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({title}) => {
    return (
        <>
            <div>{title}</div>
            <ItemCount stock={15} initial={0}/>
        </>
  )
}
export default ItemListContainer;