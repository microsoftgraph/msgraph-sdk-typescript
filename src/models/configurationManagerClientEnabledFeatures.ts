import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** configuration Manager client enabled features */
export class ConfigurationManagerClientEnabledFeatures implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Whether compliance policy is managed by Intune */
    private _compliancePolicy?: boolean | undefined;
    /** Whether device configuration is managed by Intune */
    private _deviceConfiguration?: boolean | undefined;
    /** Whether inventory is managed by Intune */
    private _inventory?: boolean | undefined;
    /** Whether modern application is managed by Intune */
    private _modernApps?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Whether resource access is managed by Intune */
    private _resourceAccess?: boolean | undefined;
    /** Whether Windows Update for Business is managed by Intune */
    private _windowsUpdateForBusiness?: boolean | undefined;
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
     * Gets the compliancePolicy property value. Whether compliance policy is managed by Intune
     * @returns a boolean
     */
    public get compliancePolicy() {
        return this._compliancePolicy;
    };
    /**
     * Sets the compliancePolicy property value. Whether compliance policy is managed by Intune
     * @param value Value to set for the compliancePolicy property.
     */
    public set compliancePolicy(value: boolean | undefined) {
        this._compliancePolicy = value;
    };
    /**
     * Instantiates a new configurationManagerClientEnabledFeatures and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the deviceConfiguration property value. Whether device configuration is managed by Intune
     * @returns a boolean
     */
    public get deviceConfiguration() {
        return this._deviceConfiguration;
    };
    /**
     * Sets the deviceConfiguration property value. Whether device configuration is managed by Intune
     * @param value Value to set for the deviceConfiguration property.
     */
    public set deviceConfiguration(value: boolean | undefined) {
        this._deviceConfiguration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "compliancePolicy": n => { this.compliancePolicy = n.getBooleanValue(); },
            "deviceConfiguration": n => { this.deviceConfiguration = n.getBooleanValue(); },
            "inventory": n => { this.inventory = n.getBooleanValue(); },
            "modernApps": n => { this.modernApps = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "resourceAccess": n => { this.resourceAccess = n.getBooleanValue(); },
            "windowsUpdateForBusiness": n => { this.windowsUpdateForBusiness = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the inventory property value. Whether inventory is managed by Intune
     * @returns a boolean
     */
    public get inventory() {
        return this._inventory;
    };
    /**
     * Sets the inventory property value. Whether inventory is managed by Intune
     * @param value Value to set for the inventory property.
     */
    public set inventory(value: boolean | undefined) {
        this._inventory = value;
    };
    /**
     * Gets the modernApps property value. Whether modern application is managed by Intune
     * @returns a boolean
     */
    public get modernApps() {
        return this._modernApps;
    };
    /**
     * Sets the modernApps property value. Whether modern application is managed by Intune
     * @param value Value to set for the modernApps property.
     */
    public set modernApps(value: boolean | undefined) {
        this._modernApps = value;
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
     * Gets the resourceAccess property value. Whether resource access is managed by Intune
     * @returns a boolean
     */
    public get resourceAccess() {
        return this._resourceAccess;
    };
    /**
     * Sets the resourceAccess property value. Whether resource access is managed by Intune
     * @param value Value to set for the resourceAccess property.
     */
    public set resourceAccess(value: boolean | undefined) {
        this._resourceAccess = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("compliancePolicy", this.compliancePolicy);
        writer.writeBooleanValue("deviceConfiguration", this.deviceConfiguration);
        writer.writeBooleanValue("inventory", this.inventory);
        writer.writeBooleanValue("modernApps", this.modernApps);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("resourceAccess", this.resourceAccess);
        writer.writeBooleanValue("windowsUpdateForBusiness", this.windowsUpdateForBusiness);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the windowsUpdateForBusiness property value. Whether Windows Update for Business is managed by Intune
     * @returns a boolean
     */
    public get windowsUpdateForBusiness() {
        return this._windowsUpdateForBusiness;
    };
    /**
     * Sets the windowsUpdateForBusiness property value. Whether Windows Update for Business is managed by Intune
     * @param value Value to set for the windowsUpdateForBusiness property.
     */
    public set windowsUpdateForBusiness(value: boolean | undefined) {
        this._windowsUpdateForBusiness = value;
    };
}
