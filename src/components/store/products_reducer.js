let initialState = [
    {
        id: 1,
        name: 'Pepsi 0.3',
        image: 'https://cdn1.ozone.ru/s3/multimedia-i/6357439194.jpg',
        price: '80 rub.',
    },
    {
        id: 2,
        name: 'Fanta 0.5',
        image: 'https://positano.lv/wp-content/uploads/2021/11/fanta-0.5-new.png',
        price: '100 rub.',
    },
];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default productsReducer;