import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Pkcs12Certificate extends ApiAuthenticationConfigurationBase, Parsable {
    /**
     * The password for the pfx file. Required. If no password is used, you must still provide a value of ''.
     */
    password?: string | undefined;
    /**
     * Represents the pfx content that is sent. The value should be a base-64 encoded version of the actual certificate content. Required.
     */
    pkcs12Value?: string | undefined;
}
