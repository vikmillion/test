function Goods(props) {
    return (
      <div className="goods-block">
        <h3 key={props.title}>{props.title}</h3>
        <p key={props.cost}>{props.cost}</p>
            <img key={props.image }src={props.image} alt={props.title}/>
      </div>
    );
}
export default Goods;