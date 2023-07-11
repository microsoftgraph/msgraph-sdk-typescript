import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserAttributeValuesItem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Determines whether the value is set as the default.
     */
    isDefault?: boolean | undefined;
    /**
     * The display name of the property displayed to the user in the user flow.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The value that is set when this item is selected.
     */
    value?: string | undefined;
}
