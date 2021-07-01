import axios from 'axios';
// import Session from 'react-session-api';
// import EventEmitter from '../utils/EventEmitter';
import {handleErrors} from './error_handling';

// import Employee from '../models/Patient';


const path = "https://reporting-app-clab-test.herokuapp.com/v1/issues";
var issues_list = [];

class EmployeeService {

    

    async getIssues(){
        issues_list = [];
        await axios.get(path).then((response)=>{
            response.data.forEach(doc=>{
                issues_list.push(doc);
            });
            console.log(issues_list);
        }).catch(handleErrors);
        return issues_list;
    }

    async getIssuesByOrganization(org, category){
        issues_list = [];
        await axios.get(`${path}/byOrganization/${org}`).then((response)=>{
            if(category){
                response.data.results.forEach(doc=>{
                    if(category===doc.status){
                        issues_list.push(doc);
                    }
                });
            } else {
                response.data.results.forEach(doc=>{
                    issues_list.push(doc);
                });
            }
            
        }).catch(handleErrors);
        return issues_list;
    }

    async getIssue(id){
        var obj = null;
        await axios.get(`${path}/${id}`).then((response)=>{
            obj =  response.data;
        }).catch(handleErrors);
        return obj;
    }

    async addIssue(issue){

        await axios.post(path, issue).then((response)=>{

        }).catch(handleErrors);
        console.log("User Entered!");
        alert("Registration Completed and Your details will further observed by Administrator.");
    }

    async updateIssue(id, employee){
        await axios.patch(`${path}/${id}`, employee).then((response)=>{

        }).catch(handleErrors);
        alert("Selected employee Updated");
    }

    async deleteissue(id){
        await axios.delete(`${path}/${id}`).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Employee Removed");
    }

    
}

export default new EmployeeService();