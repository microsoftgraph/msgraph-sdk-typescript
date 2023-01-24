import {IdentitySource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossCloudAzureActiveDirectoryTenant extends IdentitySource implements Parsable {
    /** The ID of the cloud where the tenant is located, one of microsoftonline.com, microsoftonline.us or partner.microsoftonline.cn. Read only. */
    private _cloudInstance?: string | undefined;
    /** The name of the Azure Active Directory tenant. Read only. */
    private _displayName?: string | undefined;
    /** The ID of the Azure Active Directory tenant. Read only. */
    private _tenantId?: string | undefined;
    /**
     * Gets the cloudInstance property value. The ID of the cloud where the tenant is located, one of microsoftonline.com, microsoftonline.us or partner.microsoftonline.cn. Read only.
     * @returns a string
     */
    public get cloudInstance() {
        return this._cloudInstance;
    };
    /**
     * Sets the cloudInstance property value. The ID of the cloud where the tenant is located, one of microsoftonline.com, microsoftonline.us or partner.microsoftonline.cn. Read only.
     * @param value Value to set for the cloudInstance property.
     */
    public set cloudInstance(value: string | undefined) {
        this._cloudInstance = value;
    };
    /**
     * Instantiates a new CrossCloudAzureActiveDirectoryTenant and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.crossCloudAzureActiveDirectoryTenant";
    };
    /**
     * Gets the displayName property value. The name of the Azure Active Directory tenant. Read only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the Azure Active Directory tenant. Read only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "cloudInstance": n => { this.cloudInstance = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("cloudInstance", this.cloudInstance);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("tenantId", this.tenantId);
    };
    /**
     * Gets the tenantId property value. The ID of the Azure Active Directory tenant. Read only.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The ID of the Azure Active Directory tenant. Read only.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
}
