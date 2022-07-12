import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {IosDeviceType, IosMinimumOperatingSystem, ManagedMobileLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedIOSLobApp extends ManagedMobileLobApp implements Parsable {
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    private _applicableDeviceType?: IosDeviceType | undefined;
    /** The build number of managed iOS Line of Business (LoB) app. */
    private _buildNumber?: string | undefined;
    /** The Identity Name. */
    private _bundleId?: string | undefined;
    /** The expiration time. */
    private _expirationDateTime?: Date | undefined;
    /** The value for the minimum applicable operating system. */
    private _minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
    /** The version number of managed iOS Line of Business (LoB) app. */
    private _versionNumber?: string | undefined;
    /**
     * Gets the applicableDeviceType property value. Contains properties of the possible iOS device types the mobile app can run on.
     * @returns a iosDeviceType
     */
    public get applicableDeviceType() {
        return this._applicableDeviceType;
    };
    /**
     * Sets the applicableDeviceType property value. Contains properties of the possible iOS device types the mobile app can run on.
     * @param value Value to set for the applicableDeviceType property.
     */
    public set applicableDeviceType(value: IosDeviceType | undefined) {
        this._applicableDeviceType = value;
    };
    /**
     * Gets the buildNumber property value. The build number of managed iOS Line of Business (LoB) app.
     * @returns a string
     */
    public get buildNumber() {
        return this._buildNumber;
    };
    /**
     * Sets the buildNumber property value. The build number of managed iOS Line of Business (LoB) app.
     * @param value Value to set for the buildNumber property.
     */
    public set buildNumber(value: string | undefined) {
        this._buildNumber = value;
    };
    /**
     * Gets the bundleId property value. The Identity Name.
     * @returns a string
     */
    public get bundleId() {
        return this._bundleId;
    };
    /**
     * Sets the bundleId property value. The Identity Name.
     * @param value Value to set for the bundleId property.
     */
    public set bundleId(value: string | undefined) {
        this._bundleId = value;
    };
    /**
     * Instantiates a new ManagedIOSLobApp and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the expirationDateTime property value. The expiration time.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The expiration time.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableDeviceType": n => { this.applicableDeviceType = n.getObjectValue<IosDeviceType>(createIosDeviceTypeFromDiscriminatorValue); },
            "buildNumber": n => { this.buildNumber = n.getStringValue(); },
            "bundleId": n => { this.bundleId = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystem>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
            "versionNumber": n => { this.versionNumber = n.getStringValue(); },
        };
    };
    /**
     * Gets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @returns a iosMinimumOperatingSystem
     */
    public get minimumSupportedOperatingSystem() {
        return this._minimumSupportedOperatingSystem;
    };
    /**
     * Sets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @param value Value to set for the minimumSupportedOperatingSystem property.
     */
    public set minimumSupportedOperatingSystem(value: IosMinimumOperatingSystem | undefined) {
        this._minimumSupportedOperatingSystem = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IosDeviceType>("applicableDeviceType", this.applicableDeviceType);
        writer.writeStringValue("buildNumber", this.buildNumber);
        writer.writeStringValue("bundleId", this.bundleId);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeObjectValue<IosMinimumOperatingSystem>("minimumSupportedOperatingSystem", this.minimumSupportedOperatingSystem);
        writer.writeStringValue("versionNumber", this.versionNumber);
    };
    /**
     * Gets the versionNumber property value. The version number of managed iOS Line of Business (LoB) app.
     * @returns a string
     */
    public get versionNumber() {
        return this._versionNumber;
    };
    /**
     * Sets the versionNumber property value. The version number of managed iOS Line of Business (LoB) app.
     * @param value Value to set for the versionNumber property.
     */
    public set versionNumber(value: string | undefined) {
        this._versionNumber = value;
    };
}
