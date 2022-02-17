async function loadRoom() {

  const response = await fetch(`http://localhost:8000/users/`);
  const data = await response.json();
  return data;
}

async function addRoom() {
  const response = await fetch(`http://localhost:8000/add`);
  const data = await response.json();
  return data;
}

async function changeUserName(info, newValue, roomId) {
  const obj = {
    info: info,
    newValue: newValue,
  };
  console.log(roomId);
  fetch(`http://localhost:8000/users/${roomId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

async function getLength() {

  const response = await fetch(`http://localhost:8000/length`);
  const data = await response.json();
  return data;
}

export { loadRoom, changeUserName , addRoom , getLength };
