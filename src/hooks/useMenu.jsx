import { useEffect, useState } from "react"
import { getCompleteMenu, getMenuByCategory, getMenuItemById } from "../services/apiMenu";

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
    }, [])

    return { data, loading, error }
}

export const useMenuCategory = (category) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getMenuByCategory(category)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}