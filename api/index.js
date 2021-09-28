import axios from "axios";
// const list = "hardcover-nonfiction";
// const apiKey = `0nG5do2caU59G7F2PT1eRQD0RAsaX5Du`;
// const baseUrl = `https://api.nytimes.com/svc/books/v3`;
// const urlList = `${baseUrl}/lists/names.json?api-key=${apiKey}`;

<<<<<<< HEAD
export const getJoybox = async () => {
=======
export const getUser = async () => {
>>>>>>> 0a3e97cc8e0e9cfa36e04ebd9812410001fe3c4c
  try {
    const res = await axios.get(
      `http://joybox.bigsoft.uz/api/crazy/joybox/v1.0.1/products/?page=1&perPage=10&sortKey=popularity&sortDirection=asc`
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.error("Xatolik sodir bo'ldi" + error);
    return { success: false };
  }
};

<<<<<<< HEAD
// export const getUser = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };
=======
export const getProducts = async () => {
  try {
    const response = await axios.get(
      "http://joybox.bigsoft.uz/api/crazy/joybox/v1.0.1/products/?page=1&perPage=10&sortKey=popularity&sortDirection=asc"
    );
    console.log(response);
    return {success:true , data: response.data}
   
  } catch (error) {
    console.error(error);
  }
};

export const setProducts = async () =>{
  const response = await getProducts();
  console.log(res.data);
}

export const getCategories = async () => {
  try {
    const response = await axios.get(
      "http://joybox.bigsoft.uz/api/crazy/joybox/v1.0.1/categories?page=1&perPage=10&nested=true&depth=&parent=0"
    );
    console.log(response);
    return {success:true , data: response.data}
   
  } catch (error) {
    console.error(error);
  }
};
>>>>>>> 0a3e97cc8e0e9cfa36e04ebd9812410001fe3c4c
