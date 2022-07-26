import {MobileApp} from './index';
import {MicrosoftStoreForBusinessLicenseType} from './microsoftStoreForBusinessLicenseType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftStoreForBusinessApp extends MobileApp implements Parsable {
    /** The licenseType property */
    private _licenseType?: MicrosoftStoreForBusinessLicenseType | undefined;
    /** The app package identifier */
    private _packageIdentityName?: string | undefined;
    /** The app product key */
    private _productKey?: string | undefined;
    /** The total number of Microsoft Store for Business licenses. */
    private _totalLicenseCount?: number | undefined;
    /** The number of Microsoft Store for Business licenses in use. */
    private _usedLicenseCount?: number | undefined;
    /**
     * Instantiates a new MicrosoftStoreForBusinessApp and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.microsoftStoreForBusinessApp";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "licenseType": n => { this.licenseType = n.getEnumValue<MicrosoftStoreForBusinessLicenseType>(MicrosoftStoreForBusinessLicenseType); },
            "packageIdentityName": n => { this.packageIdentityName = n.getStringValue(); },
            "productKey": n => { this.productKey = n.getStringValue(); },
            "totalLicenseCount": n => { this.totalLicenseCount = n.getNumberValue(); },
            "usedLicenseCount": n => { this.usedLicenseCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the licenseType property value. The licenseType property
     * @returns a microsoftStoreForBusinessLicenseType
     */
    public get licenseType() {
        return this._licenseType;
    };
    /**
     * Sets the licenseType property value. The licenseType property
     * @param value Value to set for the licenseType property.
     */
    public set licenseType(value: MicrosoftStoreForBusinessLicenseType | undefined) {
        this._licenseType = value;
    };
    /**
     * Gets the packageIdentityName property value. The app package identifier
     * @returns a string
     */
    public get packageIdentityName() {
        return this._packageIdentityName;
    };
    /**
     * Sets the packageIdentityName property value. The app package identifier
     * @param value Value to set for the packageIdentityName property.
     */
    public set packageIdentityName(value: string | undefined) {
        this._packageIdentityName = value;
    };
    /**
     * Gets the productKey property value. The app product key
     * @returns a string
     */
    public get productKey() {
        return this._productKey;
    };
    /**
     * Sets the productKey property value. The app product key
     * @param value Value to set for the productKey property.
     */
    public set productKey(value: string | undefined) {
        this._productKey = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<MicrosoftStoreForBusinessLicenseType>("licenseType", this.licenseType);
        writer.writeStringValue("packageIdentityName", this.packageIdentityName);
        writer.writeStringValue("productKey", this.productKey);
        writer.writeNumberValue("totalLicenseCount", this.totalLicenseCount);
        writer.writeNumberValue("usedLicenseCount", this.usedLicenseCount);
    };
    /**
     * Gets the totalLicenseCount property value. The total number of Microsoft Store for Business licenses.
     * @returns a integer
     */
    public get totalLicenseCount() {
        return this._totalLicenseCount;
    };
    /**
     * Sets the totalLicenseCount property value. The total number of Microsoft Store for Business licenses.
     * @param value Value to set for the totalLicenseCount property.
     */
    public set totalLicenseCount(value: number | undefined) {
        this._totalLicenseCount = value;
    };
    /**
     * Gets the usedLicenseCount property value. The number of Microsoft Store for Business licenses in use.
     * @returns a integer
     */
    public get usedLicenseCount() {
        return this._usedLicenseCount;
    };
    /**
     * Sets the usedLicenseCount property value. The number of Microsoft Store for Business licenses in use.
     * @param value Value to set for the usedLicenseCount property.
     */
    public set usedLicenseCount(value: number | undefined) {
        this._usedLicenseCount = value;
    };
}
