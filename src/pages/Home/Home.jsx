
import Navbar from '../../share/navbar/Navbar';
import Bannar from './Bannar';
import Brands from './Brands';
import Footer from './Footer';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Bannar></Bannar>
           <Brands></Brands>
           <Products></Products>
           <Footer></Footer>
        </div>
    );
};

export default Home;