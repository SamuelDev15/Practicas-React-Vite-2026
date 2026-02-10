import { Link } from 'react-router-dom';

function Menu() {
    return (
        <aside>
            <ul>
                <li>
                    <Link to="/triki">Triki</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Menu;
