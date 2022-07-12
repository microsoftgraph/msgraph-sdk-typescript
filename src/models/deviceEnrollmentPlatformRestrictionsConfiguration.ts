import {AdminMember1, DeviceEnrollmentConfiguration, DeviceEnrollmentPlatformRestriction} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentPlatformRestrictionsConfiguration extends DeviceEnrollmentConfiguration implements Parsable {
    /** Android restrictions based on platform, platform operating system version, and device ownership */
    private _androidRestriction?: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined;
    /** Ios restrictions based on platform, platform operating system version, and device ownership */
    private _iosRestriction?: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined;
    /** Mac restrictions based on platform, platform operating system version, and device ownership */
    private _macOSRestriction?: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined;
    /** Windows mobile restrictions based on platform, platform operating system version, and device ownership */
    private _windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined;
    /** Windows restrictions based on platform, platform operating system version, and device ownership */
    private _windowsRestriction?: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined;
    /**
     * Gets the androidRestriction property value. Android restrictions based on platform, platform operating system version, and device ownership
     * @returns a admin
     */
    public get androidRestriction() {
        return this._androidRestriction;
    };
    /**
     * Sets the androidRestriction property value. Android restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the androidRestriction property.
     */
    public set androidRestriction(value: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined) {
        this._androidRestriction = value;
    };
    /**
     * Instantiates a new DeviceEnrollmentPlatformRestrictionsConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "androidRestriction": n => { this.androidRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
            "iosRestriction": n => { this.iosRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
            "macOSRestriction": n => { this.macOSRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
            "windowsMobileRestriction": n => { this.windowsMobileRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
            "windowsRestriction": n => { this.windowsRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the iosRestriction property value. Ios restrictions based on platform, platform operating system version, and device ownership
     * @returns a admin
     */
    public get iosRestriction() {
        return this._iosRestriction;
    };
    /**
     * Sets the iosRestriction property value. Ios restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the iosRestriction property.
     */
    public set iosRestriction(value: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined) {
        this._iosRestriction = value;
    };
    /**
     * Gets the macOSRestriction property value. Mac restrictions based on platform, platform operating system version, and device ownership
     * @returns a admin
     */
    public get macOSRestriction() {
        return this._macOSRestriction;
    };
    /**
     * Sets the macOSRestriction property value. Mac restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the macOSRestriction property.
     */
    public set macOSRestriction(value: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined) {
        this._macOSRestriction = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("androidRestriction", this.androidRestriction);
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("iosRestriction", this.iosRestriction);
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("macOSRestriction", this.macOSRestriction);
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("windowsMobileRestriction", this.windowsMobileRestriction);
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("windowsRestriction", this.windowsRestriction);
    };
    /**
     * Gets the windowsMobileRestriction property value. Windows mobile restrictions based on platform, platform operating system version, and device ownership
     * @returns a admin
     */
    public get windowsMobileRestriction() {
        return this._windowsMobileRestriction;
    };
    /**
     * Sets the windowsMobileRestriction property value. Windows mobile restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the windowsMobileRestriction property.
     */
    public set windowsMobileRestriction(value: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined) {
        this._windowsMobileRestriction = value;
    };
    /**
     * Gets the windowsRestriction property value. Windows restrictions based on platform, platform operating system version, and device ownership
     * @returns a admin
     */
    public get windowsRestriction() {
        return this._windowsRestriction;
    };
    /**
     * Sets the windowsRestriction property value. Windows restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the windowsRestriction property.
     */
    public set windowsRestriction(value: DeviceEnrollmentPlatformRestriction | AdminMember1 | undefined) {
        this._windowsRestriction = value;
    };
}
