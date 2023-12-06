import { useEffect, useState } from "react"
import { getAllCategories, getAllProducts, getProductsByCategory, getProductById } from "../services/apiMenu";

export const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        getAllProducts()
            .then(data => setProducts(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { products, loading, error }
}

export const useProduct = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        getProductById(id)
            .then(res => setProduct(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [id])

    return { product, loading, error }
}

export const useAllCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        getAllCategories()
            .then(res => setCategories(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { categories, loading, error }
}

export const useProductsByCategory = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        getProductsByCategory({ category })
            .then(res => setProducts(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [category])

    return { products, loading, error }
}