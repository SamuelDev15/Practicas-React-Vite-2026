import { useState } from 'react';

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return (
        <form>
            <input
                type="text"
                value={filterText} placeholder="Buscar"
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <br />
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Mostrar solo productos en stock
            </label>
        </form>
    );
}

const PRODUCTS = [
    { category: "Frutas", price: "$1000", stocked: true, name: "Manzana" },
    { category: "Frutas", price: "$1000", stocked: true, name: "Fruta del dragón" },
    { category: "Frutas", price: "$2000", stocked: false, name: "Maracuyá" },
    { category: "Vegetales", price: "$2000", stocked: true, name: "Espinaca" },
    { category: "Vegetales", price: "$4000", stocked: false, name: "Calabaza" },
    { category: "Vegetales", price: "$1000", stocked: true, name: "Guisantes" }
];

export default function ProductsPage() {
    return (
        <div className="products-container">
            <h1>Catálogo de Productos</h1>
            <FilterableProductTable products={PRODUCTS} />
        </div>
    );
}
