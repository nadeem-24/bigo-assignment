import axios from "axios";


  /**
   * Get all posts
   * @returns
   */
  export const getAllProducts = () => {
    return axios.get('https://dummyjson.com/products');
  }

  /**
   * Get By Id
   * @returns
   */
 export const getProductsById =() => {
    return axios.get("https://jsonplaceholder.typicode.com/posts/1");
  }

  /**
   *To Add a Post
   * @returns
   */
export const addProduct =async()=> {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return res;
  }

  /**
   *To Update a Post
   * @returns
   */
  export const  updateProduct=  async() => {
    const res = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    return res;
  }

  export const deleteProduct =async()=> {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );
    return res;
  }
