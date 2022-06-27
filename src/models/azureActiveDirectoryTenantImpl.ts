import {AzureActiveDirectoryTenant} from './azureActiveDirectoryTenant';
import {IdentitySourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AzureActiveDirectoryTenantImpl extends IdentitySourceImpl implements AzureActiveDirectoryTenant {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the Azure Active Directory tenant. Read only. */
    public displayName?: string | undefined;
    /** The ID of the Azure Active Directory tenant. Read only. */
    public tenantId?: string | undefined;
    /**
     * Instantiates a new AzureActiveDirectoryTenant and sets the default values.
     * @param azureActiveDirectoryTenantParameterValue 
     */
    public constructor(azureActiveDirectoryTenantParameterValue?: AzureActiveDirectoryTenant | undefined) {
        super(azureActiveDirectoryTenantParameterValue);
        this.additionalData = azureActiveDirectoryTenantParameterValue?.additionalData ? azureActiveDirectoryTenantParameterValue?.additionalData! : {};
        this.displayName = azureActiveDirectoryTenantParameterValue?.displayName;
        this.tenantId = azureActiveDirectoryTenantParameterValue?.tenantId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.tenantId){
            writer.writeStringValue("tenantId", this.tenantId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
