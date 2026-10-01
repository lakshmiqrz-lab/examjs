//  const devices = [
//     {
//         id: 1, 
//         name: "iPhone 14", 
//         brand: "Apple", 
//         price: 999, 
//         inStock: 'yes', 
//         features: {
//             storage: "128GB", 
//             batteryLife: "20"
//         }
//     },
//     {
//         id: 2, 
//         name: "Galaxy S21", 
//         brand: "Samsung", 
//         price: 799, 
//         inStock: 'No', 
//         features: {
//             storage: "256GB", 
//             batteryLife: "22 "
//         }
//     },
//     {
//         id: 3, 
//         name: "Pixel 7", 
//         brand: "Google", 
//         price: 599, 
//         inStock: 'yes', 
//         features: {
//             storage: "128GB", 
//             batteryLife: "24 "
//         }
//     },
//     {
//         id: 4, 
//         name: "Surface Laptop 4", 
//         brand: "Microsoft", 
//         price: 1499, 
//         inStock: 'yes', 
//         features: {
//             storage: "512GB", 
//             batteryLife: "15 "
//         }
//     },
//     {
//         id: 5, 
//         name: "MacBook Air", 
//         brand: "Apple", 
//         price: 999, 
//         inStock: 'No', 
//         features: {
//             storage: "256GB", 
//             batteryLife: "18 "
//         }
//     }
// ];
// 1.Print all device names.
// 2.Print all device names whose price is greater than $800.
// 3.Print out-of-stock devices.
// 4.Find the device names with battery life greater than 20 hours.
// 5.Calculate the total revenue generated when all available devices are sold out.

//--------------------------------------------------------------------------------------

// 1.Print all device names.
// devices.forEach(device=>console.log(device.name));
// 2.Print all device names whose price is greater than $800.
// devices.filter(device=>device.price> 800).forEach(device=>console.log(device.name));
// 3.Print out-of-stock devices.
// devices.filter(device=>device.inStock== "No").forEach(device=>console.log(device.name));