import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BasicAuthentication extends ApiAuthenticationConfigurationBase, Parsable {
    /**
     * The password. It is not returned in the responses.
     */
    password?: string | undefined;
    /**
     * The username.
     */
    username?: string | undefined;
}
