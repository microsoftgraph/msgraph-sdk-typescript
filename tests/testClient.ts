import {GraphServiceClient} from "../src/index";
import {AzureIdentityAuthenticationProvider} from "@microsoft/kiota-authentication-azure";
import {ClientSecretCredential} from "@azure/identity";

const tokenCredential = new ClientSecretCredential(process.env.TENANT_ID, process.env.CLIENT_ID, process.env.CLIENT_SECRET );

const authProvider = new AzureIdentityAuthenticationProvider(tokenCredential);
export const graphServiceClient = GraphServiceClient.init({authProvider});

