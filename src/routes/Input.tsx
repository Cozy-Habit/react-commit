import { Form } from "react-router-dom";

export default function Input(){

    return(
            <Form method="post" action={"/"}>
                <label>
                    Owner:
                    <input 
                        type="text" 
                        placeholder="Enter name" 
                        name="owner"/>
                </label>
                <label>
                    Repository:
                    <input 
                        type="text" 
                        placeholder="Enter name" 
                        name="repo"/>
                </label>
                <button type="submit" ></button>
            </Form>
    );
}