function Animal(props){

    const {image,name}=props
    return(
    <>
    <div>
            <img
            src={image}
            height={250} 
            alt=""
            />
            
        <h1>Name : {name}</h1>
    </div>
 
    </>
    )
}

export default Animal;