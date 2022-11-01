import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BroadcastMeetingCaptionSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether captions are enabled for this Teams live event. */
    private _isCaptionEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The spoken language. */
    private _spokenLanguage?: string | undefined;
    /** The translation languages (choose up to 6). */
    private _translationLanguages?: string[] | undefined;
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
     * Instantiates a new broadcastMeetingCaptionSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.broadcastMeetingCaptionSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isCaptionEnabled": n => { this.isCaptionEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "spokenLanguage": n => { this.spokenLanguage = n.getStringValue(); },
            "translationLanguages": n => { this.translationLanguages = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the isCaptionEnabled property value. Indicates whether captions are enabled for this Teams live event.
     * @returns a boolean
     */
    public get isCaptionEnabled() {
        return this._isCaptionEnabled;
    };
    /**
     * Sets the isCaptionEnabled property value. Indicates whether captions are enabled for this Teams live event.
     * @param value Value to set for the isCaptionEnabled property.
     */
    public set isCaptionEnabled(value: boolean | undefined) {
        this._isCaptionEnabled = value;
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
        writer.writeBooleanValue("isCaptionEnabled", this.isCaptionEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("spokenLanguage", this.spokenLanguage);
        writer.writeCollectionOfPrimitiveValues<string>("translationLanguages", this.translationLanguages);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the spokenLanguage property value. The spoken language.
     * @returns a string
     */
    public get spokenLanguage() {
        return this._spokenLanguage;
    };
    /**
     * Sets the spokenLanguage property value. The spoken language.
     * @param value Value to set for the spokenLanguage property.
     */
    public set spokenLanguage(value: string | undefined) {
        this._spokenLanguage = value;
    };
    /**
     * Gets the translationLanguages property value. The translation languages (choose up to 6).
     * @returns a string
     */
    public get translationLanguages() {
        return this._translationLanguages;
    };
    /**
     * Sets the translationLanguages property value. The translation languages (choose up to 6).
     * @param value Value to set for the translationLanguages property.
     */
    public set translationLanguages(value: string[] | undefined) {
        this._translationLanguages = value;
    };
}
