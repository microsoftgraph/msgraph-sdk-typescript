import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserAttributeValuesItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Used to set the value as the default. */
    isDefault?: boolean | undefined;
    /** The display name of the property displayed to the end user in the user flow. */
    name?: string | undefined;
    /** The value that is set when this item is selected. */
    value?: string | undefined;
}
