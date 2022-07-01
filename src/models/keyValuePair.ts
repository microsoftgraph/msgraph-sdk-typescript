import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface KeyValuePair extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Name for this key-value pair */
    name?: string | undefined;
    /** Value for this key-value pair */
    value?: string | undefined;
}
