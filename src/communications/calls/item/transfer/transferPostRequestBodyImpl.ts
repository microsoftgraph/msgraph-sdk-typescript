import {InvitationParticipantInfoImpl, ParticipantInfoImpl} from '../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from '../../../../models/createParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../models/invitationParticipantInfo';
import {ParticipantInfo} from '../../../../models/participantInfo';
import {TransferPostRequestBody} from './transferPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the transfer method. */
export class TransferPostRequestBodyImpl implements TransferPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The transferee property */
    private _transferee?: ParticipantInfo | undefined;
    /** The transferTarget property */
    private _transferTarget?: InvitationParticipantInfo | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new transferPostRequestBody and sets the default values.
     * @param transferPostRequestBodyParameterValue 
     */
    public constructor(transferPostRequestBodyParameterValue?: TransferPostRequestBody | undefined) {
        this._additionalData = transferPostRequestBodyParameterValue?.additionalData ? transferPostRequestBodyParameterValue?.additionalData! : {};
        this._transferee = transferPostRequestBodyParameterValue?.transferee;
        this._transferTarget = transferPostRequestBodyParameterValue?.transferTarget;
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
            writer.writeObjectValue<ParticipantInfoImpl>("transferee", (!this.transferee || this.transferee instanceof ParticipantInfoImpl? this.transferee : new ParticipantInfoImpl(this.transferee)));
        }
        if(this.transferTarget){
            writer.writeObjectValue<InvitationParticipantInfoImpl>("transferTarget", (!this.transferTarget || this.transferTarget instanceof InvitationParticipantInfoImpl? this.transferTarget : new InvitationParticipantInfoImpl(this.transferTarget)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the transferee property value. The transferee property
     * @returns a ParticipantInfoInterface
     */
    public get transferee() {
        return this._transferee;
    };
    /**
     * Sets the transferee property value. The transferee property
     * @param value Value to set for the transferee property.
     */
    public set transferee(value: ParticipantInfo | undefined) {
        if(value) {
            this._transferee = value instanceof ParticipantInfoImpl? value : new ParticipantInfoImpl(value);
        }
    };
    /**
     * Gets the transferTarget property value. The transferTarget property
     * @returns a InvitationParticipantInfoInterface
     */
    public get transferTarget() {
        return this._transferTarget;
    };
    /**
     * Sets the transferTarget property value. The transferTarget property
     * @param value Value to set for the transferTarget property.
     */
    public set transferTarget(value: InvitationParticipantInfo | undefined) {
        if(value) {
            this._transferTarget = value instanceof InvitationParticipantInfoImpl? value : new InvitationParticipantInfoImpl(value);
        }
    };
}
