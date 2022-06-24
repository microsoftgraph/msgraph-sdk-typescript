import {ConversationMember} from './conversationMember';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {ConversationMemberImpl, TeamInfoImpl} from './index';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedWithChannelTeamInfoImpl extends TeamInfoImpl implements SharedWithChannelTeamInfo {
    /** A collection of team members who have access to the shared channel. */
    public allowedMembers?: ConversationMember[] | undefined;
    /** Indicates whether the team is the host of the channel. */
    public isHostTeam?: boolean | undefined;
    /**
     * Instantiates a new SharedWithChannelTeamInfo and sets the default values.
     * @param sharedWithChannelTeamInfoParameterValue 
     */
    public constructor(sharedWithChannelTeamInfoParameterValue?: SharedWithChannelTeamInfo | undefined) {
        super(sharedWithChannelTeamInfoParameterValue);
        const allowedMembersArrValue: ConversationMemberImpl[] = []; sharedWithChannelTeamInfoParameterValue.allowedMembers?.forEach(element => {allowedMembersArrValue.push(element instanceof ConversationMemberImpl? element : new ConversationMemberImpl(element));});
        this.allowedMembers = allowedMembersArrValue;
        this.isHostTeam = sharedWithChannelTeamInfoParameterValue?.isHostTeam;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedMembers": n => { this.allowedMembers = n.getCollectionOfObjectValues<ConversationMemberImpl>(createConversationMemberFromDiscriminatorValue); },
            "isHostTeam": n => { this.isHostTeam = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowedMembers && this.allowedMembers.length != 0){        const allowedMembersArrValue: ConversationMemberImpl[] = []; this.allowedMembers?.forEach(element => {allowedMembersArrValue.push(element instanceof ConversationMemberImpl? element : new ConversationMemberImpl(element));});
            writer.writeCollectionOfObjectValues<ConversationMemberImpl>("allowedMembers", allowedMembersArrValue);
        }
        if(this.isHostTeam){
            writer.writeBooleanValue("isHostTeam", this.isHostTeam);
        }
    };
}
