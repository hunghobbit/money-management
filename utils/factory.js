import { faker } from '@faker-js/faker'
import {  } from 'lodash'


export function createRandomCategory() {
    return {
        id: faker.string.uuid(),
        category_name: faker.finance.accountName(),
        category_type: faker.finance.transactionType(),
    };
}

const CATEGORIES = [];
export const findCategoriesIndexByName = (name, categoriesArray ) => categoriesArray.findIndex((category) => category.category_name === name);    
export const removeCategoryByName = (name, categoriesArray) => categoriesArray.splice(findCategoriesIndexByName(name, categoriesArray), 1);

for (let i = 0; i < 10; i++) {
    const new_category = createRandomCategory();
    CATEGORIES.push(new_category);
}


export  { CATEGORIES }   


