import fetch from "node-fetch";
export const routeHello = () => {
    return "Hello Fetch";
};
export const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    try {
        const response = await fetch(url);
        const data = (await response.json());
        const names = data
            .map((item) => `id: ${item.id}, name: ${item.name}`)
            .join("<br>");
        return names;
    }
    catch (err) {
        console.error("fetch error", err);
        throw err;
    }
};
