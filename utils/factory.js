import { faker } from '@faker-js/faker'



export function createRandomCategory() {
    return {
        id: faker.datatype.uuid(),
        category_name: faker.finance.accountName(),
        category_type: faker.finance.transactionType(),
    };
}
export const CATEGORIES = faker.helpers.multiple(createRandomCategory, 40);


