import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:8080",
    header:{
        "Content-type":"application/json"
    }
});