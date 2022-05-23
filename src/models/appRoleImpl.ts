import {AppRole} from './appRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppRoleImpl implements AdditionalDataHolder, AppRole, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies whether this app role can be assigned to users and groups (by setting to ['User']), to other application's (by setting to ['Application'], or both (by setting to ['User', 'Application']). App roles supporting assignment to other applications' service principals are also known as application permissions. The 'Application' value is only supported for app roles defined on application entities. */
    public allowedMemberTypes?: string[] | undefined;
    /** The description for the app role. This is displayed when the app role is being assigned and, if the app role functions as an application permission, during  consent experiences. */
    public description?: string | undefined;
    /** Display name for the permission that appears in the app role assignment and consent experiences. */
    public displayName?: string | undefined;
    /** Unique role identifier inside the appRoles collection. When creating a new app role, a new GUID identifier must be provided. */
    public id?: string | undefined;
    /** When creating or updating an app role, this must be set to true (which is the default). To delete a role, this must first be set to false.  At that point, in a subsequent call, this role may be removed. */
    public isEnabled?: boolean | undefined;
    /** Specifies if the app role is defined on the application object or on the servicePrincipal entity. Must not be included in any POST or PATCH requests. Read-only. */
    public origin?: string | undefined;
    /** Specifies the value to include in the roles claim in ID tokens and access tokens authenticating an assigned user or service principal. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with .. */
    public value?: string | undefined;
    /**
     * Instantiates a new appRole and sets the default values.
     * @param appRoleParameterValue 
     */
    public constructor(appRoleParameterValue?: AppRole | undefined) {
        this.additionalData = appRoleParameterValue?.additionalData ? appRoleParameterValue?.additionalData! : {}
        this.allowedMemberTypes = appRoleParameterValue?.allowedMemberTypes ;
        this.description = appRoleParameterValue?.description ;
        this.displayName = appRoleParameterValue?.displayName ;
        this.id = appRoleParameterValue?.id ;
        this.isEnabled = appRoleParameterValue?.isEnabled ;
        this.origin = appRoleParameterValue?.origin ;
        this.value = appRoleParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedMemberTypes": n => { this.allowedMemberTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "origin": n => { this.origin = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowedMemberTypes){
        writer.writeCollectionOfPrimitiveValues<string>("allowedMemberTypes", this.allowedMemberTypes);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
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
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
