function DeleteButton(props){
    function deleteThatProduct(){
        console.log('paspaustas mygtukas istrinti')
        props.onDelete(props.id)
        }
    return <button onClick={deleteThatProduct}>Delete</button>;
}

export default DeleteButton;