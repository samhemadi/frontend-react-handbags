import './App.css'
import CustomButton from "./components/CustomButton.jsx";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";
import Product from './components/Product.jsx';
import Tile from "./components/Tile.jsx";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <CustomButton name={"to the collection"}/>
                <CustomButton name={"shop all bags"}/>
                <CustomButton disabled={true} name={"pre-orders"}/>
            </nav>
            <main>
                <Product
                    name={"Best Seller"}
                    image={bag_1}
                    title={"The handy bag"}
                    price={"€400,-"}
                />
                <Product
                    name={"Best Seller"}
                    image={bag_2}
                    title={"The stylish bag"}
                    price={"€250,-"}
                />
                <Product
                    name={"New collection"}
                    image={bag_3}
                    title={"The simple bag"}
                    price={"€300,-"}
                />
                <Product
                    name={"New collection"}
                    image={bag_4}
                    title={"The trendy bag"}
                    price={"€150,-"}
                />
            </main>
            <footer>
                <Tile
                    title={"THE BRAND"}
                    image={null}
                />

                <Tile
                    image={brand}
                    title={null}
                />

                <Tile
                    image={ourStory}
                    title={null}
                />
                <Tile
                    title={"OUR STORY"}
                    image={null}
                />

            </footer>


        </>
    )
}

export default App
