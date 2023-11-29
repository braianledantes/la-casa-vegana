import { useEffect, useState } from "react"
import { getCategories, getCompleteMenu, getMenuByCategory, getMenuItemById } from "../services/apiMenu";

export const useCompleteMenu = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getCompleteMenu()
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}

export const useMenuItem = (id) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getMenuItemById(id)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [id])

    return { data, loading, error }
}

export const useAllCategories = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getCategories()
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}

export const useMenuCategory = (category) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        getMenuByCategory({ category })
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [category])

    return { data, loading, error }
}