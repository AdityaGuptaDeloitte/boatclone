function NavCategory(props){
    return (
        <div class="d-flex flex-row">
            <img src={props.image} width={20} height={20} class="m-1"></img>
            <p class="m-1">{props.category}</p>
        </div> 
    )
}
export default NavCategory;