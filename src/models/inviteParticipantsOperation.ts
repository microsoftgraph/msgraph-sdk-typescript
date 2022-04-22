import {createInvitationParticipantInfoFromDiscriminatorValue} from './createInvitationParticipantInfoFromDiscriminatorValue';
import {CommsOperation, InvitationParticipantInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InviteParticipantsOperation extends CommsOperation implements Parsable {
    /** The participants to invite.  */
    private _participants?: InvitationParticipantInfo[] | undefined;
    /**
     * Instantiates a new inviteParticipantsOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "participants": n => { this.participants = n.getCollectionOfObjectValues<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the participants property value. The participants to invite.
     * @returns a invitationParticipantInfo
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants to invite.
     * @param value Value to set for the participants property.
     */
    public set participants(value: InvitationParticipantInfo[] | undefined) {
        this._participants = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("participants", this.participants);
    };
}
