import { environment } from "src/environments/environment";

export module ConstantUrl {
    const baseUrl: String = environment.baseURL;
    export const signinEndPoint: String = `${baseUrl}/registration/signin`;
    export const signupEndPoint: String = `${baseUrl}/registration/signup`;
    export const getAllDetailsUsingEmail: String = `${baseUrl}`;
    export const getExpenseDetails: String = `${baseUrl}/expenses`;
    export const newExpenseDetails: String = `${baseUrl}/expenses`;
    export const updateExpenseDetails : String = `${baseUrl}/expenses`;
    export const deleteExpenseDetails : String = `${baseUrl}/expenses`;
}