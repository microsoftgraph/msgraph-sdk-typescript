import {CustomExtensionCalloutInstanceStatus} from './customExtensionCalloutInstanceStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CustomExtensionCalloutInstance extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Identification of the custom extension that was triggered at this instance.
     */
    customExtensionId?: string | undefined;
    /**
     * Details provided by the logic app during the callback of the request instance.
     */
    detail?: string | undefined;
    /**
     * The unique run identifier for the logic app.
     */
    externalCorrelationId?: string | undefined;
    /**
     * Unique identifier for the callout instance. Read-only.
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The status of the request to the custom extension. The possible values are: calloutSent, callbackReceived, calloutFailed, callbackTimedOut, waitingForCallback, unknownFutureValue.
     */
    status?: CustomExtensionCalloutInstanceStatus | undefined;
}
