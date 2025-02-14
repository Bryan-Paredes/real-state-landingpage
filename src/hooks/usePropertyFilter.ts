import { useState } from "react";
import { DataProperties, dataProperties } from "@/lib/data-properties";

export function usePropertyFilter() {
    const [properties, setProperties] = useState<DataProperties[]>(dataProperties)
    const [filter, setFilter] = useState<boolean>(false)

    const sortByPrice = () => {
        const sorted = [...dataProperties].sort((a, b) => a.precio - b.precio)
        setProperties(sorted)
        setFilter(true)
    }

    const resetFilter = () => {
        setProperties(dataProperties)
        setFilter(false)
    }

    return { properties, filter, sortByPrice, resetFilter }
}