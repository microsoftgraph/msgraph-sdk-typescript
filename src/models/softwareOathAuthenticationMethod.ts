import { type AuthenticationMethod } from './authenticationMethod';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethod extends AuthenticationMethod, Parsable {
    /**
     * The secret key of the method. Always returns null.
     */
    secretKey?: string | undefined;
}
