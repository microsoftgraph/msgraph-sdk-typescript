import {createInvitationParticipantInfoFromDiscriminatorValue} from './createInvitationParticipantInfoFromDiscriminatorValue';
import {CommsOperationImpl, InvitationParticipantInfoImpl} from './index';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {InviteParticipantsOperation} from './inviteParticipantsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InviteParticipantsOperationImpl extends CommsOperationImpl implements InviteParticipantsOperation, Parsable {
    /** The participants to invite.  */
    participants?: InvitationParticipantInfo[] | undefined;
    /**
     * Instantiates a new inviteParticipantsOperation and sets the default values.
     * @param inviteParticipantsOperationParameterValue 
     */
    public constructor(inviteParticipantsOperationParameterValue?: InviteParticipantsOperation | undefined) {
        super();
        this.participants = inviteParticipantsOperationParameterValue?.participants ;
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
        if(this.participants){
        const participantsArrValue: InvitationParticipantInfoImpl[] = []; this.participants?.forEach(element => {participantsArrValue.push(new InvitationParticipantInfoImpl(element));});
        writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("participants", participantsArrValue);
        }
    };
}
