import axios from "axios";

const URL = 'http://ec2-13-53-207-90.eu-north-1.compute.amazonaws.com/api/auth/register'
export const RegistrationService = (username, email, password) => {
    return axios.post(URL, {
            username: username,
            email: email,
            password: password
        },
        {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json',
                'Authorization': ''
            }
        },
        {
            // withCredentials: true
        }
    )
}