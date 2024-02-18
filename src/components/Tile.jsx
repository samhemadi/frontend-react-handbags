function Tile({ image, alt, title , children }) {
    return (
        <section>
            {image && <img src={image} alt={alt}/>}
            <h2>{title}</h2>
            {children}

        </section>
    );
}

export default Tile;