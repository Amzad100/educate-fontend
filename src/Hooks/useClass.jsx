import { useEffect, useState } from "react";

const useClass = () => {
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://educate-server-amzad100.vercel.app/class')
            .then(res => res.json())
            .then(result => {
                setClasses(result)
                setLoading(false)
            })
    })
    return [classes, loading]
};

export default useClass;