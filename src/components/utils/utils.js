import { getData } from "../../api/newsApi.js";

export async function setData(endpoint, setFn) {
  try {
    const data = await getData(endpoint);
    setFn(data);
  } catch (error) {
    console.error(error);
  }
}
