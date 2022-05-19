import {InvitationParticipantInfo, ParticipantInfo} from '../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from '../../../../models/createParticipantInfoFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the transfer method. */
export class TransferPostRequestBody implements AdditionalDataHolder, Parsable {
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new transferPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "transferee": n => { this.transferee = n.getObjectValue<ParticipantInfo>(createParticipantInfoFromDiscriminatorValue); },
            "transferTarget": n => { this.transferTarget = n.getObjectValue<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ParticipantInfo>("transferee", this.transferee);
        writer.writeObjectValue<InvitationParticipantInfo>("transferTarget", this.transferTarget);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the transferee property value. The transferee property
     * @returns a participantInfo
     */
    public get transferee() {
        return this._transferee;
    };
    /**
     * Sets the transferee property value. The transferee property
     * @param value Value to set for the transferee property.
     */
    public set transferee(value: ParticipantInfo | undefined) {
        this._transferee = value;
    };
    /**
     * Gets the transferTarget property value. The transferTarget property
     * @returns a invitationParticipantInfo
     */
    public get transferTarget() {
        return this._transferTarget;
    };
    /**
     * Sets the transferTarget property value. The transferTarget property
     * @param value Value to set for the transferTarget property.
     */
    public set transferTarget(value: InvitationParticipantInfo | undefined) {
        this._transferTarget = value;
    };
}
