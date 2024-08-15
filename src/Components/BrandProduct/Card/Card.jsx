

const Card = ({data}) => {
    const {productName} = data;
    console.log(data,productName);
    return (
        <div>
            <h3>Name: {productName}</h3>
            
        </div>
    );
};

export default Card;