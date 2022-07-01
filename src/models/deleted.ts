import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Deleted extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Represents the state of the deleted item. */
    state?: string | undefined;
}
