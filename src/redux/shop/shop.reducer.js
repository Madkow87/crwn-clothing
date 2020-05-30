//import SHOP_DATA from './shop.data';

import ShopActionTypes from './shop.types';

const INITIAL_STATE = { 
    collections: null
};


const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        //because there is no modifications, we only have default. compare to cart reducer for much more actions.
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        
        
        default: 
        return state;
    }
};

export default shopReducer;