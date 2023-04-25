import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdleSessionSignOut implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The isEnabled property */
    private _isEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The signOutAfterInSeconds property */
    private _signOutAfterInSeconds?: number | undefined;
    /** The warnAfterInSeconds property */
    private _warnAfterInSeconds?: number | undefined;
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
     * Instantiates a new idleSessionSignOut and sets the default values.
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "signOutAfterInSeconds": n => { this.signOutAfterInSeconds = n.getNumberValue(); },
            "warnAfterInSeconds": n => { this.warnAfterInSeconds = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isEnabled property value. The isEnabled property
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. The isEnabled property
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
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
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("signOutAfterInSeconds", this.signOutAfterInSeconds);
        writer.writeNumberValue("warnAfterInSeconds", this.warnAfterInSeconds);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the signOutAfterInSeconds property value. The signOutAfterInSeconds property
     * @returns a int64
     */
    public get signOutAfterInSeconds() {
        return this._signOutAfterInSeconds;
    };
    /**
     * Sets the signOutAfterInSeconds property value. The signOutAfterInSeconds property
     * @param value Value to set for the signOutAfterInSeconds property.
     */
    public set signOutAfterInSeconds(value: number | undefined) {
        this._signOutAfterInSeconds = value;
    };
    /**
     * Gets the warnAfterInSeconds property value. The warnAfterInSeconds property
     * @returns a int64
     */
    public get warnAfterInSeconds() {
        return this._warnAfterInSeconds;
    };
    /**
     * Sets the warnAfterInSeconds property value. The warnAfterInSeconds property
     * @param value Value to set for the warnAfterInSeconds property.
     */
    public set warnAfterInSeconds(value: number | undefined) {
        this._warnAfterInSeconds = value;
    };
}
