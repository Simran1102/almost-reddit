import { Account, Client, Databases } from "appwrite";
import { APPWRITE_PROJECT_ID, APPWRITE_URL } from "./constants";

const client = new Client()
  .setEndpoint(APPWRITE_URL) // Your API Endpoint
  .setProject(APPWRITE_PROJECT_ID); // Your project ID
const account = new Account(client);
const database = new Databases(client);

export { account, database };
