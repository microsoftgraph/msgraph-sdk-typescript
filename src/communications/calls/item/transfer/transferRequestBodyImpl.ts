import {InvitationParticipantInfoImpl, ParticipantInfoImpl} from '../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from '../../../../models/createParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../models/invitationParticipantInfo';
import {ParticipantInfo} from '../../../../models/participantInfo';
import {TransferRequestBody} from './transferRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the transfer method. */
export class TransferRequestBodyImpl implements AdditionalDataHolder, Parsable, TransferRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The transferee property */
    transferee?: ParticipantInfo | undefined;
    /** The transferTarget property */
    transferTarget?: InvitationParticipantInfo | undefined;
    /**
     * Instantiates a new transferRequestBody and sets the default values.
     * @param transferRequestBodyParameterValue 
     */
    public constructor(transferRequestBodyParameterValue?: TransferRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = transferRequestBodyParameterValue?.additionalData ? {} : transferRequestBodyParameterValue?.additionalData!
        this.transferee = transferRequestBodyParameterValue?.transferee ;
        this.transferTarget = transferRequestBodyParameterValue?.transferTarget ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "transferee": n => { this.transferee = n.getObjectValue<ParticipantInfoImpl>(createParticipantInfoFromDiscriminatorValue); },
            "transferTarget": n => { this.transferTarget = n.getObjectValue<InvitationParticipantInfoImpl>(createInvitationParticipantInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.transferee){
        if(this.transferee)
        writer.writeObjectValue<ParticipantInfoImpl>("transferee", new ParticipantInfoImpl(this.transferee));
        }
        if(this.transferTarget){
        if(this.transferTarget)
        writer.writeObjectValue<InvitationParticipantInfoImpl>("transferTarget", new InvitationParticipantInfoImpl(this.transferTarget));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
