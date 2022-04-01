import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import {  Link } from "react-router-dom";
import { fetchAllPosts } from "./Api/posts";





export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts()
            .then(({ data }) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                setPosts([]);
            });
    }, [setPosts]);
    
    

    return (
<>

        <div className=" mx-auto mt-4 p-4">

            <Table responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        posts.map((post, index) => {
                            return <>
                                <tr>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td><div>
                                        <button className="btn btn-dark rounded-pill " > <Link className="text-reset text-decoration-none" to={`/post/${post.id}`}>View</Link></button>
                                        <button className="btn btn-light rounded-pill m-3 "> Edit</button>
                                       
                                        </div></td>
                                </tr>
                            </>

                        })
                    }
                   
                </tbody>
            </Table>
        </div>
        </>
    );
}
   