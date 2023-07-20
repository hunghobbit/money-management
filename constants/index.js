export const DEFAULT_LAYOUT = 'common'
export const APP_NAME = 'Simple Wallet'

let mapDataRoutes = new Map();

mapDataRoutes.set("wallets", "wallets");
mapDataRoutes.set("transactions", "transactions");
mapDataRoutes.set("categories", "categories");

export const DOCUMENTS_API_PATHS = mapDataRoutes;
