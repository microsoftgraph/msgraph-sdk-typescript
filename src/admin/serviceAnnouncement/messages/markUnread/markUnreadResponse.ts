import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MarkUnreadResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The value property
     */
    value?: boolean | undefined;
}
