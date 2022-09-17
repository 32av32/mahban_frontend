let initialState =
    {
        id: 1,
        name: 'Pepsi 0.3',
        images: [
                'https://m.media-amazon.com/images/I/81-IgUyS2OL._SL1500_.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cgQozJzrS0TY2nmjomBxkDYb36vZ1hO8ww&usqp=CAU',
                'https://roscontrol.com/wp-content/uploads/2021/09/493aba3a4a0d493e10f1.jpg',
            ],
        price: '80 rub.',
        stock: 400,
        features: [
            '0.3 ml',
            'blue',
            'original'
        ],
        isFavorite: false
    };

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default productReducer;