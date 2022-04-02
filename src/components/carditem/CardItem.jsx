import DeleteButton from './../deleteButton/DeleteButton';

function CardItem(props){
    return <div className='item'>
       <img src={props.img} alt="food"></img>
       <p>{props.title}</p>
       <h3>€{props.price}</h3>
       <DeleteButton id={props.id} onDelete={props.onDelete}/>
    </div>;
}

export default CardItem;