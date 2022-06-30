import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {IosDeviceTypeImpl, IosMinimumOperatingSystemImpl, ManagedAppImpl} from './index';
import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {ManagedIOSStoreApp} from './managedIOSStoreApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedIOSStoreAppImpl extends ManagedAppImpl implements ManagedIOSStoreApp {
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    private _applicableDeviceType?: IosDeviceType | undefined;
    /** The Apple AppStoreUrl. */
    private _appStoreUrl?: string | undefined;
    /** The app's Bundle ID. */
    private _bundleId?: string | undefined;
    /** Contains properties of the minimum operating system required for an iOS mobile app. */
    private _minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
    /**
     * Gets the applicableDeviceType property value. Contains properties of the possible iOS device types the mobile app can run on.
     * @returns a IosDeviceTypeInterface
     */
    public get applicableDeviceType() {
        return this._applicableDeviceType;
    };
    /**
     * Sets the applicableDeviceType property value. Contains properties of the possible iOS device types the mobile app can run on.
     * @param value Value to set for the applicableDeviceType property.
     */
    public set applicableDeviceType(value: IosDeviceType | undefined) {
        if(value) {
            this._applicableDeviceType = value instanceof IosDeviceTypeImpl? value : new IosDeviceTypeImpl(value);
        }
    };
    /**
     * Gets the appStoreUrl property value. The Apple AppStoreUrl.
     * @returns a string
     */
    public get appStoreUrl() {
        return this._appStoreUrl;
    };
    /**
     * Sets the appStoreUrl property value. The Apple AppStoreUrl.
     * @param value Value to set for the appStoreUrl property.
     */
    public set appStoreUrl(value: string | undefined) {
        if(value) {
            this._appStoreUrl = value;
        }
    };
    /**
     * Gets the bundleId property value. The app's Bundle ID.
     * @returns a string
     */
    public get bundleId() {
        return this._bundleId;
    };
    /**
     * Sets the bundleId property value. The app's Bundle ID.
     * @param value Value to set for the bundleId property.
     */
    public set bundleId(value: string | undefined) {
        if(value) {
            this._bundleId = value;
        }
    };
    /**
     * Instantiates a new ManagedIOSStoreApp and sets the default values.
     * @param managedIOSStoreAppParameterValue 
     */
    public constructor(managedIOSStoreAppParameterValue?: ManagedIOSStoreApp | undefined) {
        super(managedIOSStoreAppParameterValue);
        this._applicableDeviceType = managedIOSStoreAppParameterValue?.applicableDeviceType;
        this._appStoreUrl = managedIOSStoreAppParameterValue?.appStoreUrl;
        this._bundleId = managedIOSStoreAppParameterValue?.bundleId;
        this._minimumSupportedOperatingSystem = managedIOSStoreAppParameterValue?.minimumSupportedOperatingSystem;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableDeviceType": n => { this.applicableDeviceType = n.getObjectValue<IosDeviceTypeImpl>(createIosDeviceTypeFromDiscriminatorValue); },
            "appStoreUrl": n => { this.appStoreUrl = n.getStringValue(); },
            "bundleId": n => { this.bundleId = n.getStringValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystemImpl>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the minimumSupportedOperatingSystem property value. Contains properties of the minimum operating system required for an iOS mobile app.
     * @returns a IosMinimumOperatingSystemInterface
     */
    public get minimumSupportedOperatingSystem() {
        return this._minimumSupportedOperatingSystem;
    };
    /**
     * Sets the minimumSupportedOperatingSystem property value. Contains properties of the minimum operating system required for an iOS mobile app.
     * @param value Value to set for the minimumSupportedOperatingSystem property.
     */
    public set minimumSupportedOperatingSystem(value: IosMinimumOperatingSystem | undefined) {
        if(value) {
            this._minimumSupportedOperatingSystem = value instanceof IosMinimumOperatingSystemImpl? value : new IosMinimumOperatingSystemImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.applicableDeviceType){
            writer.writeObjectValue<IosDeviceTypeImpl>("applicableDeviceType", (!this.applicableDeviceType || this.applicableDeviceType instanceof IosDeviceTypeImpl? this.applicableDeviceType : new IosDeviceTypeImpl(this.applicableDeviceType)));
        }
        if(this.appStoreUrl){
            writer.writeStringValue("appStoreUrl", this.appStoreUrl);
        }
        if(this.bundleId){
            writer.writeStringValue("bundleId", this.bundleId);
        }
        if(this.minimumSupportedOperatingSystem){
            writer.writeObjectValue<IosMinimumOperatingSystemImpl>("minimumSupportedOperatingSystem", (!this.minimumSupportedOperatingSystem || this.minimumSupportedOperatingSystem instanceof IosMinimumOperatingSystemImpl? this.minimumSupportedOperatingSystem : new IosMinimumOperatingSystemImpl(this.minimumSupportedOperatingSystem)));
        }
    };
}
