import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {IosDeviceType, IosMinimumOperatingSystem, MobileApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosStoreApp extends MobileApp implements Parsable {
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    private _applicableDeviceType?: IosDeviceType | undefined;
    /** The Apple App Store URL */
    private _appStoreUrl?: string | undefined;
    /** The Identity Name. */
    private _bundleId?: string | undefined;
    /** The value for the minimum applicable operating system. */
    private _minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
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
     * Gets the appStoreUrl property value. The Apple App Store URL
     * @returns a string
     */
    public get appStoreUrl() {
        return this._appStoreUrl;
    };
    /**
     * Sets the appStoreUrl property value. The Apple App Store URL
     * @param value Value to set for the appStoreUrl property.
     */
    public set appStoreUrl(value: string | undefined) {
        this._appStoreUrl = value;
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
     * Instantiates a new IosStoreApp and sets the default values.
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
            "applicableDeviceType": n => { this.applicableDeviceType = n.getObjectValue<IosDeviceType>(createIosDeviceTypeFromDiscriminatorValue); },
            "appStoreUrl": n => { this.appStoreUrl = n.getStringValue(); },
            "bundleId": n => { this.bundleId = n.getStringValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystem>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
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
        writer.writeStringValue("appStoreUrl", this.appStoreUrl);
        writer.writeStringValue("bundleId", this.bundleId);
        writer.writeObjectValue<IosMinimumOperatingSystem>("minimumSupportedOperatingSystem", this.minimumSupportedOperatingSystem);
    };
}
