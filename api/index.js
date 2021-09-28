import axios from "axios";

export const getUser = async () => {
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
