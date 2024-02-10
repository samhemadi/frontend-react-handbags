function Tile(props) {
    return (
        <section>
            {props.image == null ? <> <h2>{props.title}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut earum laudantium maxime non officia
                        temporibus
                        ullam ut voluptatibus. Earum hic minima quo veniam voluptate? Accusamus consectetur consequuntur,
                        eveniet ex
                        modi mollitia, necessitatibus nesciunt nisi porro sed similique sit suscipit tenetur.</p></>
                :
                <img src={props.image}/>}

        </section>
    );
}

export default Tile;