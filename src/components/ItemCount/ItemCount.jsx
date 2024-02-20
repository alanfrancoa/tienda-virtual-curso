const ItemCount = ({ max, cantidad, modify }) => {
    const restar = () => {
        if (cantidad > 0) {
            modify(cantidad - 1);
        }
    };

    const sumar = () => {
        if (cantidad < max) {
            modify(cantidad + 1);
        }
    };

    return (
        <div>
            <button className="btn btn-danger m-2" onClick={restar}>➖</button>
            <span>{cantidad}</span>
            <button className="btn btn-success m-2" onClick={sumar}>➕</button>
        </div>
    );
};

export default ItemCount;