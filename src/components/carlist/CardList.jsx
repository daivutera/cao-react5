import CardItem from '../carditem/CardItem';



function CardList(props) {
    const array=props.dataObject
    if(array.length === 0){
        return <h2>No any products</h2>
    }

    return (
        <div className='card'>
            {array.map(data=>
            <CardItem key={data.id} id={data.id} img={data.image} title={data.title} price={data.price} onDelete={props.onDelete}/>
        ) 
        }
        </div>
    );
}

export default CardList;
