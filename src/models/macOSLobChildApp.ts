import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties of a macOS .app in the package */
export class MacOSLobChildApp implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The build number of the app. */
    private _buildNumber?: string | undefined;
    /** The bundleId of the app. */
    private _bundleId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The version number of the app. */
    private _versionNumber?: string | undefined;
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
     * Gets the buildNumber property value. The build number of the app.
     * @returns a string
     */
    public get buildNumber() {
        return this._buildNumber;
    };
    /**
     * Sets the buildNumber property value. The build number of the app.
     * @param value Value to set for the buildNumber property.
     */
    public set buildNumber(value: string | undefined) {
        this._buildNumber = value;
    };
    /**
     * Gets the bundleId property value. The bundleId of the app.
     * @returns a string
     */
    public get bundleId() {
        return this._bundleId;
    };
    /**
     * Sets the bundleId property value. The bundleId of the app.
     * @param value Value to set for the bundleId property.
     */
    public set bundleId(value: string | undefined) {
        this._bundleId = value;
    };
    /**
     * Instantiates a new macOSLobChildApp and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.macOSLobChildApp";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "buildNumber": n => { this.buildNumber = n.getStringValue(); },
            "bundleId": n => { this.bundleId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "versionNumber": n => { this.versionNumber = n.getStringValue(); },
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
        writer.writeStringValue("buildNumber", this.buildNumber);
        writer.writeStringValue("bundleId", this.bundleId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("versionNumber", this.versionNumber);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the versionNumber property value. The version number of the app.
     * @returns a string
     */
    public get versionNumber() {
        return this._versionNumber;
    };
    /**
     * Sets the versionNumber property value. The version number of the app.
     * @param value Value to set for the versionNumber property.
     */
    public set versionNumber(value: string | undefined) {
        this._versionNumber = value;
    };
}
