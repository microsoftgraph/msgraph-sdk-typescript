import {CustomExtensionCalloutInstanceStatus} from './customExtensionCalloutInstanceStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CustomExtensionCalloutInstance extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The customExtensionId property
     */
    customExtensionId?: string | undefined;
    /**
     * The detail property
     */
    detail?: string | undefined;
    /**
     * The externalCorrelationId property
     */
    externalCorrelationId?: string | undefined;
    /**
     * The id property
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The status property
     */
    status?: CustomExtensionCalloutInstanceStatus | undefined;
}
