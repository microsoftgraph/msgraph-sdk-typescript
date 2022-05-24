import {ChatMessageMentionedIdentitySet} from './chatMessageMentionedIdentitySet';
import {createTeamworkConversationIdentityFromDiscriminatorValue} from './createTeamworkConversationIdentityFromDiscriminatorValue';
import {IdentitySetImpl, TeamworkConversationIdentityImpl} from './index';
import {TeamworkConversationIdentity} from './teamworkConversationIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class ChatMessageMentionedIdentitySetImpl extends IdentitySetImpl implements ChatMessageMentionedIdentitySet, Parsable {
    /** If present, represents a conversation (for example, team or channel) @mentioned in a message. */
    public conversation?: TeamworkConversationIdentity | undefined;
    /**
     * Instantiates a new chatMessageMentionedIdentitySet and sets the default values.
     * @param chatMessageMentionedIdentitySetParameterValue 
     */
    public constructor(chatMessageMentionedIdentitySetParameterValue?: ChatMessageMentionedIdentitySet | undefined) {
        super();
        this.conversation = chatMessageMentionedIdentitySetParameterValue?.conversation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "conversation": n => { this.conversation = n.getObjectValue<TeamworkConversationIdentityImpl>(createTeamworkConversationIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.conversation){
        writer.writeObjectValue<TeamworkConversationIdentityImpl>("conversation", new TeamworkConversationIdentityImpl(this.conversation));
        }
    };
}
