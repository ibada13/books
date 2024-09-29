'use client';
import withAuth from "../auth/Auth"

const Books = () => { 
    return (<p>welcome to Books</p>);
}
export default withAuth(Books);