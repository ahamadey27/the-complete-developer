const calculate = (a: number, b: number) => a + b;
console.log(calculate(40, 10));

//declare variable test
const weather = "sunny";

function getWeather(weather: string): string {;
    return weather;
}

getWeather(weather);

//JS data types with TS type annotation 
let stringType: string = "string";
let booleanType: boolean = true;
let intType: number = 45;
let floatType: number = 34.5;
let nullType: null = null;
let undefiniedType: undefined = undefined;

//Union type: variables/parameters that have more than one data type
let stringOrNumber: string | number;
stringOrNumber = "string";
stringOrNumber = 23;

//Array Type
let numberArray: number[] = [];
numberArray.push(1);