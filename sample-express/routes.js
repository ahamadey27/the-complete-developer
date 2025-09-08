import fetch from  "node-fetch"; //import fetch module for async requests 

const routeHello = () => "Hello Fetch"; //create first for existing /hello endpoint

//This route will create an API endpoint page that will list usernames and IDs
const routeAPINames = async () => { //define an async function so we can use await syntax for fetch call
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = await response.json();
    }
    catch (err) {
        return err;
    }
    //define APO endpoint in constant and another variable to store async data (data is scoped within try catch block)
    const names = data 
        .map((item) => `id: ${item.id}, name: ${item.name}`) //.map iterates over data to display in JSON if succeeds 

        .join("<br>"); //join all items with a break tag
    return names;
};

export {routeHello, routeAPINames} //export data under named export 