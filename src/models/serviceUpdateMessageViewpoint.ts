import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceUpdateMessageViewpoint extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Indicates whether the user archived the message. */
    isArchived?: boolean | undefined;
    /** Indicates whether the user marked the message as favorite. */
    isFavorited?: boolean | undefined;
    /** Indicates whether the user read the message. */
    isRead?: boolean | undefined;
}
