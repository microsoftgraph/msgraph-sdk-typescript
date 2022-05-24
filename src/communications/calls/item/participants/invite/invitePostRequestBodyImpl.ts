import {InvitationParticipantInfoImpl} from '../../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../../models/invitationParticipantInfo';
import {InvitePostRequestBody} from './invitePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the invite method. */
export class InvitePostRequestBodyImpl implements AdditionalDataHolder, InvitePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The clientContext property */
    public clientContext?: string | undefined;
    /** The participants property */
    public participants?: InvitationParticipantInfo[] | undefined;
    /**
     * Instantiates a new invitePostRequestBody and sets the default values.
     * @param invitePostRequestBodyParameterValue 
     */
    public constructor(invitePostRequestBodyParameterValue?: InvitePostRequestBody | undefined) {
        this.additionalData = invitePostRequestBodyParameterValue?.additionalData ? invitePostRequestBodyParameterValue?.additionalData! : {}
        this.clientContext = invitePostRequestBodyParameterValue?.clientContext ;
        this.participants = invitePostRequestBodyParameterValue?.participants ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "participants": n => { this.participants = n.getCollectionOfObjectValues<InvitationParticipantInfoImpl>(createInvitationParticipantInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clientContext){
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.participants && this.participants.length != 0){        const participantsArrValue: InvitationParticipantInfoImpl[] = []; this.participants?.forEach(element => {participantsArrValue.push(new InvitationParticipantInfoImpl(element));});
        writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("participants", participantsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
