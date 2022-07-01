import {createInvitationParticipantInfoFromDiscriminatorValue} from './createInvitationParticipantInfoFromDiscriminatorValue';
import {CommsOperationImpl, InvitationParticipantInfoImpl} from './index';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {InviteParticipantsOperation} from './inviteParticipantsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InviteParticipantsOperationImpl extends CommsOperationImpl implements InviteParticipantsOperation {
    /** The participants to invite. */
    private _participants?: InvitationParticipantInfo[] | undefined;
    /**
     * Instantiates a new InviteParticipantsOperation and sets the default values.
     * @param inviteParticipantsOperationParameterValue 
     */
    public constructor(inviteParticipantsOperationParameterValue?: InviteParticipantsOperation | undefined) {
        super(inviteParticipantsOperationParameterValue);
        this._participants = inviteParticipantsOperationParameterValue?.participants;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "participants": n => { this.participants = n.getCollectionOfObjectValues<InvitationParticipantInfoImpl>(createInvitationParticipantInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the participants property value. The participants to invite.
     * @returns a InvitationParticipantInfoInterface
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants to invite.
     * @param value Value to set for the participants property.
     */
    public set participants(value: InvitationParticipantInfo[] | undefined) {
        if(value) {
            const participantsArrValue: InvitationParticipantInfoImpl[] = [];
            this.participants?.forEach(element => {
                participantsArrValue.push((element instanceof InvitationParticipantInfoImpl? element as InvitationParticipantInfoImpl:new InvitationParticipantInfoImpl(element)));
            });
            this._participants = participantsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.participants && this.participants.length != 0){        const participantsArrValue: InvitationParticipantInfoImpl[] = [];
        this.participants?.forEach(element => {
            participantsArrValue.push((element instanceof InvitationParticipantInfoImpl? element as InvitationParticipantInfoImpl:new InvitationParticipantInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("participants", participantsArrValue);
        }
    };
}
