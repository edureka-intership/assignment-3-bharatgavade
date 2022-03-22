
// ///
// 1. Create a JavaScript restaurantManager class with the following properties:
// ⮚ "restaurantList" ● Type: Array
// ● Use Case: This will contain a list of restaurant object, with the restaurant
// name,address, and city
// ⮚ “printAllRestaurantNames" ● Type: function
// ● Arguments: none
// ● Use Case: This will print the name of all restaurant names in
// restaurantListonconsole
// ⮚ "filterRestaurantByCity" ● Type: function
// ● Argument: "city" type: "string" ● Use Case: This will filter the restaurant on the basis of the city provided in
// arguments"
// ///

class restaurantManager {
    restaurantList = [{
        id: 1,
        restaurantName: 'KFC',
        address: 'Anand Vihar',
        city: 'Delhi'
    },
    {
        id: 2,
        restaurantName: 'Domino',
        address: 'Savita Vihar',
        city: 'Delhi'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Civil Lines',
        city: 'Pune'
    },
    {
        id: 4,
        restaurantName: 'Subway',
        address: 'Cantonment',
        city: 'Mumbai'
    }]

    printAllRestaurantNames = () => {
        return this.restaurantList.map(restaurant => restaurant.restaurantName);
    }

    filterRestaurantByCity = (cityName) => {
        return this.restaurantList.filter(restaurant => restaurant.city == cityName);
    }
}

const restaurantObj = new restaurantManager();
restaurantObj.printAllRestaurantNames();       // ['KFC', 'Domino', 'Burger King']
restaurantObj.filterRestaurantByCity('Pune');  // [{},{}]