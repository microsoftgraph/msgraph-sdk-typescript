import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ModifiedProperty extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates the property name of the target attribute that was changed.
     */
    displayName?: string | undefined;
    /**
     * Indicates the updated value for the propery.
     */
    newValue?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Indicates the previous value (before the update) for the property.
     */
    oldValue?: string | undefined;
}
