import {PermissionScope} from './permissionScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PermissionScopeImpl implements AdditionalDataHolder, Parsable, PermissionScope {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A description of the delegated permissions, intended to be read by an administrator granting the permission on behalf of all users. This text appears in tenant-wide admin consent experiences. */
    public adminConsentDescription?: string | undefined;
    /** The permission's title, intended to be read by an administrator granting the permission on behalf of all users. */
    public adminConsentDisplayName?: string | undefined;
    /** Unique delegated permission identifier inside the collection of delegated permissions defined for a resource application. */
    public id?: string | undefined;
    /** When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false.  At that point, in a subsequent call, the permission may be removed. */
    public isEnabled?: boolean | undefined;
    /** The origin property */
    public origin?: string | undefined;
    /** The possible values are: User and Admin. Specifies whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator consent should always be required. While Microsoft Graph defines the default consent requirement for each permission, the tenant administrator may override the behavior in their organization (by allowing, restricting, or limiting user consent to this delegated permission). For more information, see Configure how users consent to applications. */
    public type?: string | undefined;
    /** A description of the delegated permissions, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves. */
    public userConsentDescription?: string | undefined;
    /** A title for the permission, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves. */
    public userConsentDisplayName?: string | undefined;
    /** Specifies the value to include in the scp (scope) claim in access tokens. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with .. */
    public value?: string | undefined;
    /**
     * Instantiates a new permissionScope and sets the default values.
     * @param permissionScopeParameterValue 
     */
    public constructor(permissionScopeParameterValue?: PermissionScope | undefined) {
        this.additionalData = permissionScopeParameterValue?.additionalData ? permissionScopeParameterValue?.additionalData! : {}
        this.adminConsentDescription = permissionScopeParameterValue?.adminConsentDescription ;
        this.adminConsentDisplayName = permissionScopeParameterValue?.adminConsentDisplayName ;
        this.id = permissionScopeParameterValue?.id ;
        this.isEnabled = permissionScopeParameterValue?.isEnabled ;
        this.origin = permissionScopeParameterValue?.origin ;
        this.type = permissionScopeParameterValue?.type ;
        this.userConsentDescription = permissionScopeParameterValue?.userConsentDescription ;
        this.userConsentDisplayName = permissionScopeParameterValue?.userConsentDisplayName ;
        this.value = permissionScopeParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "adminConsentDescription": n => { this.adminConsentDescription = n.getStringValue(); },
            "adminConsentDisplayName": n => { this.adminConsentDisplayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "origin": n => { this.origin = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "userConsentDescription": n => { this.userConsentDescription = n.getStringValue(); },
            "userConsentDisplayName": n => { this.userConsentDisplayName = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.adminConsentDescription){
        writer.writeStringValue("adminConsentDescription", this.adminConsentDescription);
        }
        if(this.adminConsentDisplayName){
        writer.writeStringValue("adminConsentDisplayName", this.adminConsentDisplayName);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.isEnabled){
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        if(this.origin){
        writer.writeStringValue("origin", this.origin);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        if(this.userConsentDescription){
        writer.writeStringValue("userConsentDescription", this.userConsentDescription);
        }
        if(this.userConsentDisplayName){
        writer.writeStringValue("userConsentDisplayName", this.userConsentDisplayName);
        }
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
