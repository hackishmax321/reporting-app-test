import axios from 'axios';
// import Session from 'react-session-api';
// import EventEmitter from '../utils/EventEmitter';
import {handleErrors} from './error_handling';

// import Employee from '../models/Patient';


const path = "/v1/officials";
var officials_list = [];

class EmployeeService {

    async getUserByUsername(username, password){
        await axios.get(`/users/${username}`).then((response)=>{
            if(password == response.data.password){
                console.log("LOGIN COMPLETED!");

                // Load Session

                // EventEmitter.emit("loginCompleted", {logged: true});

                return true

            } else {
                console.log("LOGIN FAILED!");
                return false;
            }
        }).catch(handleErrors);

    }

    async checkExistingUsers(username){
        await axios.get(`/users/byExistUsers/${username}`).then((response)=>{
            // console.log(response.data);
            if(response.data){
                console.log("User Exists!");

                // EventEmitter.emit("userexist", {exist: true});

            } else {
                console.log("User Not Existed");
            }
        }).catch(handleErrors);

    }

    async getOfficials(category){
        officials_list = [];
        await axios.get(path).then((response)=>{
            if(category){
                response.data.results.forEach(doc=>{
                    if(category===doc.status){
                        officials_list.push(doc);
                    }
                });
            } else {
                response.data.results.forEach(doc=>{
                    officials_list.push(doc);
                });
            }
            
        }).catch(handleErrors);
        return officials_list;
    }

    async getOfficial(id){
        var obj = null;
        await axios.get(`${path}/${id}`).then((response)=>{
            obj =  response.data;
        }).catch(handleErrors);
        return obj;
    }

    async addOfficial(official){

        await axios.post(path, official).then((response)=>{

        }).catch(handleErrors);
        console.log("User Entered!");
        alert("Registration Completed and Your details will further observed by Administrator.");
    }

    async updateOfficial(id, employee){
        await axios.patch(`${path}/${id}`, employee).then((response)=>{

        }).catch(handleErrors);
        alert("Selected employee Updated");
    }

    async deleteOfficial(id){
        await axios.delete(`${path}/${id}`).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Employee Removed");
    }

    
}

export default new EmployeeService();