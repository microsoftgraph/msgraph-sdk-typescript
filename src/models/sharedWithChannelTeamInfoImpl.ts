import {ConversationMember} from './conversationMember';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {ConversationMemberImpl, TeamInfoImpl} from './index';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedWithChannelTeamInfoImpl extends TeamInfoImpl implements SharedWithChannelTeamInfo {
    /** A collection of team members who have access to the shared channel. */
    private _allowedMembers?: ConversationMember[] | undefined;
    /** Indicates whether the team is the host of the channel. */
    private _isHostTeam?: boolean | undefined;
    /**
     * Gets the allowedMembers property value. A collection of team members who have access to the shared channel.
     * @returns a ConversationMemberInterface
     */
    public get allowedMembers() {
        return this._allowedMembers;
    };
    /**
     * Sets the allowedMembers property value. A collection of team members who have access to the shared channel.
     * @param value Value to set for the allowedMembers property.
     */
    public set allowedMembers(value: ConversationMember[] | undefined) {
        if(value) {
            const allowedMembersArrValue: ConversationMemberImpl[] = [];
            this.allowedMembers?.forEach(element => {
                allowedMembersArrValue.push((element instanceof ConversationMemberImpl? element as ConversationMemberImpl:new ConversationMemberImpl(element)));
            });
            this._allowedMembers = allowedMembersArrValue;
        }
    };
    /**
     * Instantiates a new SharedWithChannelTeamInfo and sets the default values.
     * @param sharedWithChannelTeamInfoParameterValue 
     */
    public constructor(sharedWithChannelTeamInfoParameterValue?: SharedWithChannelTeamInfo | undefined) {
        super(sharedWithChannelTeamInfoParameterValue);
        this._allowedMembers = sharedWithChannelTeamInfoParameterValue?.allowedMembers;
        this._isHostTeam = sharedWithChannelTeamInfoParameterValue?.isHostTeam;
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
     * Gets the isHostTeam property value. Indicates whether the team is the host of the channel.
     * @returns a boolean
     */
    public get isHostTeam() {
        return this._isHostTeam;
    };
    /**
     * Sets the isHostTeam property value. Indicates whether the team is the host of the channel.
     * @param value Value to set for the isHostTeam property.
     */
    public set isHostTeam(value: boolean | undefined) {
        if(value) {
            this._isHostTeam = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowedMembers && this.allowedMembers.length != 0){        const allowedMembersArrValue: ConversationMemberImpl[] = [];
        this.allowedMembers?.forEach(element => {
            allowedMembersArrValue.push((element instanceof ConversationMemberImpl? element as ConversationMemberImpl:new ConversationMemberImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConversationMemberImpl>("allowedMembers", allowedMembersArrValue);
        }
        if(this.isHostTeam){
            writer.writeBooleanValue("isHostTeam", this.isHostTeam);
        }
    };
}
