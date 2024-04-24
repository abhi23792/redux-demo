import { get } from "../helpers/ApiHelper";
import { Product } from "../models/Product";

export function GetProduct() : Promise<any> {
    return get("api/product?id=1");
}

export const ProductService = {
    GetProduct
};