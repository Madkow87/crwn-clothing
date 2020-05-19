import SHOP_DATA from './shop.data';

const INITIAL_STATE = { 
    collections: SHOP_DATA
};


const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        //because there is no modifications, we only have default. compare to cart reducer for much more actions.
        default: 
        return state;
    }
};

export default shopReducer;