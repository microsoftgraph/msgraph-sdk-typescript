import {ChatMessageMention} from './chatMessageMention';
import {ChatMessageMentionedIdentitySet} from './chatMessageMentionedIdentitySet';
import {createChatMessageMentionedIdentitySetFromDiscriminatorValue} from './createChatMessageMentionedIdentitySetFromDiscriminatorValue';
import {ChatMessageMentionedIdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageMentionImpl implements AdditionalDataHolder, ChatMessageMention, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body. */
    public id?: number | undefined;
    /** The entity (user, application, team, or channel) that was @mentioned. */
    public mentioned?: ChatMessageMentionedIdentitySet | undefined;
    /** String used to represent the mention. For example, a user's display name, a team name. */
    public mentionText?: string | undefined;
    /**
     * Instantiates a new chatMessageMention and sets the default values.
     * @param chatMessageMentionParameterValue 
     */
    public constructor(chatMessageMentionParameterValue?: ChatMessageMention | undefined) {
        this.additionalData = chatMessageMentionParameterValue?.additionalData ? chatMessageMentionParameterValue?.additionalData! : {}
        this.id = chatMessageMentionParameterValue?.id ;
        this.mentioned = chatMessageMentionParameterValue?.mentioned ;
        this.mentionText = chatMessageMentionParameterValue?.mentionText ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getNumberValue(); },
            "mentioned": n => { this.mentioned = n.getObjectValue<ChatMessageMentionedIdentitySetImpl>(createChatMessageMentionedIdentitySetFromDiscriminatorValue); },
            "mentionText": n => { this.mentionText = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.id){
        writer.writeNumberValue("id", this.id);
        }
        if(this.mentioned){
        writer.writeObjectValue<ChatMessageMentionedIdentitySetImpl>("mentioned", new ChatMessageMentionedIdentitySetImpl(this.mentioned));
        }
        if(this.mentionText){
        writer.writeStringValue("mentionText", this.mentionText);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
