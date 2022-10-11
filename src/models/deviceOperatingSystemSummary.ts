import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device operating system summary. */
export class DeviceOperatingSystemSummary implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The count of Corporate work profile Android devices. Also known as Corporate Owned Personally Enabled (COPE). Valid values -1 to 2147483647 */
    private _androidCorporateWorkProfileCount?: number | undefined;
    /** Number of android device count. */
    private _androidCount?: number | undefined;
    /** Number of dedicated Android devices. */
    private _androidDedicatedCount?: number | undefined;
    /** Number of device admin Android devices. */
    private _androidDeviceAdminCount?: number | undefined;
    /** Number of fully managed Android devices. */
    private _androidFullyManagedCount?: number | undefined;
    /** Number of work profile Android devices. */
    private _androidWorkProfileCount?: number | undefined;
    /** Number of ConfigMgr managed devices. */
    private _configMgrDeviceCount?: number | undefined;
    /** Number of iOS device count. */
    private _iosCount?: number | undefined;
    /** Number of Mac OS X device count. */
    private _macOSCount?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Number of unknown device count. */
    private _unknownCount?: number | undefined;
    /** Number of Windows device count. */
    private _windowsCount?: number | undefined;
    /** Number of Windows mobile device count. */
    private _windowsMobileCount?: number | undefined;
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
     * Gets the androidCorporateWorkProfileCount property value. The count of Corporate work profile Android devices. Also known as Corporate Owned Personally Enabled (COPE). Valid values -1 to 2147483647
     * @returns a integer
     */
    public get androidCorporateWorkProfileCount() {
        return this._androidCorporateWorkProfileCount;
    };
    /**
     * Sets the androidCorporateWorkProfileCount property value. The count of Corporate work profile Android devices. Also known as Corporate Owned Personally Enabled (COPE). Valid values -1 to 2147483647
     * @param value Value to set for the androidCorporateWorkProfileCount property.
     */
    public set androidCorporateWorkProfileCount(value: number | undefined) {
        this._androidCorporateWorkProfileCount = value;
    };
    /**
     * Gets the androidCount property value. Number of android device count.
     * @returns a integer
     */
    public get androidCount() {
        return this._androidCount;
    };
    /**
     * Sets the androidCount property value. Number of android device count.
     * @param value Value to set for the androidCount property.
     */
    public set androidCount(value: number | undefined) {
        this._androidCount = value;
    };
    /**
     * Gets the androidDedicatedCount property value. Number of dedicated Android devices.
     * @returns a integer
     */
    public get androidDedicatedCount() {
        return this._androidDedicatedCount;
    };
    /**
     * Sets the androidDedicatedCount property value. Number of dedicated Android devices.
     * @param value Value to set for the androidDedicatedCount property.
     */
    public set androidDedicatedCount(value: number | undefined) {
        this._androidDedicatedCount = value;
    };
    /**
     * Gets the androidDeviceAdminCount property value. Number of device admin Android devices.
     * @returns a integer
     */
    public get androidDeviceAdminCount() {
        return this._androidDeviceAdminCount;
    };
    /**
     * Sets the androidDeviceAdminCount property value. Number of device admin Android devices.
     * @param value Value to set for the androidDeviceAdminCount property.
     */
    public set androidDeviceAdminCount(value: number | undefined) {
        this._androidDeviceAdminCount = value;
    };
    /**
     * Gets the androidFullyManagedCount property value. Number of fully managed Android devices.
     * @returns a integer
     */
    public get androidFullyManagedCount() {
        return this._androidFullyManagedCount;
    };
    /**
     * Sets the androidFullyManagedCount property value. Number of fully managed Android devices.
     * @param value Value to set for the androidFullyManagedCount property.
     */
    public set androidFullyManagedCount(value: number | undefined) {
        this._androidFullyManagedCount = value;
    };
    /**
     * Gets the androidWorkProfileCount property value. Number of work profile Android devices.
     * @returns a integer
     */
    public get androidWorkProfileCount() {
        return this._androidWorkProfileCount;
    };
    /**
     * Sets the androidWorkProfileCount property value. Number of work profile Android devices.
     * @param value Value to set for the androidWorkProfileCount property.
     */
    public set androidWorkProfileCount(value: number | undefined) {
        this._androidWorkProfileCount = value;
    };
    /**
     * Gets the configMgrDeviceCount property value. Number of ConfigMgr managed devices.
     * @returns a integer
     */
    public get configMgrDeviceCount() {
        return this._configMgrDeviceCount;
    };
    /**
     * Sets the configMgrDeviceCount property value. Number of ConfigMgr managed devices.
     * @param value Value to set for the configMgrDeviceCount property.
     */
    public set configMgrDeviceCount(value: number | undefined) {
        this._configMgrDeviceCount = value;
    };
    /**
     * Instantiates a new deviceOperatingSystemSummary and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.deviceOperatingSystemSummary";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "androidCorporateWorkProfileCount": n => { this.androidCorporateWorkProfileCount = n.getNumberValue(); },
            "androidCount": n => { this.androidCount = n.getNumberValue(); },
            "androidDedicatedCount": n => { this.androidDedicatedCount = n.getNumberValue(); },
            "androidDeviceAdminCount": n => { this.androidDeviceAdminCount = n.getNumberValue(); },
            "androidFullyManagedCount": n => { this.androidFullyManagedCount = n.getNumberValue(); },
            "androidWorkProfileCount": n => { this.androidWorkProfileCount = n.getNumberValue(); },
            "configMgrDeviceCount": n => { this.configMgrDeviceCount = n.getNumberValue(); },
            "iosCount": n => { this.iosCount = n.getNumberValue(); },
            "macOSCount": n => { this.macOSCount = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "unknownCount": n => { this.unknownCount = n.getNumberValue(); },
            "windowsCount": n => { this.windowsCount = n.getNumberValue(); },
            "windowsMobileCount": n => { this.windowsMobileCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the iosCount property value. Number of iOS device count.
     * @returns a integer
     */
    public get iosCount() {
        return this._iosCount;
    };
    /**
     * Sets the iosCount property value. Number of iOS device count.
     * @param value Value to set for the iosCount property.
     */
    public set iosCount(value: number | undefined) {
        this._iosCount = value;
    };
    /**
     * Gets the macOSCount property value. Number of Mac OS X device count.
     * @returns a integer
     */
    public get macOSCount() {
        return this._macOSCount;
    };
    /**
     * Sets the macOSCount property value. Number of Mac OS X device count.
     * @param value Value to set for the macOSCount property.
     */
    public set macOSCount(value: number | undefined) {
        this._macOSCount = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("androidCorporateWorkProfileCount", this.androidCorporateWorkProfileCount);
        writer.writeNumberValue("androidCount", this.androidCount);
        writer.writeNumberValue("androidDedicatedCount", this.androidDedicatedCount);
        writer.writeNumberValue("androidDeviceAdminCount", this.androidDeviceAdminCount);
        writer.writeNumberValue("androidFullyManagedCount", this.androidFullyManagedCount);
        writer.writeNumberValue("androidWorkProfileCount", this.androidWorkProfileCount);
        writer.writeNumberValue("configMgrDeviceCount", this.configMgrDeviceCount);
        writer.writeNumberValue("iosCount", this.iosCount);
        writer.writeNumberValue("macOSCount", this.macOSCount);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("unknownCount", this.unknownCount);
        writer.writeNumberValue("windowsCount", this.windowsCount);
        writer.writeNumberValue("windowsMobileCount", this.windowsMobileCount);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the unknownCount property value. Number of unknown device count.
     * @returns a integer
     */
    public get unknownCount() {
        return this._unknownCount;
    };
    /**
     * Sets the unknownCount property value. Number of unknown device count.
     * @param value Value to set for the unknownCount property.
     */
    public set unknownCount(value: number | undefined) {
        this._unknownCount = value;
    };
    /**
     * Gets the windowsCount property value. Number of Windows device count.
     * @returns a integer
     */
    public get windowsCount() {
        return this._windowsCount;
    };
    /**
     * Sets the windowsCount property value. Number of Windows device count.
     * @param value Value to set for the windowsCount property.
     */
    public set windowsCount(value: number | undefined) {
        this._windowsCount = value;
    };
    /**
     * Gets the windowsMobileCount property value. Number of Windows mobile device count.
     * @returns a integer
     */
    public get windowsMobileCount() {
        return this._windowsMobileCount;
    };
    /**
     * Sets the windowsMobileCount property value. Number of Windows mobile device count.
     * @param value Value to set for the windowsMobileCount property.
     */
    public set windowsMobileCount(value: number | undefined) {
        this._windowsMobileCount = value;
    };
}
