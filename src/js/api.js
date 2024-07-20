export const API_URL = "https://knotty-shade-case.glitch.me";

const fetchData = async (endpoint, option = {}) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, option);
        if (!response.ok) throw new Error(response.status);
        return await response.json();
    } catch (error) {
        console.error(`Ошибка запроса ${error}`)
    }
};

export const fetchProductsByCategory = (category) => 
    fetchData(`/api/products/category/${category}`);
    
//     {
//     try {
//       const response = await fetch(`${API_URL}/api/products/category/${category}`,
//       );

//     if (!response.ok) {
//         throw new Error(response.status);
//     }

//     const products = await response.json();
//     return products;
//     } catch (error) { 

//     }
// };

export const fetchCartItems = async (ids) => 
    fetchData(`/api/products/list/${ids.join(",")}`);
    
//     {
//     try {
//         const response = await fetch(
//             `${API_URL}/api/products/list/${ids.join(",")}`,
//         );

//         if (!response.ok) {
//             throw new Error (response.status);
//         }

//         return await response.json();
//     } catch (error) {
//         console.error(`Ошибка запроса товаров для корзины: ${error}`);
//         return [];
//     }
// };


export const submitOrder = async (storeId, products) => 
        fetchData(`/api/orders`, { 
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ storeId, products }),
        });
            

       

    
    
//     {
//     try {
//         const response = await fetch(`${API_URL}/api/orders`, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": 'application/json',
//             },
//             body: JSON.stringify({ storeId, products }),
//         });

//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         const { orderId } = await response.json();
//     } catch (error) {
//         console.error(`Ошибка оформления заказа: ${error}`);
//     }
// };
