import React, { useState, useEffect } from "react"
import Loading from "../components/Loading"


const Albums = () => {
    const [isloading, setIsLoading] = useState(false)
    const [albums, setAlbums] = useState([]) // Não pode ser undefined, precisa pelo menos ter um array vazio [].
    
    useEffect(() => {

        setIsLoading(true)

        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            setAlbums(data)
            setIsLoading(false)
        })
        
    }, [])
    
    return (
        <>
            <Loading visible={isloading} />


            {
                albums.map(album => {
                    return (
                        <div>
                        <p>{album.title} - id: {album.id}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
        
        
        
export default Albums
        
        