import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/persons";

class PersonService {

    getPersons(){
        return axios.get(baseUrl);
    }

    createPerson(person){
        return axios.post(baseUrl,person);
    }

    getPersonById(id){ 
        return axios.get(baseUrl, id);
    }

    deletePerson(id){
        return axios.delete(baseUrl + '/' +id);
    }
   
}

export default new PersonService;