import { FILTERCOLOR, FILTERSTATUS } from "./actionTypes"

export const filterstatus = (status) => {
    return {
        type: FILTERSTATUS,
        payload: status 
    }
}

export const filtercolor = (color, changeType) => {
    return {
        type: FILTERCOLOR,
        payload: { color, changeType } 
    }
}