import { list } from "postcss";
import Link from "../MenuLink/Link";

const Navbar = () => {

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/products', name: 'Products', id: 'products' },
        { path: '/product/:id', name: 'ProductDetail', id: 'productDetail' }
      ];   
    return (
        <nav>
            <ul className="md: flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;