import {DefaultUserRolePermissions} from './defaultUserRolePermissions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DefaultUserRolePermissionsImpl implements AdditionalDataHolder, DefaultUserRolePermissions, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether the default user role can create applications. */
    public allowedToCreateApps?: boolean | undefined;
    /** Indicates whether the default user role can create security groups. */
    public allowedToCreateSecurityGroups?: boolean | undefined;
    /** Indicates whether the default user role can read other users. */
    public allowedToReadOtherUsers?: boolean | undefined;
    /** Indicates if user consent to apps is allowed, and if it is, which permission to grant consent and which app consent policy (permissionGrantPolicy) govern the permission for users to grant consent. Value should be in the format managePermissionGrantsForSelf.{id}, where {id} is the id of a built-in or custom app consent policy. An empty list indicates user consent to apps is disabled. */
    public permissionGrantPoliciesAssigned?: string[] | undefined;
    /**
     * Instantiates a new defaultUserRolePermissions and sets the default values.
     * @param defaultUserRolePermissionsParameterValue 
     */
    public constructor(defaultUserRolePermissionsParameterValue?: DefaultUserRolePermissions | undefined) {
        this.additionalData = defaultUserRolePermissionsParameterValue?.additionalData ? defaultUserRolePermissionsParameterValue?.additionalData! : {}
        this.allowedToCreateApps = defaultUserRolePermissionsParameterValue?.allowedToCreateApps ;
        this.allowedToCreateSecurityGroups = defaultUserRolePermissionsParameterValue?.allowedToCreateSecurityGroups ;
        this.allowedToReadOtherUsers = defaultUserRolePermissionsParameterValue?.allowedToReadOtherUsers ;
        this.permissionGrantPoliciesAssigned = defaultUserRolePermissionsParameterValue?.permissionGrantPoliciesAssigned ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedToCreateApps": n => { this.allowedToCreateApps = n.getBooleanValue(); },
            "allowedToCreateSecurityGroups": n => { this.allowedToCreateSecurityGroups = n.getBooleanValue(); },
            "allowedToReadOtherUsers": n => { this.allowedToReadOtherUsers = n.getBooleanValue(); },
            "permissionGrantPoliciesAssigned": n => { this.permissionGrantPoliciesAssigned = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowedToCreateApps){
        writer.writeBooleanValue("allowedToCreateApps", this.allowedToCreateApps);
        }
        if(this.allowedToCreateSecurityGroups){
        writer.writeBooleanValue("allowedToCreateSecurityGroups", this.allowedToCreateSecurityGroups);
        }
        if(this.allowedToReadOtherUsers){
        writer.writeBooleanValue("allowedToReadOtherUsers", this.allowedToReadOtherUsers);
        }
        if(this.permissionGrantPoliciesAssigned){
        writer.writeCollectionOfPrimitiveValues<string>("permissionGrantPoliciesAssigned", this.permissionGrantPoliciesAssigned);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
