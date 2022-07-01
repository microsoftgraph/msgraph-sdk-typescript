import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {IosDeviceTypeImpl, IosMinimumOperatingSystemImpl, ManagedMobileLobAppImpl} from './index';
import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {ManagedIOSLobApp} from './managedIOSLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedIOSLobAppImpl extends ManagedMobileLobAppImpl implements ManagedIOSLobApp {
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
            this._applicableDeviceType = value instanceof IosDeviceTypeImpl? value as IosDeviceTypeImpl: new IosDeviceTypeImpl(value);
        }
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
        if(value) {
            this._buildNumber = value;
        }
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
        if(value) {
            this._bundleId = value;
        }
    };
    /**
     * Instantiates a new ManagedIOSLobApp and sets the default values.
     * @param managedIOSLobAppParameterValue 
     */
    public constructor(managedIOSLobAppParameterValue?: ManagedIOSLobApp | undefined) {
        super(managedIOSLobAppParameterValue);
        this._applicableDeviceType = managedIOSLobAppParameterValue?.applicableDeviceType;
        this._buildNumber = managedIOSLobAppParameterValue?.buildNumber;
        this._bundleId = managedIOSLobAppParameterValue?.bundleId;
        this._expirationDateTime = managedIOSLobAppParameterValue?.expirationDateTime;
        this._minimumSupportedOperatingSystem = managedIOSLobAppParameterValue?.minimumSupportedOperatingSystem;
        this._versionNumber = managedIOSLobAppParameterValue?.versionNumber;
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
        if(value) {
            this._expirationDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableDeviceType": n => { this.applicableDeviceType = n.getObjectValue<IosDeviceTypeImpl>(createIosDeviceTypeFromDiscriminatorValue); },
            "buildNumber": n => { this.buildNumber = n.getStringValue(); },
            "bundleId": n => { this.bundleId = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystemImpl>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
            "versionNumber": n => { this.versionNumber = n.getStringValue(); },
        };
    };
    /**
     * Gets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @returns a IosMinimumOperatingSystemInterface
     */
    public get minimumSupportedOperatingSystem() {
        return this._minimumSupportedOperatingSystem;
    };
    /**
     * Sets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @param value Value to set for the minimumSupportedOperatingSystem property.
     */
    public set minimumSupportedOperatingSystem(value: IosMinimumOperatingSystem | undefined) {
        if(value) {
            this._minimumSupportedOperatingSystem = value instanceof IosMinimumOperatingSystemImpl? value as IosMinimumOperatingSystemImpl: new IosMinimumOperatingSystemImpl(value);
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
            writer.writeObjectValue<IosDeviceTypeImpl>("applicableDeviceType", (this.applicableDeviceType instanceof IosDeviceTypeImpl? this.applicableDeviceType as IosDeviceTypeImpl: new IosDeviceTypeImpl(this.applicableDeviceType)));
        }
        if(this.buildNumber){
            writer.writeStringValue("buildNumber", this.buildNumber);
        }
        if(this.bundleId){
            writer.writeStringValue("bundleId", this.bundleId);
        }
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.minimumSupportedOperatingSystem){
            writer.writeObjectValue<IosMinimumOperatingSystemImpl>("minimumSupportedOperatingSystem", (this.minimumSupportedOperatingSystem instanceof IosMinimumOperatingSystemImpl? this.minimumSupportedOperatingSystem as IosMinimumOperatingSystemImpl: new IosMinimumOperatingSystemImpl(this.minimumSupportedOperatingSystem)));
        }
        if(this.versionNumber){
            writer.writeStringValue("versionNumber", this.versionNumber);
        }
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
        if(value) {
            this._versionNumber = value;
        }
    };
}
