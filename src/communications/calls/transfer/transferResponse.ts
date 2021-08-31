import {InvitationParticipantInfo} from '../invitationParticipantInfo';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class TransferResponse implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _transferTarget?: InvitationParticipantInfo | undefined;
    /**
     * Instantiates a new transferResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the transferTarget property value. 
     * @returns a invitationParticipantInfo
     */
    public get transferTarget() {
        return this._transferTarget;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["transferTarget", (o, n) => { (o as unknown as TransferResponse).transferTarget = n.getObjectValue<InvitationParticipantInfo>(InvitationParticipantInfo); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<InvitationParticipantInfo>("transferTarget", this.transferTarget);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the transferTarget property value. 
     * @param value Value to set for the transferTarget property.
     */
    public set transferTarget(value: InvitationParticipantInfo | undefined) {
        this._transferTarget = value;
    };
}
