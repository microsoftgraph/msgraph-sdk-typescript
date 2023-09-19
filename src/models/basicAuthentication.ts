import { type ApiAuthenticationConfigurationBase } from './apiAuthenticationConfigurationBase';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface BasicAuthentication extends ApiAuthenticationConfigurationBase, Parsable {
    /**
     * The password. It isn't returned in the responses.
     */
    password?: string | undefined;
    /**
     * The username.
     */
    username?: string | undefined;
}
