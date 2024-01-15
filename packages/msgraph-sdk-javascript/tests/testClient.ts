import { newGraphBaseServiceClient } from "../src/graphBaseServiceClient";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { ClientSecretCredential } from "@azure/identity";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";

const tokenCredential = new ClientSecretCredential(
  process.env.TENANT_ID,
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET
);

const authProvider = new AzureIdentityAuthenticationProvider(tokenCredential);
const requestAdapter = new FetchRequestAdapter(authProvider);
export const graphServiceClient = newGraphBaseServiceClient(requestAdapter);
