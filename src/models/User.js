
class User {
    constructor(username, password, contact, nic, state){
        this.username = username;
        this.password = password;
        this.contact = contact;
        this.nic = nic;
        this.state = state || 'NOT APPROVED';
    }
}

export default User;