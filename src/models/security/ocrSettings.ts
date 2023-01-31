import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OcrSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether or not OCR is enabled for the case. */
    private _isEnabled?: boolean | undefined;
    /** Maximum image size that will be processed in KB). */
    private _maxImageSize?: number | undefined;
    private _odataType?: string | undefined;
    /** The timeout duration for the OCR engine. A longer timeout might increase success of OCR, but might add to the total processing time. */
    private _timeout?: Duration | undefined;
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
     * Instantiates a new ocrSettings and sets the default values.
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
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "maxImageSize": n => { this.maxImageSize = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "timeout": n => { this.timeout = n.getDurationValue(); },
        };
    };
    /**
     * Gets the isEnabled property value. Indicates whether or not OCR is enabled for the case.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Indicates whether or not OCR is enabled for the case.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Gets the maxImageSize property value. Maximum image size that will be processed in KB).
     * @returns a integer
     */
    public get maxImageSize() {
        return this._maxImageSize;
    };
    /**
     * Sets the maxImageSize property value. Maximum image size that will be processed in KB).
     * @param value Value to set for the maxImageSize property.
     */
    public set maxImageSize(value: number | undefined) {
        this._maxImageSize = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
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
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeNumberValue("maxImageSize", this.maxImageSize);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDurationValue("timeout", this.timeout);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeout property value. The timeout duration for the OCR engine. A longer timeout might increase success of OCR, but might add to the total processing time.
     * @returns a Duration
     */
    public get timeout() {
        return this._timeout;
    };
    /**
     * Sets the timeout property value. The timeout duration for the OCR engine. A longer timeout might increase success of OCR, but might add to the total processing time.
     * @param value Value to set for the timeout property.
     */
    public set timeout(value: Duration | undefined) {
        this._timeout = value;
    };
}
