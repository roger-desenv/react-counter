import React, { useState, useEffect } from "react"
import Loading from "../components/Loading"

const Users = () => {
    const [isloading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([]) // Não pode ser undefined, precisa pelo menos ter um array vazio [].
    
    
    //Para fazer pesquisa dos dados no console.log
    /*
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
    })
    */
    
    useEffect(() => {
        
        setIsLoading(true)
        
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            setIsLoading(false)
        })
    
        
    }, [])
    
    return (
        <>
            <Loading visible={isloading} />
            {
                users.map(user => {
                    return (
                        <div>
                        
                        <b>Nome:</b> {user.name}<br />
                        <b>Email:</b> {user.email}<br />
                        <b>Phone:</b> {user.phone}<br />
                        <b>Id:</b> {user.id}<br /><br />
                        
                        </div>
                    )
                })
            }
        </>
    )
}
        
export default Users