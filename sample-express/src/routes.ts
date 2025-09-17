import fetch from "node-fetch";

export const routeHello = (): string => {
    return "Hello Fetch";
};

export const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    try {
    const response = await fetch(url);
    const data = (await response.json()) as any;
        const names = data
            .map((item: any) => `id: ${item.id}, name: ${item.name}`)
            .join("<br>");
        return names;
    } catch (err) {
        console.error("fetch error", err);
        throw err;
    }
};