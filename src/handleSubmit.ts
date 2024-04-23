import { ActionFunctionArgs, redirect } from "react-router-dom";

export default async function handleSubmit ( {request}: ActionFunctionArgs){
    const formData = await request.formData();
    return redirect(`/${formData.get('owner')}/${formData.get('repo')}`);
}