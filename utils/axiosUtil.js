import axios from "axios";


  /**
   * Get all Products
   */
  export const getAllProducts = () => {
    return axios.get('https://dummyjson.com/products');
  }

  /**
   * Get By Product Id
   */
 export const getProductsById =(productId) => {
    return axios.get(`https://dummyjson.com/products/${productId}`);
  }

  /**
   *To Add a Product
   *! data required
   */
export const addProduct =async(data)=> {
    const res = await axios.post("https://dummyjson.com/products/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return res;
  }

  /**
   *To Update a Product
   */
  export const  updateProduct=  async(productId) => {
    const res = await axios.put(
      `https://dummyjson.com/products/${productId}`,
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

  export const deleteProduct =async(productId)=> {
    const res = await axios.delete(
      `https://dummyjson.com/products/${productId}`,
      {
        method: "DELETE",
      }
    );
    return res;
  }
