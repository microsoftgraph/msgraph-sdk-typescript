import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceDetail implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates the browser information of the used for signing-in. */
    private _browser?: string | undefined;
    /** Refers to the UniqueID of the device used for signing-in. */
    private _deviceId?: string | undefined;
    /** Refers to the name of the device used for signing-in. */
    private _displayName?: string | undefined;
    /** Indicates whether the device is compliant or not. */
    private _isCompliant?: boolean | undefined;
    /** Indicates if the device is managed or not. */
    private _isManaged?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Indicates the OS name and version used for signing-in. */
    private _operatingSystem?: string | undefined;
    /** Indicates information on whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined. */
    private _trustType?: string | undefined;
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
     * Gets the browser property value. Indicates the browser information of the used for signing-in.
     * @returns a string
     */
    public get browser() {
        return this._browser;
    };
    /**
     * Sets the browser property value. Indicates the browser information of the used for signing-in.
     * @param value Value to set for the browser property.
     */
    public set browser(value: string | undefined) {
        this._browser = value;
    };
    /**
     * Instantiates a new deviceDetail and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.deviceDetail";
    };
    /**
     * Gets the deviceId property value. Refers to the UniqueID of the device used for signing-in.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. Refers to the UniqueID of the device used for signing-in.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * Gets the displayName property value. Refers to the name of the device used for signing-in.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Refers to the name of the device used for signing-in.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "browser": n => { this.browser = n.getStringValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isCompliant": n => { this.isCompliant = n.getBooleanValue(); },
            "isManaged": n => { this.isManaged = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "trustType": n => { this.trustType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isCompliant property value. Indicates whether the device is compliant or not.
     * @returns a boolean
     */
    public get isCompliant() {
        return this._isCompliant;
    };
    /**
     * Sets the isCompliant property value. Indicates whether the device is compliant or not.
     * @param value Value to set for the isCompliant property.
     */
    public set isCompliant(value: boolean | undefined) {
        this._isCompliant = value;
    };
    /**
     * Gets the isManaged property value. Indicates if the device is managed or not.
     * @returns a boolean
     */
    public get isManaged() {
        return this._isManaged;
    };
    /**
     * Sets the isManaged property value. Indicates if the device is managed or not.
     * @param value Value to set for the isManaged property.
     */
    public set isManaged(value: boolean | undefined) {
        this._isManaged = value;
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
     * Gets the operatingSystem property value. Indicates the OS name and version used for signing-in.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. Indicates the OS name and version used for signing-in.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        this._operatingSystem = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("browser", this.browser);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isCompliant", this.isCompliant);
        writer.writeBooleanValue("isManaged", this.isManaged);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeStringValue("trustType", this.trustType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the trustType property value. Indicates information on whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined.
     * @returns a string
     */
    public get trustType() {
        return this._trustType;
    };
    /**
     * Sets the trustType property value. Indicates information on whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined.
     * @param value Value to set for the trustType property.
     */
    public set trustType(value: string | undefined) {
        this._trustType = value;
    };
}
