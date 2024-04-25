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

export async function postData(endpoint, pressData) {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pressData),
  };

  await fetch(`${SERVER}/${endpoint}`, request)
    .then((response) => {
      response.json();
      console.log("구독 성공!");
    })
    .catch((error) => console.error("서버와의 통신 중 오류 발생:", error));
}

export async function deleteData(endpoint, pressId) {
  const request = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  await fetch(`${SERVER}/${endpoint}/${pressId}`, request)
    .then((response) => {
      response.json();
      console.log("해지 성공!");
    })
    .catch((error) => console.error("서버와의 통신 중 오류 발생:", error));
}
