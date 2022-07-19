import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {ConversationMember, TeamInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedWithChannelTeamInfo extends TeamInfo implements Parsable {
    /** A collection of team members who have access to the shared channel. */
    private _allowedMembers?: ConversationMember[] | undefined;
    /** Indicates whether the team is the host of the channel. */
    private _isHostTeam?: boolean | undefined;
    /**
     * Gets the allowedMembers property value. A collection of team members who have access to the shared channel.
     * @returns a conversationMember
     */
    public get allowedMembers() {
        return this._allowedMembers;
    };
    /**
     * Sets the allowedMembers property value. A collection of team members who have access to the shared channel.
     * @param value Value to set for the allowedMembers property.
     */
    public set allowedMembers(value: ConversationMember[] | undefined) {
        this._allowedMembers = value;
    };
    /**
     * Instantiates a new SharedWithChannelTeamInfo and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.sharedWithChannelTeamInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedMembers": n => { this.allowedMembers = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
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
        this._isHostTeam = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ConversationMember>("allowedMembers", this.allowedMembers);
        writer.writeBooleanValue("isHostTeam", this.isHostTeam);
    };
}
