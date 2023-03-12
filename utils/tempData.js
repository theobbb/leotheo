

export const tempData = {

    ecommerce: {
        productCategories : [
            {
                name: 'indica',
                id: 0,
            },
            {
                name: 'sativa',
                id: 1,
            },
            {
                name: 'hybrid',
                id: 2,
            },
        ],
        // 1000-1007
        products : [
            {
                name: 'Alien Cookies',
                categoryID: 0,
                price: 8.65,
                id: 1000,
                sku: '401.TBB',
                stock: 128,
                sold: 2455,
                color: '#2e7d32',
            },
            {
                name: 'Fire Alien Kush',
                categoryID: 0,
                price: 9.50,
                id: 1001,
                sku: '455.WER',
                stock: 267,
                sold: 3455,
                color: '#a5d6a7',
            },
            {
                name: 'Blissful Wizard',
                categoryID: 0,
                price: 6.35,
                id: 1002,
                sku: '897.WEQ',
                stock: 37,
                sold: 1436,
                color: '#1b5e20',
            },
            {
                name: 'Lemonheads',
                categoryID: 1,
                price: 12.35,
                id: 1003,
                sku: '511.YUU',
                stock: 37,
                sold: 1987,
                color: '#4caf50',
            },
            {
                name: 'Orange Gelato',
                categoryID: 1,
                price: 5.85,
                id: 1004,
                sku: '671.ERB',
                stock: 17,
                sold: 7856,
                color: '#388e3c',
            },
            {
                name: 'Jean Guy',
                categoryID: 1,
                price: 11.65,
                id: 1005,
                sku: '129.YBN',
                stock: 68,
                sold: 145,
                color: '#43a047',
            },
            {
                name: 'Blueberry Pie',
                categoryID: 2,
                price: 6.35,
                id: 1006,
                sku: '967.ASD',
                stock: 76,
                sold: 575,
                color: '#81c784',
            },
            {
                name: 'Snoopy',
                categoryID: 2,
                price: 9.00,
                id: 1007,
                sku: '634.HYU',
                stock: 267,
                sold: 2789,
                color: '#66bb6a',
            },
        ],
        // 2000-2005
        customers: [
            {
                name: 'Robert Baratheon',
                email: 'robert@baratheon.com',
                location: 'Kings Landing',
                totalSpent: 2123,
                id: 2000,
            },
            {
                name: 'Jaime Lannister',
                email: 'jaime@masoeur.cum',
                location: 'Kings Landing',
                totalSpent: 4545,
                id: 2001,
            },
            {
                name: 'Daenerys Targaryen',
                email: 'daenerys@dragon.com',
                location: 'Kings Landing',
                totalSpent: 353,
                id: 2002,
            },
            {
                name: 'Jon Snow',
                email: 'info@snow.com',
                location: 'Kings Landing',
                totalSpent: 166,
                id: 2003,
            },
            {
                name: 'Tyrion Lannister',
                email: 'tyrion@little.me',
                location: 'Kings Landing',
                totalSpent: 11590,
                id: 2004,
            },
            {
                name: 'Eddard Stark',
                email: 'eddard@stark.rip',
                location: 'Kings Landing',
                totalSpent: 1455,
                id: 2005,
            },
        ],
        orders: [
            {
                id: 3000,
                customerID: 2004,
                status: 0,
                items: [
                    {
                        productID: 1001,
                        quantity: 25,
                    },
                    {
                        productID: 1006,
                        quantity: 12,
                    },
                ]
            },
            {
                id: 3001,
                customerID: 2003,
                status: 3,
                items: [
                    {
                        productID: 1003,
                        quantity: 36,
                    },
                    {
                        productID: 1004,
                        quantity: 40,
                    },
                ],
            },
            {
                id: 3002,
                customerID: 2002,
                status: 2,
                items: [
                    {
                        productID: 1000,
                        quantity: 16,
                    },
                    {
                        productID: 1006,
                        quantity: 8,
                    },
                    {
                        productID: 1002,
                        quantity: 17,
                    },
                ],
            },
            {
                id: 3003,
                customerID: 2001,
                status: 1,
                items: [
                    {
                        productID: 1001,
                        quantity: 15,
                    },
                ],
            },
            {
                id: 3004,
                customerID: 2000,
                status: 0,
                items: [
                    {
                        productID: 1004,
                        quantity: 25,
                    },
                    {
                        productID: 1007,
                        quantity: 12,
                    },
                ],
            },
            {
                id: 3005,
                customerID: 2005,
                status: 2,
                items: [
                    {
                        productID: 1003,
                        quantity: 12,
                    },
                    {
                        productID: 1005,
                        quantity: 43,
                    },
                ],
            },
            {
                id: 3006,
                customerID: 2003,
                status: 3,
                items: [
                    {
                        productID: 1000,
                        quantity: 23,
                    },
                    {
                        productID: 1002,
                        quantity: 31,
                    },
                ],
            },
            {
                id: 3007,
                customerID: 2000,
                status: 0,
                items: [
                    {
                        productID: 1005,
                        quantity: 23,
                    },
                    {
                        productID: 1006,
                        quantity: 56,
                    },
                ],
            },
        ],
        // 0-3
        orderStatus: ['complete', 'pending', 'canceled', 'rejected'],
    },
    analytics: {
        mediaType: {
            mobile: 0.64,
            desktop: 0.36,

        },
        traffic: {
            monthly: [234, 256, 237, 189, 245, 236, 289, 276, 298],
            yearly: [89, 124, 67, 86, 98, 134, 167, 222, 234],
        }

    }
    
}