import {InvitationParticipantInfoImpl} from '../../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../../models/invitationParticipantInfo';
import {InviteRequestBody} from './inviteRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the invite method.  */
export class InviteRequestBodyImpl implements AdditionalDataHolder, InviteRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The clientContext property  */
    clientContext?: string | undefined;
    /** The participants property  */
    participants?: InvitationParticipantInfo[] | undefined;
    /**
     * Instantiates a new inviteRequestBody and sets the default values.
     * @param inviteRequestBodyParameterValue 
     */
    public constructor(inviteRequestBodyParameterValue?: InviteRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = inviteRequestBodyParameterValue?.additionalData ? {} : inviteRequestBodyParameterValue?.additionalData!
        this.clientContext = inviteRequestBodyParameterValue?.clientContext ;
        this.participants = inviteRequestBodyParameterValue?.participants ;
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
        if(this.clientContext)
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.participants){
        const participantsArrValue: InvitationParticipantInfoImpl[] = []; this.participants?.forEach(element => {participantsArrValue.push(new InvitationParticipantInfoImpl(element));});
        writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("participants", participantsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
