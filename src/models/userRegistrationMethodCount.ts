import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserRegistrationMethodCount extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Name of the authentication method.
     */
    authenticationMethod?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Number of users registered.
     */
    userCount?: number | undefined;
}
