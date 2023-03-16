const reqestURLFetch = "https://intership-liga.ru/tasks";

/* ----------------------------- GET Fetch и async/await ------------------------------------------- */

async function getResponceFetchFunc(url) {
  try {
    const getResponceFetchc = await fetch(url);
    const data = await getResponceFetchc.json();
    if (getResponceFetch.status >= 400) {
      throw new Error(getResponceFetch.status);
    }
    console.log(data);
  } catch (error) {
    console.error(`Что-то пошло не так. Код ошибки: ${error}`);
  }
}

getResponceFetchFunc(reqestURLFetch)
  .then((data) => console.log(data))
  .catch((error) => console.error(`Что-то пошло не так. Код ошибки: ${error}`));

/* ----------------------------- GET ID Fetch и async/await  ----------------------------------------- */

async function getResponceFetchFuncID(url, id) {
  try {
    const getResponceFetchIDc = await fetch(`${url}/${id}`);
    const data = await getResponceFetchIDc.json();
    if (getResponceFetchID.status === 200) {
      console.log(data);
    }
  } catch (error) {
    console.error(`Что-то пошло не так. Код ошибки: ${error}`);
  }
}

getResponceFetchFuncID(1004)
  .then((data) => console.log(data))
  .catch((error) => console.error(`Что-то пошло не так. Код ошибки: ${error}`));

/* ----------------------------- POST Fetch и async/await -------------------------------------------- */

async function postResponceFetch(url, data) {
  try {
    const postResponceFetchc = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return postResponceFetchc.json();
  } catch (error) {
    console.error(`Что-то пошло не так. Код ошибки: ${error}`);
  }
}

const dataPOST = {
  name: "Nikkkaaa",
  info: "Nikkkaaa post 12345",
  isImportant: false,
};

postResponceFetch(reqestURLFetch, dataPOST)
  .then((data) => console.log(data))
  .catch((error) => console.error(`Что-то пошло не так. Код ошибки: ${error}`));

/* ----------------------------- DELETE Fetch и async/await -------------------------------------------- */

async function deleteResponceFetch(url, id) {
  try {
    const deleteResponceFetchc = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error();
  }
}

deleteResponceFetch(reqestURLFetch, 1300)
  .then((data) => сonsole.log("Запись удалена"))
  .catch((error) => console.error(`Что-то пошло не так. Запись не удалена.`));

/* ----------------------------- PATCH Fetch и async/await --------------------------------------------- */

async function patchResponceFetch(url, id) {
  try {
    const patchResponceFetchc = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error(patchResponceFetch.status);
  }
}

const dataPATCH = {
  name: "Nikkkaaa123",
  info: "Nikkkaaa PATCHFetch",
  isImportant: false,
};

patchResponceFetch(reqestURLFetch, 1462)
  .then((data) => console.log(data))
  .catch((error) => console.error(`Что-то пошло не так. Код ошибки: ${error}`));
