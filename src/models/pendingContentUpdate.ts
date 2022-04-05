import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PendingContentUpdate implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Date and time the pending binary operation was queued in UTC time. Read-only.  */
    private _queuedDateTime?: Date | undefined;
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
     * Instantiates a new pendingContentUpdate and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "queuedDateTime": (o, n) => { (o as unknown as PendingContentUpdate).queuedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the queuedDateTime property value. Date and time the pending binary operation was queued in UTC time. Read-only.
     * @returns a Date
     */
    public get queuedDateTime() {
        return this._queuedDateTime;
    };
    /**
     * Sets the queuedDateTime property value. Date and time the pending binary operation was queued in UTC time. Read-only.
     * @param value Value to set for the queuedDateTime property.
     */
    public set queuedDateTime(value: Date | undefined) {
        this._queuedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("queuedDateTime", this.queuedDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
}
