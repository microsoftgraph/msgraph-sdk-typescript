import type {AuthenticationMethod} from './authenticationMethod';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailAuthenticationMethod extends AuthenticationMethod, Parsable {
    /**
     * The email address registered to this user.
     */
    emailAddress?: string | undefined;
}
