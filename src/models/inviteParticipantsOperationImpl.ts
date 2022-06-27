import {createInvitationParticipantInfoFromDiscriminatorValue} from './createInvitationParticipantInfoFromDiscriminatorValue';
import {CommsOperationImpl, InvitationParticipantInfoImpl} from './index';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {InviteParticipantsOperation} from './inviteParticipantsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InviteParticipantsOperationImpl extends CommsOperationImpl implements InviteParticipantsOperation {
    /** The participants to invite. */
    public participants?: InvitationParticipantInfo[] | undefined;
    /**
     * Instantiates a new InviteParticipantsOperation and sets the default values.
     * @param inviteParticipantsOperationParameterValue 
     */
    public constructor(inviteParticipantsOperationParameterValue?: InviteParticipantsOperation | undefined) {
        super(inviteParticipantsOperationParameterValue);
        const participantsArrValue: InvitationParticipantInfoImpl[] = []; inviteParticipantsOperationParameterValue.participants?.forEach(element => {participantsArrValue.push(element instanceof InvitationParticipantInfoImpl? element : new InvitationParticipantInfoImpl(element));});
        this.participants = participantsArrValue;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.participants && this.participants.length != 0){        const participantsArrValue: InvitationParticipantInfoImpl[] = []; this.participants?.forEach(element => {participantsArrValue.push(element instanceof InvitationParticipantInfoImpl? element : new InvitationParticipantInfoImpl(element));});
            writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("participants", participantsArrValue);
        }
    };
}
