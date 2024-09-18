import { apiCall } from "../API/API"


export const postMessage = async (inputdata) => {
    try {
        const response = await apiCall.post("pdfquery/", {"query":inputdata})
        return response
    } catch (error) {
        console.log(error, "ERROR DURING SENDING CHAT MESSAGE")
    }
}


export const getChatData = async () => {
    try {
        const response = await apiCall.get("")
        return response
    } catch (error) {
        console.log(error, "ERROR DURING GETTING CHAT MESSAGE")

    }
}