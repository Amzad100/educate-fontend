import { useEffect, useState } from "react";

const useClass = () => {
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(result => {
                setClasses(result)
                setLoading(false)
            })
    })
    return [classes, loading]
};

export default useClass;