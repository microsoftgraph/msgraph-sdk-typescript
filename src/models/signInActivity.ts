import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInActivity implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The lastNonInteractiveSignInDateTime property */
    private _lastNonInteractiveSignInDateTime?: Date | undefined;
    /** The lastNonInteractiveSignInRequestId property */
    private _lastNonInteractiveSignInRequestId?: string | undefined;
    /** The lastSignInDateTime property */
    private _lastSignInDateTime?: Date | undefined;
    /** The lastSignInRequestId property */
    private _lastSignInRequestId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new signInActivity and sets the default values.
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
            "lastNonInteractiveSignInDateTime": n => { this.lastNonInteractiveSignInDateTime = n.getDateValue(); },
            "lastNonInteractiveSignInRequestId": n => { this.lastNonInteractiveSignInRequestId = n.getStringValue(); },
            "lastSignInDateTime": n => { this.lastSignInDateTime = n.getDateValue(); },
            "lastSignInRequestId": n => { this.lastSignInRequestId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastNonInteractiveSignInDateTime property value. The lastNonInteractiveSignInDateTime property
     * @returns a Date
     */
    public get lastNonInteractiveSignInDateTime() {
        return this._lastNonInteractiveSignInDateTime;
    };
    /**
     * Sets the lastNonInteractiveSignInDateTime property value. The lastNonInteractiveSignInDateTime property
     * @param value Value to set for the lastNonInteractiveSignInDateTime property.
     */
    public set lastNonInteractiveSignInDateTime(value: Date | undefined) {
        this._lastNonInteractiveSignInDateTime = value;
    };
    /**
     * Gets the lastNonInteractiveSignInRequestId property value. The lastNonInteractiveSignInRequestId property
     * @returns a string
     */
    public get lastNonInteractiveSignInRequestId() {
        return this._lastNonInteractiveSignInRequestId;
    };
    /**
     * Sets the lastNonInteractiveSignInRequestId property value. The lastNonInteractiveSignInRequestId property
     * @param value Value to set for the lastNonInteractiveSignInRequestId property.
     */
    public set lastNonInteractiveSignInRequestId(value: string | undefined) {
        this._lastNonInteractiveSignInRequestId = value;
    };
    /**
     * Gets the lastSignInDateTime property value. The lastSignInDateTime property
     * @returns a Date
     */
    public get lastSignInDateTime() {
        return this._lastSignInDateTime;
    };
    /**
     * Sets the lastSignInDateTime property value. The lastSignInDateTime property
     * @param value Value to set for the lastSignInDateTime property.
     */
    public set lastSignInDateTime(value: Date | undefined) {
        this._lastSignInDateTime = value;
    };
    /**
     * Gets the lastSignInRequestId property value. The lastSignInRequestId property
     * @returns a string
     */
    public get lastSignInRequestId() {
        return this._lastSignInRequestId;
    };
    /**
     * Sets the lastSignInRequestId property value. The lastSignInRequestId property
     * @param value Value to set for the lastSignInRequestId property.
     */
    public set lastSignInRequestId(value: string | undefined) {
        this._lastSignInRequestId = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("lastNonInteractiveSignInDateTime", this.lastNonInteractiveSignInDateTime);
        writer.writeStringValue("lastNonInteractiveSignInRequestId", this.lastNonInteractiveSignInRequestId);
        writer.writeDateValue("lastSignInDateTime", this.lastSignInDateTime);
        writer.writeStringValue("lastSignInRequestId", this.lastSignInRequestId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
