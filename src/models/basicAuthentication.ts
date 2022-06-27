import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BasicAuthentication extends Partial<AdditionalDataHolder>, ApiAuthenticationConfigurationBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The password. It is not returned in the responses. */
    password?: string | undefined;
    /** The username. */
    username?: string | undefined;
}
