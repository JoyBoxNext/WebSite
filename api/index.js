import axios from "axios";
// const list = "hardcover-nonfiction";
// const apiKey = `0nG5do2caU59G7F2PT1eRQD0RAsaX5Du`;
// const baseUrl = `https://api.nytimes.com/svc/books/v3`;
// const urlList = `${baseUrl}/lists/names.json?api-key=${apiKey}`;

export const getJoybox = async () => {
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
