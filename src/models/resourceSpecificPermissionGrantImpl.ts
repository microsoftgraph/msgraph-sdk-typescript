import {DirectoryObjectImpl} from './index';
import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class ResourceSpecificPermissionGrantImpl extends DirectoryObjectImpl implements Parsable, ResourceSpecificPermissionGrant {
    /** ID of the service principal of the Azure AD app that has been granted access. Read-only. */
    public clientAppId?: string | undefined;
    /** ID of the Azure AD app that has been granted access. Read-only. */
    public clientId?: string | undefined;
    /** The name of the resource-specific permission. Read-only. */
    public permission?: string | undefined;
    /** The type of permission. Possible values are: Application, Delegated. Read-only. */
    public permissionType?: string | undefined;
    /** ID of the Azure AD app that is hosting the resource. Read-only. */
    public resourceAppId?: string | undefined;
    /**
     * Instantiates a new resourceSpecificPermissionGrant and sets the default values.
     * @param resourceSpecificPermissionGrantParameterValue 
     */
    public constructor(resourceSpecificPermissionGrantParameterValue?: ResourceSpecificPermissionGrant | undefined) {
        super();
        this.clientAppId = resourceSpecificPermissionGrantParameterValue?.clientAppId ;
        this.clientId = resourceSpecificPermissionGrantParameterValue?.clientId ;
        this.permission = resourceSpecificPermissionGrantParameterValue?.permission ;
        this.permissionType = resourceSpecificPermissionGrantParameterValue?.permissionType ;
        this.resourceAppId = resourceSpecificPermissionGrantParameterValue?.resourceAppId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "clientAppId": n => { this.clientAppId = n.getStringValue(); },
            "clientId": n => { this.clientId = n.getStringValue(); },
            "permission": n => { this.permission = n.getStringValue(); },
            "permissionType": n => { this.permissionType = n.getStringValue(); },
            "resourceAppId": n => { this.resourceAppId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.clientAppId){
        writer.writeStringValue("clientAppId", this.clientAppId);
        }
        if(this.clientId){
        writer.writeStringValue("clientId", this.clientId);
        }
        if(this.permission){
        writer.writeStringValue("permission", this.permission);
        }
        if(this.permissionType){
        writer.writeStringValue("permissionType", this.permissionType);
        }
        if(this.resourceAppId){
        writer.writeStringValue("resourceAppId", this.resourceAppId);
        }
    };
}
