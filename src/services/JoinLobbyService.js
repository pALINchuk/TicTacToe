import axios from "axios";

const URL = 'http://ec2-13-53-207-90.eu-north-1.compute.amazonaws.com/api/lobby/join/'
export const JoinLobbyService = (id, token) => {
    return axios.get(URL + id,
        {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    )
}