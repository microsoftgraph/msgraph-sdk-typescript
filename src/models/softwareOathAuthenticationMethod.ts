import {AuthenticationMethod} from './authenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethod extends AuthenticationMethod, Parsable {
    /**
     * The secret key of the method. Always returns null.
     */
    secretKey?: string | undefined;
}
