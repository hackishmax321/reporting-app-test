import React from 'react';
import './forms.css';

const OrganizationForm = () => {
    return (
        <div className="form-basic">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Organization Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Organization Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div class="form-row align-items-center">
                    <div class="col-auto">
                    <label class="sr-only" for="inlineFormInput">Contact No.</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Contact Number"/>
                    </div>
                    <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-2">Add</button>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Inharge</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Organization Category</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Parent Organization</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Create Organization</button>
                
            </form>
        
        </div>
    );
}

export default OrganizationForm;
