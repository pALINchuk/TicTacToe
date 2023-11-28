import axios from "axios";

const URL = 'https://ec2-13-53-207-90.eu-north-1.compute.amazonaws.com/api/auth/login'
export const AuthService = (email, password) => {
    return axios.post(URL, {
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