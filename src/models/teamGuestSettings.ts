import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamGuestSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If set to true, guests can add and update channels. */
    private _allowCreateUpdateChannels?: boolean | undefined;
    /** If set to true, guests can delete channels. */
    private _allowDeleteChannels?: boolean | undefined;
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
     * Gets the allowCreateUpdateChannels property value. If set to true, guests can add and update channels.
     * @returns a boolean
     */
    public get allowCreateUpdateChannels() {
        return this._allowCreateUpdateChannels;
    };
    /**
     * Sets the allowCreateUpdateChannels property value. If set to true, guests can add and update channels.
     * @param value Value to set for the allowCreateUpdateChannels property.
     */
    public set allowCreateUpdateChannels(value: boolean | undefined) {
        this._allowCreateUpdateChannels = value;
    };
    /**
     * Gets the allowDeleteChannels property value. If set to true, guests can delete channels.
     * @returns a boolean
     */
    public get allowDeleteChannels() {
        return this._allowDeleteChannels;
    };
    /**
     * Sets the allowDeleteChannels property value. If set to true, guests can delete channels.
     * @param value Value to set for the allowDeleteChannels property.
     */
    public set allowDeleteChannels(value: boolean | undefined) {
        this._allowDeleteChannels = value;
    };
    /**
     * Instantiates a new teamGuestSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.teamGuestSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowCreateUpdateChannels": n => { this.allowCreateUpdateChannels = n.getBooleanValue(); },
            "allowDeleteChannels": n => { this.allowDeleteChannels = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
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
        writer.writeBooleanValue("allowCreateUpdateChannels", this.allowCreateUpdateChannels);
        writer.writeBooleanValue("allowDeleteChannels", this.allowDeleteChannels);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
