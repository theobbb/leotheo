export default function FormatData ({data, setData}) {

    const { orders, customers, products, productCategories } = data.ecommerce;

    products.map((product) => {
        product.category = productCategories.find(category => category.id === product.categoryID)
    })

    orders.map((order) => {
        order.items.map((item) => {
            item.item = products.find(product => product.id === item.productID)
        });

        order.statusText = [
            'complete', 
            'pending', 
            'canceled', 
            'rejected'
        ][order.status];

    })

    setData(data);
}