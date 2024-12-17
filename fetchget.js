async function fetchApi() {
  // fetch try and catch
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // console.log(data);
    const hasil = data.forEach((element) => {
      console.log(
        `No. ${element.id}.\n Title:${element.title}. \n Body:${element.body}`
      );
    });
    // const output = data
    //   .map((user) => `${user.id}. ${user.title}. ${user.body}`)
    //   .join("\n");
    // console.log(output);
  } catch (error) {
    console.log(error);
  }
}
data = fetchApi();
console.log(data);


async function createList(event) {
    event.preventDefault();
    const createBtn = document.querySelector("form button");
    const createBtnText = createBtn.querySelector("p");
    const loader = createBtn.querySelector(".loader");
    const body = {

      title: event.target.titlename.value,
      body: event.target.body.value,
    };
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const request = new Request(url, {
        method: "POST",
        body, // body: body
      });
      createBtn.disabled = true;
      createBtnText.classList.add("hidden");
      loader.classList.remove("hidden");
  
      const response = await fetch(request);
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      console.log(json);
      response.headers.forEach((val, key) => {
        console.log(`${key} = ${val}`);
      });
    } catch (error) {
      console.log(error);
    } finally {
      createBtn.disabled = false;
      createBtnText.classList.remove("hidden");
      loader.classList.add("hidden");
    }
  }