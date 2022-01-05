import axios from "axios";


const getData = async (id) => {
    const { data : user } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const {data:post}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    console.log("User :",user,"Post :",post)
}

export default getData