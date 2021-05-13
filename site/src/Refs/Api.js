import axios from "axios";

// token du user test :
const token = 'MTgzNzA2NiAkMnkkMTAkOTVCOWxaY2ZsVlMxc2FzeHNpbTB4dUNHanUza0FwN2FFRndIYXRFWDVEUDhSLzFLdm01NUc='
const devUrl = "http://127.0.0.1/apiFinal/FinalApi/";
const HerokuUrl = "https://obscure-bastion-46412.herokuapp.com";

export default axios.create({
    baseURL: devUrl,
    responseType: "json",
    headers: {
        Authorization: "Basic " + token,
    }
});