import Hero from "../Components/Hero";
import ProductsShowcase from "../Components/Productsshowcase";
import About from "../Components/About";
import Services from "../Components/Services";
import Blog from "../Components/Blog";
import WhySolar from "../Components/WhySolar";
import Contact from "../Components/Contact";
function Home() {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <section id="products">
                <ProductsShowcase />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="services">
                <Services />
            </section>

            <section id="blog">
                <Blog />
            </section>

            <section id="why-solar">
                <WhySolar />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </>
    );
}

export default Home;