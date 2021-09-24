import axios from "axios";

getUser = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
