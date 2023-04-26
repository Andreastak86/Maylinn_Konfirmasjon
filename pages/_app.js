import "@/styles/globals.css";
import Nav from "@/components/navBar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
    return (
        <>
            <main>
                <Nav />
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    );
}
