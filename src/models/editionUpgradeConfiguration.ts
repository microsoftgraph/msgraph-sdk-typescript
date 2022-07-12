import {EditionUpgradeLicenseType} from './editionUpgradeLicenseType';
import {DeviceConfiguration} from './index';
import {Windows10EditionType} from './windows10EditionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EditionUpgradeConfiguration extends DeviceConfiguration implements Parsable {
    /** Edition Upgrade License File Content. */
    private _license?: string | undefined;
    /** Edition Upgrade License type */
    private _licenseType?: EditionUpgradeLicenseType | undefined;
    /** Edition Upgrade Product Key. */
    private _productKey?: string | undefined;
    /** Windows 10 Edition type. */
    private _targetEdition?: Windows10EditionType | undefined;
    /**
     * Instantiates a new EditionUpgradeConfiguration and sets the default values.
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
            "license": n => { this.license = n.getStringValue(); },
            "licenseType": n => { this.licenseType = n.getEnumValue<EditionUpgradeLicenseType>(EditionUpgradeLicenseType); },
            "productKey": n => { this.productKey = n.getStringValue(); },
            "targetEdition": n => { this.targetEdition = n.getEnumValue<Windows10EditionType>(Windows10EditionType); },
        };
    };
    /**
     * Gets the license property value. Edition Upgrade License File Content.
     * @returns a string
     */
    public get license() {
        return this._license;
    };
    /**
     * Sets the license property value. Edition Upgrade License File Content.
     * @param value Value to set for the license property.
     */
    public set license(value: string | undefined) {
        this._license = value;
    };
    /**
     * Gets the licenseType property value. Edition Upgrade License type
     * @returns a editionUpgradeLicenseType
     */
    public get licenseType() {
        return this._licenseType;
    };
    /**
     * Sets the licenseType property value. Edition Upgrade License type
     * @param value Value to set for the licenseType property.
     */
    public set licenseType(value: EditionUpgradeLicenseType | undefined) {
        this._licenseType = value;
    };
    /**
     * Gets the productKey property value. Edition Upgrade Product Key.
     * @returns a string
     */
    public get productKey() {
        return this._productKey;
    };
    /**
     * Sets the productKey property value. Edition Upgrade Product Key.
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
        writer.writeStringValue("license", this.license);
        writer.writeEnumValue<EditionUpgradeLicenseType>("licenseType", this.licenseType);
        writer.writeStringValue("productKey", this.productKey);
        writer.writeEnumValue<Windows10EditionType>("targetEdition", this.targetEdition);
    };
    /**
     * Gets the targetEdition property value. Windows 10 Edition type.
     * @returns a windows10EditionType
     */
    public get targetEdition() {
        return this._targetEdition;
    };
    /**
     * Sets the targetEdition property value. Windows 10 Edition type.
     * @param value Value to set for the targetEdition property.
     */
    public set targetEdition(value: Windows10EditionType | undefined) {
        this._targetEdition = value;
    };
}
