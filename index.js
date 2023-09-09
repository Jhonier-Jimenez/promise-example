function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
      };
      //data = null;

      if (data) {
        // Simulate a successful API response
        resolve(data);
      } else {
        // Simulate an error
        reject("Error: Unable to fetch data");
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Function to display fetched data
function displayData(data) {
  const dataElement = document.getElementById("data");
  dataElement.innerHTML = `
    <p>ID: ${data.id}</p>
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
  `;
}

document.getElementById("fetchButton").addEventListener("click", () => {
  const statusElement = document.getElementById("status");
  statusElement.textContent = "Fetching data...";
  fetchData()
    .then((data) => {
      statusElement.textContent = "Data fetched successfully:";
      displayData(data);
    })
    .catch((error) => {
      statusElement.textContent = `${error}`;
      console.error(error);
    });
});
