import { useEffect } from "react"
import { useState } from "react"

const useSellers = email => {
    const [isSellers, setIsSellers] = useState(false)

    useEffect(() => {
        if (email) {
            fetch(`https://cars-direct-server.vercel.app/users/sellers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsSellers(data.isSellers)
                })
        }
    }, [email])
    return [isSellers]
}
export default useSellers