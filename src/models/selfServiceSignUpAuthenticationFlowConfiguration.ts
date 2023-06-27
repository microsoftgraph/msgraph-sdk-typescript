import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SelfServiceSignUpAuthenticationFlowConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether self-service sign-up flow is enabled or disabled. The default value is false. This property is not a key. Required.
     */
    isEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
