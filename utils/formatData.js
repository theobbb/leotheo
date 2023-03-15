export default function FormatData ({data, setData}) {

    const { orders, customers, products, productCategories } = data.ecommerce;
    
    products.map((product) => {
        product.category = productCategories.find(category => category.id === product.categoryID);

        const productSales = [];

        const delta = 10;
        let lastValue = Math.random() * delta + delta*3;

        for (let i = 0; i < 12; i++) {
            const newValue = lastValue + Math.random() * delta - delta/2;
            const clampedValue = Math.min(Math.max(newValue, delta*2), delta*10);
            productSales.push(clampedValue);
            // set the new value as the last value for the next iteration
            lastValue = clampedValue;
        }
        data.analytics.products[product.id] = productSales;
    })

    orders.map((order, index) => {
        
        order.items.map((item) => {
            item.item = products.find(product => product.id === item.productID);
            const total = item.item.price * item.quantity;
            item.total = total.toFixed(2);
        });
        let orderTotal = 0;
        for (let i = 0; i < order.items.length; i++) {
            const price = order.items[i].item.price;
            orderTotal += price * order.items[i].quantity;
        }
        
        order.total = orderTotal.toFixed(2);

        order.statusText = [
            'complete', 
            'pending', 
            'canceled', 
            'rejected'
        ][order.status];

        const date = getDate(index);

        order.date = date.date;
        order.shortDate = date.shortDate;

    })
    for (let i = 0; i < orders.length; i++) {
        const lastIndex = orders.length - 1;
        const prevIndex = i === 0 ? lastIndex : i - 1;
        const nextIndex = i === lastIndex ? 0 : i + 1;
        
        orders[i].prev = orders[prevIndex].id;
        orders[i].next = orders[nextIndex].id;
        
    }

    



    setData(data);
}

const getDate = (index) => {
    let daysAgo = 0;
    if (index == 0) daysAgo = 0;
    if (index == 1) daysAgo = 0;
    if (index == 2) daysAgo = 1;
    if (index == 3) daysAgo = 3;
    if (index == 4) daysAgo = 6;
    if (index > 4) daysAgo = index * 2;

    const now = new Date();
    const orderDate = new Date(now.setDate(now.getDate() - daysAgo));
    orderDate.setHours(Math.floor(Math.random() * 24));
    orderDate.setMinutes(Math.floor(Math.random() * 60));
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[orderDate.getMonth()];
    const date = orderDate.getDate();
    
    const shortDate = `${month} ${date}`;

    //for single
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    const longDate = orderDate.toLocaleString('en-US', options);
    return {date: longDate, shortDate};
}