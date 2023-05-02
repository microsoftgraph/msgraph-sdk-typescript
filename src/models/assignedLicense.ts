import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssignedLicense extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A collection of the unique identifiers for plans that have been disabled. */
    disabledPlans?: string[] | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The unique identifier for the SKU. */
    skuId?: string | undefined;
}
