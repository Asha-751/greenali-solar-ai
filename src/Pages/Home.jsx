import ProductsShowcase from "../Components/Productsshowcase";
import About from "../Components/About";
import Services from "../Components/Services";
import WhySolar from "../Components/WhySolar";
import Contact from "../Components/Contact";

function Home() {
    return (
        <>
            <ProductsShowcase />
            <About />
            <Services />
            <WhySolar />
            <Contact />
        </>
    );
}

export default Home;