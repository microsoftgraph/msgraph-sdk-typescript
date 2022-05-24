import {ChatInfo} from './chatInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatInfoImpl implements AdditionalDataHolder, ChatInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The unique identifier for a message in a Microsoft Teams channel. */
    public messageId?: string | undefined;
    /** The ID of the reply message. */
    public replyChainMessageId?: string | undefined;
    /** The unique identifier for a thread in Microsoft Teams. */
    public threadId?: string | undefined;
    /**
     * Instantiates a new chatInfo and sets the default values.
     * @param chatInfoParameterValue 
     */
    public constructor(chatInfoParameterValue?: ChatInfo | undefined) {
        this.additionalData = chatInfoParameterValue?.additionalData ? chatInfoParameterValue?.additionalData! : {}
        this.messageId = chatInfoParameterValue?.messageId ;
        this.replyChainMessageId = chatInfoParameterValue?.replyChainMessageId ;
        this.threadId = chatInfoParameterValue?.threadId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "messageId": n => { this.messageId = n.getStringValue(); },
            "replyChainMessageId": n => { this.replyChainMessageId = n.getStringValue(); },
            "threadId": n => { this.threadId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.messageId){
        writer.writeStringValue("messageId", this.messageId);
        }
        if(this.replyChainMessageId){
        writer.writeStringValue("replyChainMessageId", this.replyChainMessageId);
        }
        if(this.threadId){
        writer.writeStringValue("threadId", this.threadId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
