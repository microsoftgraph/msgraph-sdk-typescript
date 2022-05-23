
export interface ChatInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The unique identifier for a message in a Microsoft Teams channel. */
    messageId?:string | undefined;
    /** The ID of the reply message. */
    replyChainMessageId?:string | undefined;
    /** The unique identifier for a thread in Microsoft Teams. */
    threadId?:string | undefined;
}
