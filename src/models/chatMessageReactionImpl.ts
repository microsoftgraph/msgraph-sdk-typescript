import {ChatMessageReaction} from './chatMessageReaction';
import {ChatMessageReactionIdentitySet} from './chatMessageReactionIdentitySet';
import {createChatMessageReactionIdentitySetFromDiscriminatorValue} from './createChatMessageReactionIdentitySetFromDiscriminatorValue';
import {ChatMessageReactionIdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageReactionImpl implements AdditionalDataHolder, ChatMessageReaction, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public createdDateTime?: Date | undefined;
    /** Supported values are like, angry, sad, laugh, heart, surprised. */
    public reactionType?: string | undefined;
    /** The user property */
    public user?: ChatMessageReactionIdentitySet | undefined;
    /**
     * Instantiates a new chatMessageReaction and sets the default values.
     * @param chatMessageReactionParameterValue 
     */
    public constructor(chatMessageReactionParameterValue?: ChatMessageReaction | undefined) {
        this.additionalData = chatMessageReactionParameterValue?.additionalData ? chatMessageReactionParameterValue?.additionalData! : {}
        this.createdDateTime = chatMessageReactionParameterValue?.createdDateTime ;
        this.reactionType = chatMessageReactionParameterValue?.reactionType ;
        this.user = chatMessageReactionParameterValue?.user ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "reactionType": n => { this.reactionType = n.getStringValue(); },
            "user": n => { this.user = n.getObjectValue<ChatMessageReactionIdentitySetImpl>(createChatMessageReactionIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.reactionType){
        writer.writeStringValue("reactionType", this.reactionType);
        }
        if(this.user){
        writer.writeObjectValue<ChatMessageReactionIdentitySetImpl>("user", new ChatMessageReactionIdentitySetImpl(this.user));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
