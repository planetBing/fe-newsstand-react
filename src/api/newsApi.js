const SERVER = process.env.REACT_APP_SERVER;

export async function getData(endpoint) {
  const request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = await fetch(`${SERVER}/${endpoint}`, request).then((response) =>
    response.json()
  );

  return data;
}
