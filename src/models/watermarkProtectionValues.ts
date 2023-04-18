import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WatermarkProtectionValues implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether to apply a watermark to any shared content. */
    private _isEnabledForContentSharing?: boolean | undefined;
    /** Indicates whether to apply a watermark to everyone's video feed. */
    private _isEnabledForVideo?: boolean | undefined;
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
     * Instantiates a new watermarkProtectionValues and sets the default values.
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
            "isEnabledForContentSharing": n => { this.isEnabledForContentSharing = n.getBooleanValue(); },
            "isEnabledForVideo": n => { this.isEnabledForVideo = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isEnabledForContentSharing property value. Indicates whether to apply a watermark to any shared content.
     * @returns a boolean
     */
    public get isEnabledForContentSharing() {
        return this._isEnabledForContentSharing;
    };
    /**
     * Sets the isEnabledForContentSharing property value. Indicates whether to apply a watermark to any shared content.
     * @param value Value to set for the isEnabledForContentSharing property.
     */
    public set isEnabledForContentSharing(value: boolean | undefined) {
        this._isEnabledForContentSharing = value;
    };
    /**
     * Gets the isEnabledForVideo property value. Indicates whether to apply a watermark to everyone's video feed.
     * @returns a boolean
     */
    public get isEnabledForVideo() {
        return this._isEnabledForVideo;
    };
    /**
     * Sets the isEnabledForVideo property value. Indicates whether to apply a watermark to everyone's video feed.
     * @param value Value to set for the isEnabledForVideo property.
     */
    public set isEnabledForVideo(value: boolean | undefined) {
        this._isEnabledForVideo = value;
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
        writer.writeBooleanValue("isEnabledForContentSharing", this.isEnabledForContentSharing);
        writer.writeBooleanValue("isEnabledForVideo", this.isEnabledForVideo);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
