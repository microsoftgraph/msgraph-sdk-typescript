import { AuthenticationProvider, BaseBearerTokenAuthenticationProvider } from "@microsoft/kiota-abstractions"
import { ClientSecretCredential } from "@azure/identity";

export class Auth extends BaseBearerTokenAuthenticationProvider {
     getAuthorizationToken = async (): Promise<string> => {
        // copy token from GE
        const token = "";
        return Promise.resolve(token);
    }
}