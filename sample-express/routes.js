import fetch from  "node-fetch"; //import fetch module for async requests 

const routeHello = () => "Hello Fetch";

const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = await response.json();
    }
    catch (err) {
        return err;
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)

        .join("<br>");
    return names;
};

export {routeHello, routeAPINames}