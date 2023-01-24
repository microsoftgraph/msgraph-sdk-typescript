import {VmCloudProvider} from './vmCloudProvider';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VmMetadata implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The cloudProvider property */
    private _cloudProvider?: VmCloudProvider | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Unique identifier of the Azure resource. */
    private _resourceId?: string | undefined;
    /** Unique identifier of the Azure subscription the customer tenant belongs to. */
    private _subscriptionId?: string | undefined;
    /** Unique identifier of the virtual machine instance. */
    private _vmId?: string | undefined;
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
     * Gets the cloudProvider property value. The cloudProvider property
     * @returns a vmCloudProvider
     */
    public get cloudProvider() {
        return this._cloudProvider;
    };
    /**
     * Sets the cloudProvider property value. The cloudProvider property
     * @param value Value to set for the cloudProvider property.
     */
    public set cloudProvider(value: VmCloudProvider | undefined) {
        this._cloudProvider = value;
    };
    /**
     * Instantiates a new vmMetadata and sets the default values.
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
            "cloudProvider": n => { this.cloudProvider = n.getEnumValue<VmCloudProvider>(VmCloudProvider); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "subscriptionId": n => { this.subscriptionId = n.getStringValue(); },
            "vmId": n => { this.vmId = n.getStringValue(); },
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
     * Gets the resourceId property value. Unique identifier of the Azure resource.
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. Unique identifier of the Azure resource.
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<VmCloudProvider>("cloudProvider", this.cloudProvider);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeStringValue("subscriptionId", this.subscriptionId);
        writer.writeStringValue("vmId", this.vmId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subscriptionId property value. Unique identifier of the Azure subscription the customer tenant belongs to.
     * @returns a string
     */
    public get subscriptionId() {
        return this._subscriptionId;
    };
    /**
     * Sets the subscriptionId property value. Unique identifier of the Azure subscription the customer tenant belongs to.
     * @param value Value to set for the subscriptionId property.
     */
    public set subscriptionId(value: string | undefined) {
        this._subscriptionId = value;
    };
    /**
     * Gets the vmId property value. Unique identifier of the virtual machine instance.
     * @returns a string
     */
    public get vmId() {
        return this._vmId;
    };
    /**
     * Sets the vmId property value. Unique identifier of the virtual machine instance.
     * @param value Value to set for the vmId property.
     */
    public set vmId(value: string | undefined) {
        this._vmId = value;
    };
}
