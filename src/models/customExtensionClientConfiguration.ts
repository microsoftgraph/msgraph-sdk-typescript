import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CustomExtensionClientConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The max duration in milliseconds that Azure AD will wait for a response from the external app before it shuts down the connection. The valid range is between 200 and 2000 milliseconds. Default duration is 1000.
     */
    timeoutInMilliseconds?: number | undefined;
}
