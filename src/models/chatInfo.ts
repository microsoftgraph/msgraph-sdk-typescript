import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The unique identifier for a message in a Microsoft Teams channel. */
    messageId?: string | undefined;
    /** The ID of the reply message. */
    replyChainMessageId?: string | undefined;
    /** The unique identifier for a thread in Microsoft Teams. */
    threadId?: string | undefined;
}
