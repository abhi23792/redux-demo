import { FC, useEffect, useState } from "react";
import { ProductService } from "../services/ProductService";
import { productActions } from "../slice/ProductSlice";
import { useAppDispatch, useAppSelector } from "../store/Store";
import { Product } from "../models/Product";

export const Products: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const products = useAppSelector((state) => state.product.products);
    const appDispatch = useAppDispatch();

    useEffect(() => {
        setIsLoading(true);
        ProductService.GetProduct()
            .then((res) => {
                let updateProducts: Array<Product> = [];
                updateProducts.push(res.data);
                appDispatch(productActions.setProducts(updateProducts));
            })
            .catch((err) => {
                console.log("Could not fetch records", err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <table>
            <thead>
                <tr key={Math.random().toFixed(2)}>
                    <td key={"Id"}>Id</td>
                    <td key={"Name"}>Name</td>
                    <td key={"Description"}>Description</td>
                    <td key={"Price"}>Price</td>
                </tr>
            </thead>
            <tbody>
                {products && products.length > 0 && products.map((product) => {
                    return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}