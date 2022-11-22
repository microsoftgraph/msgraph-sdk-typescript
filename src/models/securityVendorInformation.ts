import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecurityVendorInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Specific provider (product/service - not vendor company); for example, WindowsDefenderATP. */
    private _provider?: string | undefined;
    /** Version of the provider or subprovider, if it exists, that generated the alert. Required */
    private _providerVersion?: string | undefined;
    /** Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen. */
    private _subProvider?: string | undefined;
    /** Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required */
    private _vendor?: string | undefined;
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
     * Instantiates a new securityVendorInformation and sets the default values.
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "provider": n => { this.provider = n.getStringValue(); },
            "providerVersion": n => { this.providerVersion = n.getStringValue(); },
            "subProvider": n => { this.subProvider = n.getStringValue(); },
            "vendor": n => { this.vendor = n.getStringValue(); },
        };
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
     * Gets the provider property value. Specific provider (product/service - not vendor company); for example, WindowsDefenderATP.
     * @returns a string
     */
    public get provider() {
        return this._provider;
    };
    /**
     * Sets the provider property value. Specific provider (product/service - not vendor company); for example, WindowsDefenderATP.
     * @param value Value to set for the provider property.
     */
    public set provider(value: string | undefined) {
        this._provider = value;
    };
    /**
     * Gets the providerVersion property value. Version of the provider or subprovider, if it exists, that generated the alert. Required
     * @returns a string
     */
    public get providerVersion() {
        return this._providerVersion;
    };
    /**
     * Sets the providerVersion property value. Version of the provider or subprovider, if it exists, that generated the alert. Required
     * @param value Value to set for the providerVersion property.
     */
    public set providerVersion(value: string | undefined) {
        this._providerVersion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("provider", this.provider);
        writer.writeStringValue("providerVersion", this.providerVersion);
        writer.writeStringValue("subProvider", this.subProvider);
        writer.writeStringValue("vendor", this.vendor);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subProvider property value. Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen.
     * @returns a string
     */
    public get subProvider() {
        return this._subProvider;
    };
    /**
     * Sets the subProvider property value. Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen.
     * @param value Value to set for the subProvider property.
     */
    public set subProvider(value: string | undefined) {
        this._subProvider = value;
    };
    /**
     * Gets the vendor property value. Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required
     * @returns a string
     */
    public get vendor() {
        return this._vendor;
    };
    /**
     * Sets the vendor property value. Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required
     * @param value Value to set for the vendor property.
     */
    public set vendor(value: string | undefined) {
        this._vendor = value;
    };
}
