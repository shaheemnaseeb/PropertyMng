import axios from "axios"

const PROPERTY_API_BASE_URL = "https://6438f9604660f26eb1a7568b.mockapi.io/api/properties"

class PropertyService{
    saveProperty(property){
        return axios.post(PROPERTY_API_BASE_URL, property)
    }
    listProperty(){
        return axios.get(PROPERTY_API_BASE_URL)
    }
    deleteProperty(id){
        return axios.delete(PROPERTY_API_BASE_URL, id)
    }
}

export default new PropertyService;