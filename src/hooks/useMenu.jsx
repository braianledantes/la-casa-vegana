import { useEffect, useState } from "react"
import { getCategories, getCompleteMenu, getMenuByCategory, getMenuItemById } from "../services/apiMenu";

export const useCompleteMenu = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getCompleteMenu()
            .then(data => setProducts(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { products, loading, error }
}

export const useMenuItem = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getMenuItemById(id)
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
        getCategories()
            .then(res => setCategories(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { categories, loading, error }
}

export const useMenuCategory = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        getMenuByCategory({ category })
            .then(res => setProducts(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [category])

    return { products, loading, error }
}