import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Pkcs12Certificate extends Partial<AdditionalDataHolder>, ApiAuthenticationConfigurationBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** This is the password for the pfx file. Required. If no password is used, must still provide a value of ''. */
    password?: string | undefined;
    /** This is the field for sending pfx content. The value should be a base-64 encoded version of the actual certificate content. Required. */
    pkcs12Value?: string | undefined;
}
