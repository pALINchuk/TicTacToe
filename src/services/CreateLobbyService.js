import axios from "axios";

const URL = 'https://ec2-13-53-207-90.eu-north-1.compute.amazonaws.com/api/lobby/create'
export const CreateLobbyService = (figure, token) => {
    return axios.post(URL, {
            figure: figure
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        },
        {
            // withCredentials: true
        }
    )
}