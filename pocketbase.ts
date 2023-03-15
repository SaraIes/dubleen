import PocketBase from "pocketbase";

export const API_URL = "https://dubleen-api.paas.idl-apps.com";
export const getPocketBaseInstance = (): PocketBase => new PocketBase(API_URL);