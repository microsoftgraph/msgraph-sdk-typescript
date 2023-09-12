import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface ServiceProvisioningError extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The createdDateTime property
     */
    createdDateTime?: Date | undefined;
    /**
     * The isResolved property
     */
    isResolved?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The serviceInstance property
     */
    serviceInstance?: string | undefined;
}
