import axios, {
    AxiosResponse,
    AxiosError
}
from "../../node_modules/axios/index"
import Axios from "../../node_modules/axios/index";

interface IMusicRecords {
    Title: String;
    Artist: String;
    Duration: Number;
    yearOfPublication: number;
}

let baseuri: string = "https://drmusicrecords.azurewebsites.net/api/DB/Musicrecords";

let showAll: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ShowElements")
showAll.addEventListener("click", ShowAllRecords)

function ShowAllRecords(){
Axios.get(baseuri)
.then(function (response: AxiosResponse): void {
    console.log("Getting records v1.0");
    let data: IMusicRecords[] = response.data;
    console.log(data);
    element.innerHTML = JSON.stringify(data);
})
.catch(function (error: AxiosError): void {
    contentelement.innerHTML = error.message;
})
};

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("ShowAllRecords");
let contentelement: HTMLDivElement = <HTMLDivElement> document.getElementById("CatchRecords")