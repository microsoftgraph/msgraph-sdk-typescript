import {Win32LobAppMsiPackageType} from './win32LobAppMsiPackageType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains MSI app properties for a Win32 App. */
export class Win32LobAppMsiInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The MSI package type. Possible values are: perMachine, perUser, dualPurpose. */
    private _packageType?: Win32LobAppMsiPackageType | undefined;
    /** The MSI product code. */
    private _productCode?: string | undefined;
    /** The MSI product name. */
    private _productName?: string | undefined;
    /** The MSI product version. */
    private _productVersion?: string | undefined;
    /** The MSI publisher. */
    private _publisher?: string | undefined;
    /** Whether the MSI app requires the machine to reboot to complete installation. */
    private _requiresReboot?: boolean | undefined;
    /** The MSI upgrade code. */
    private _upgradeCode?: string | undefined;
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
     * Instantiates a new win32LobAppMsiInformation and sets the default values.
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
            "packageType": n => { this.packageType = n.getEnumValue<Win32LobAppMsiPackageType>(Win32LobAppMsiPackageType); },
            "productCode": n => { this.productCode = n.getStringValue(); },
            "productName": n => { this.productName = n.getStringValue(); },
            "productVersion": n => { this.productVersion = n.getStringValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "requiresReboot": n => { this.requiresReboot = n.getBooleanValue(); },
            "upgradeCode": n => { this.upgradeCode = n.getStringValue(); },
        };
    };
    /**
     * Gets the packageType property value. The MSI package type. Possible values are: perMachine, perUser, dualPurpose.
     * @returns a win32LobAppMsiPackageType
     */
    public get packageType() {
        return this._packageType;
    };
    /**
     * Sets the packageType property value. The MSI package type. Possible values are: perMachine, perUser, dualPurpose.
     * @param value Value to set for the packageType property.
     */
    public set packageType(value: Win32LobAppMsiPackageType | undefined) {
        this._packageType = value;
    };
    /**
     * Gets the productCode property value. The MSI product code.
     * @returns a string
     */
    public get productCode() {
        return this._productCode;
    };
    /**
     * Sets the productCode property value. The MSI product code.
     * @param value Value to set for the productCode property.
     */
    public set productCode(value: string | undefined) {
        this._productCode = value;
    };
    /**
     * Gets the productName property value. The MSI product name.
     * @returns a string
     */
    public get productName() {
        return this._productName;
    };
    /**
     * Sets the productName property value. The MSI product name.
     * @param value Value to set for the productName property.
     */
    public set productName(value: string | undefined) {
        this._productName = value;
    };
    /**
     * Gets the productVersion property value. The MSI product version.
     * @returns a string
     */
    public get productVersion() {
        return this._productVersion;
    };
    /**
     * Sets the productVersion property value. The MSI product version.
     * @param value Value to set for the productVersion property.
     */
    public set productVersion(value: string | undefined) {
        this._productVersion = value;
    };
    /**
     * Gets the publisher property value. The MSI publisher.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Sets the publisher property value. The MSI publisher.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        this._publisher = value;
    };
    /**
     * Gets the requiresReboot property value. Whether the MSI app requires the machine to reboot to complete installation.
     * @returns a boolean
     */
    public get requiresReboot() {
        return this._requiresReboot;
    };
    /**
     * Sets the requiresReboot property value. Whether the MSI app requires the machine to reboot to complete installation.
     * @param value Value to set for the requiresReboot property.
     */
    public set requiresReboot(value: boolean | undefined) {
        this._requiresReboot = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<Win32LobAppMsiPackageType>("packageType", this.packageType);
        writer.writeStringValue("productCode", this.productCode);
        writer.writeStringValue("productName", this.productName);
        writer.writeStringValue("productVersion", this.productVersion);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeBooleanValue("requiresReboot", this.requiresReboot);
        writer.writeStringValue("upgradeCode", this.upgradeCode);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the upgradeCode property value. The MSI upgrade code.
     * @returns a string
     */
    public get upgradeCode() {
        return this._upgradeCode;
    };
    /**
     * Sets the upgradeCode property value. The MSI upgrade code.
     * @param value Value to set for the upgradeCode property.
     */
    public set upgradeCode(value: string | undefined) {
        this._upgradeCode = value;
    };
}
