// created on own

import { createSelector } from 'reselect';

const SelectShop = state => state.shop;

export const selectCollections = createSelector(
    [SelectShop],
    shop => shop.collections
);

//turn the object back into an array. object.keys. 
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
    createSelector(
    [selectCollections],
    collections =>
    collections = (collections ? collections[collectionUrlParam]: null)
        );