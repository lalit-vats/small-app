import Footer from "../Pages/Footer";
import Header from "../Pages/Header";


const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;