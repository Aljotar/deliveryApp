import React, { useState, useEffect } from 'react'
import deliveryApi from '../api/deliveryApi'
import { Categoria, CategoriesResponse } from '../interfaces/appInterfaces'

export const useCategories = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [categories, setcCategories] = useState<Categoria[]>([])

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        const resp = await deliveryApi.get<CategoriesResponse>('/categorias');
        setcCategories(resp.data.categorias);
        setIsLoading(false)
    }

    return {
        categories,
        isLoading
    }

}
