import { useEffect, useState } from "react"

const useDataKey = (dataKey) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://learners-server-side.vercel.app/${dataKey}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [dataKey])

    return data;
}

export default useDataKey;