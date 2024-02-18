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
                <CustomButton name={"to the collection"} disabled={false}/>
                <CustomButton name={"shop all bags"} disabled={false}/>
                <CustomButton name={"pre-orders"} disabled={true}/>
            </nav>
            <main>
                <Product
                    label={"Best Seller"}
                    image={bag_1}
                    imageAlt={"picture of The handy bag"}
                    title={"The handy bag"}
                    price={"€400,-"}

                />
                <Product
                    label={"Best Seller"}
                    image={bag_2}
                    imageAlt={"picture of The stylish bag"}
                    title={"The stylish bag"}
                    price={"€250,-"}

                />
                <Product
                    label={"New collection"}
                    image={bag_3}
                    imageAlt={"picture of The simple bag"}
                    title={"The simple bag"}
                    price={"€300,-"}

                />
                <Product
                    label={"New collection"}
                    image={bag_4}
                    imageAlt={"picture of The trendy bag"}
                    title={"The trendy bag"}
                    price={"€150,-"}

                />
            </main>
            <footer>
                <Tile title={"THE BRAND"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugit in ipsa! Alias aliquid atque, cupiditate dolor, eos ex illo incidunt pariatur quas quod soluta suscipit tempora. Omnis, optio, rerum.</p>
                </Tile>
                <Tile image={brand} alt={"brand logo"}/>
                <Tile image={ourStory} alt={"Our Story logo"}/>
                <Tile title={"OUR STORY"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt facilis hic maiores molestiae nulla obcaecati possimus voluptas! Asperiores beatae dolor, fuga itaque nihil perspiciatis quibusdam reiciendis reprehenderit veritatis voluptas.</p>
                </Tile>
            </footer>
        </>
    )
}
export default App
