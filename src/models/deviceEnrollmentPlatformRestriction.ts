import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Platform specific enrollment restrictions
 */
export class DeviceEnrollmentPlatformRestriction implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Max OS version supported */
    private _osMaximumVersion?: string | undefined;
    /** Min OS version supported */
    private _osMinimumVersion?: string | undefined;
    /** Block personally owned devices from enrolling */
    private _personalDeviceEnrollmentBlocked?: boolean | undefined;
    /** Block the platform from enrolling */
    private _platformBlocked?: boolean | undefined;
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
     * Instantiates a new deviceEnrollmentPlatformRestriction and sets the default values.
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "osMaximumVersion": n => { this.osMaximumVersion = n.getStringValue(); },
            "osMinimumVersion": n => { this.osMinimumVersion = n.getStringValue(); },
            "personalDeviceEnrollmentBlocked": n => { this.personalDeviceEnrollmentBlocked = n.getBooleanValue(); },
            "platformBlocked": n => { this.platformBlocked = n.getBooleanValue(); },
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
     * Gets the osMaximumVersion property value. Max OS version supported
     * @returns a string
     */
    public get osMaximumVersion() {
        return this._osMaximumVersion;
    };
    /**
     * Sets the osMaximumVersion property value. Max OS version supported
     * @param value Value to set for the osMaximumVersion property.
     */
    public set osMaximumVersion(value: string | undefined) {
        this._osMaximumVersion = value;
    };
    /**
     * Gets the osMinimumVersion property value. Min OS version supported
     * @returns a string
     */
    public get osMinimumVersion() {
        return this._osMinimumVersion;
    };
    /**
     * Sets the osMinimumVersion property value. Min OS version supported
     * @param value Value to set for the osMinimumVersion property.
     */
    public set osMinimumVersion(value: string | undefined) {
        this._osMinimumVersion = value;
    };
    /**
     * Gets the personalDeviceEnrollmentBlocked property value. Block personally owned devices from enrolling
     * @returns a boolean
     */
    public get personalDeviceEnrollmentBlocked() {
        return this._personalDeviceEnrollmentBlocked;
    };
    /**
     * Sets the personalDeviceEnrollmentBlocked property value. Block personally owned devices from enrolling
     * @param value Value to set for the personalDeviceEnrollmentBlocked property.
     */
    public set personalDeviceEnrollmentBlocked(value: boolean | undefined) {
        this._personalDeviceEnrollmentBlocked = value;
    };
    /**
     * Gets the platformBlocked property value. Block the platform from enrolling
     * @returns a boolean
     */
    public get platformBlocked() {
        return this._platformBlocked;
    };
    /**
     * Sets the platformBlocked property value. Block the platform from enrolling
     * @param value Value to set for the platformBlocked property.
     */
    public set platformBlocked(value: boolean | undefined) {
        this._platformBlocked = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        writer.writeBooleanValue("personalDeviceEnrollmentBlocked", this.personalDeviceEnrollmentBlocked);
        writer.writeBooleanValue("platformBlocked", this.platformBlocked);
        writer.writeAdditionalData(this.additionalData);
    };
}
