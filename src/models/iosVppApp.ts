import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createVppLicensingTypeFromDiscriminatorValue} from './createVppLicensingTypeFromDiscriminatorValue';
import {IosDeviceType, MobileApp, VppLicensingType} from './index';
import {VppTokenAccountType} from './vppTokenAccountType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosVppApp extends MobileApp implements Parsable {
    /** The applicable iOS Device Type. */
    private _applicableDeviceType?: IosDeviceType | undefined;
    /** The store URL. */
    private _appStoreUrl?: string | undefined;
    /** The Identity Name. */
    private _bundleId?: string | undefined;
    /** The supported License Type. */
    private _licensingType?: VppLicensingType | undefined;
    /** The VPP application release date and time. */
    private _releaseDateTime?: Date | undefined;
    /** The total number of VPP licenses. */
    private _totalLicenseCount?: number | undefined;
    /** The number of VPP licenses in use. */
    private _usedLicenseCount?: number | undefined;
    /** The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education. */
    private _vppTokenAccountType?: VppTokenAccountType | undefined;
    /** The Apple Id associated with the given Apple Volume Purchase Program Token. */
    private _vppTokenAppleId?: string | undefined;
    /** The organization associated with the Apple Volume Purchase Program Token */
    private _vppTokenOrganizationName?: string | undefined;
    /**
     * Gets the applicableDeviceType property value. The applicable iOS Device Type.
     * @returns a iosDeviceType
     */
    public get applicableDeviceType() {
        return this._applicableDeviceType;
    };
    /**
     * Sets the applicableDeviceType property value. The applicable iOS Device Type.
     * @param value Value to set for the applicableDeviceType property.
     */
    public set applicableDeviceType(value: IosDeviceType | undefined) {
        this._applicableDeviceType = value;
    };
    /**
     * Gets the appStoreUrl property value. The store URL.
     * @returns a string
     */
    public get appStoreUrl() {
        return this._appStoreUrl;
    };
    /**
     * Sets the appStoreUrl property value. The store URL.
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
     * Instantiates a new IosVppApp and sets the default values.
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
            "licensingType": n => { this.licensingType = n.getObjectValue<VppLicensingType>(createVppLicensingTypeFromDiscriminatorValue); },
            "releaseDateTime": n => { this.releaseDateTime = n.getDateValue(); },
            "totalLicenseCount": n => { this.totalLicenseCount = n.getNumberValue(); },
            "usedLicenseCount": n => { this.usedLicenseCount = n.getNumberValue(); },
            "vppTokenAccountType": n => { this.vppTokenAccountType = n.getEnumValue<VppTokenAccountType>(VppTokenAccountType); },
            "vppTokenAppleId": n => { this.vppTokenAppleId = n.getStringValue(); },
            "vppTokenOrganizationName": n => { this.vppTokenOrganizationName = n.getStringValue(); },
        };
    };
    /**
     * Gets the licensingType property value. The supported License Type.
     * @returns a vppLicensingType
     */
    public get licensingType() {
        return this._licensingType;
    };
    /**
     * Sets the licensingType property value. The supported License Type.
     * @param value Value to set for the licensingType property.
     */
    public set licensingType(value: VppLicensingType | undefined) {
        this._licensingType = value;
    };
    /**
     * Gets the releaseDateTime property value. The VPP application release date and time.
     * @returns a Date
     */
    public get releaseDateTime() {
        return this._releaseDateTime;
    };
    /**
     * Sets the releaseDateTime property value. The VPP application release date and time.
     * @param value Value to set for the releaseDateTime property.
     */
    public set releaseDateTime(value: Date | undefined) {
        this._releaseDateTime = value;
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
        writer.writeObjectValue<VppLicensingType>("licensingType", this.licensingType);
        writer.writeDateValue("releaseDateTime", this.releaseDateTime);
        writer.writeNumberValue("totalLicenseCount", this.totalLicenseCount);
        writer.writeNumberValue("usedLicenseCount", this.usedLicenseCount);
        writer.writeEnumValue<VppTokenAccountType>("vppTokenAccountType", this.vppTokenAccountType);
        writer.writeStringValue("vppTokenAppleId", this.vppTokenAppleId);
        writer.writeStringValue("vppTokenOrganizationName", this.vppTokenOrganizationName);
    };
    /**
     * Gets the totalLicenseCount property value. The total number of VPP licenses.
     * @returns a integer
     */
    public get totalLicenseCount() {
        return this._totalLicenseCount;
    };
    /**
     * Sets the totalLicenseCount property value. The total number of VPP licenses.
     * @param value Value to set for the totalLicenseCount property.
     */
    public set totalLicenseCount(value: number | undefined) {
        this._totalLicenseCount = value;
    };
    /**
     * Gets the usedLicenseCount property value. The number of VPP licenses in use.
     * @returns a integer
     */
    public get usedLicenseCount() {
        return this._usedLicenseCount;
    };
    /**
     * Sets the usedLicenseCount property value. The number of VPP licenses in use.
     * @param value Value to set for the usedLicenseCount property.
     */
    public set usedLicenseCount(value: number | undefined) {
        this._usedLicenseCount = value;
    };
    /**
     * Gets the vppTokenAccountType property value. The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education.
     * @returns a vppTokenAccountType
     */
    public get vppTokenAccountType() {
        return this._vppTokenAccountType;
    };
    /**
     * Sets the vppTokenAccountType property value. The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education.
     * @param value Value to set for the vppTokenAccountType property.
     */
    public set vppTokenAccountType(value: VppTokenAccountType | undefined) {
        this._vppTokenAccountType = value;
    };
    /**
     * Gets the vppTokenAppleId property value. The Apple Id associated with the given Apple Volume Purchase Program Token.
     * @returns a string
     */
    public get vppTokenAppleId() {
        return this._vppTokenAppleId;
    };
    /**
     * Sets the vppTokenAppleId property value. The Apple Id associated with the given Apple Volume Purchase Program Token.
     * @param value Value to set for the vppTokenAppleId property.
     */
    public set vppTokenAppleId(value: string | undefined) {
        this._vppTokenAppleId = value;
    };
    /**
     * Gets the vppTokenOrganizationName property value. The organization associated with the Apple Volume Purchase Program Token
     * @returns a string
     */
    public get vppTokenOrganizationName() {
        return this._vppTokenOrganizationName;
    };
    /**
     * Sets the vppTokenOrganizationName property value. The organization associated with the Apple Volume Purchase Program Token
     * @param value Value to set for the vppTokenOrganizationName property.
     */
    public set vppTokenOrganizationName(value: string | undefined) {
        this._vppTokenOrganizationName = value;
    };
}
