const reqestURLXML = "https://intership-liga.ru/tasks";

/* ----------------------- GET XMLHttpRequest на промисах ----------------------------------- */

function getResponce(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.status);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => reject(xhr.status);
    xhr.send();
  });
}

getResponce(reqestURLXML)
  .then((data) => console.log(data))
  .catch((error) => console.error(`Что-то пошло не так. Код ошибки: ${error}`));

/* ----------------------- GET ID XMLHttpRequest на промисах  --------------------------------- */

function getResponceID(url, id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${url}/${id}`);
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(Error(xhr.status));
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => reject(xhr.status);
    xhr.send();
  });
}

getResponceID(reqestURLXML, 1766)
  .then((data) => console.log(data))
  .catch((error) => console.error(`Что-то пошло не так. Код ошибки: ${error}`));

/* ----------------------------- POST XMLHttpRequest на промисах ------------------------------ */

function postResponceXML(url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(Error(xhr.status));
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => reject(xhr.status);
    xhr.send(JSON.stringify(data));
  });
}

const dataPOST = {
  name: "Nikkkaaa",
  info: "Nikkkaaa postXMsadL 123451231231231231",
  isImportant: false,
};

postResponceXML(reqestURLXML, data)
  .then((data) => console.log(data))
  .catch((error) => console.error(`Что-то пошло не так. Код ошибки: ${error}`));

/* ----------------------------- DELETE XMLHttpRequest на промисах ---------------------------- */

function deleteResponceXML(url, id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `${url}/${id}`);
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(Error(xhr.status));
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => reject(xhr.status);
    xhr.send();
  });
}

deleteResponceXML(reqestURLXML, 1234)
  .then(console.log("Запись удалена"))
  .catch((error) => console.error(`Что-то пошло не так. Код ошибки: ${error}`));

/* ----------------------------- PATCH XMLHttpRequest на промисах ---------------------------- */

function patchResponceXML(url, id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", `${url}/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(Error(xhr.status));
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => reject(xhr.status);
    xhr.send(JSON.stringify(data));
  });
}

const dataPATCH = {
  name: "Nikkkaaa123",
  info: "Nikkkaaa PATCH",
  isImportant: false,
};

patchResponceXML(reqestURLXML, 1766)
  .then((data) => console.log(data))
  .catch((error) => console.error(`Что-то пошло не так. Код ошибки: ${error}`));
