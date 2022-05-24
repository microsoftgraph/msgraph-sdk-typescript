import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRolePermissionFromDiscriminatorValue} from './createUnifiedRolePermissionFromDiscriminatorValue';
import {EntityImpl, UnifiedRolePermissionImpl} from './index';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRolePermission} from './unifiedRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class UnifiedRoleDefinitionImpl extends EntityImpl implements Parsable, UnifiedRoleDefinition {
    /** The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true. */
    public description?: string | undefined;
    /** The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required.  Supports $filter (eq and startsWith operators only). */
    public displayName?: string | undefined;
    /** Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute. */
    public inheritsPermissionsFrom?: UnifiedRoleDefinition[] | undefined;
    /** Flag indicating if the unifiedRoleDefinition is part of the default set included with the product or custom. Read-only.  Supports $filter (eq operator only). */
    public isBuiltIn?: boolean | undefined;
    /** Flag indicating if the role is enabled for assignment. If false the role is not available for assignment. Read-only when isBuiltIn is true. */
    public isEnabled?: boolean | undefined;
    /** List of scopes permissions granted by the role definition apply to. Currently only / is supported. Read-only when isBuiltIn is true. DO NOT USE. This will be deprecated soon. Attach scope to role assignment */
    public resourceScopes?: string[] | undefined;
    /** List of permissions included in the role. Read-only when isBuiltIn is true. Required. */
    public rolePermissions?: UnifiedRolePermission[] | undefined;
    /** Custom template identifier that can be set when isBuiltIn is false. This identifier is typically used if one needs an identifier to be the same across different directories. Read-only when isBuiltIn is true. */
    public templateId?: string | undefined;
    /** Indicates version of the unifiedRoleDefinition. Read-only when isBuiltIn is true. */
    public version?: string | undefined;
    /**
     * Instantiates a new unifiedRoleDefinition and sets the default values.
     * @param unifiedRoleDefinitionParameterValue 
     */
    public constructor(unifiedRoleDefinitionParameterValue?: UnifiedRoleDefinition | undefined) {
        super();
        this.description = unifiedRoleDefinitionParameterValue?.description ;
        this.displayName = unifiedRoleDefinitionParameterValue?.displayName ;
        this.inheritsPermissionsFrom = unifiedRoleDefinitionParameterValue?.inheritsPermissionsFrom ;
        this.isBuiltIn = unifiedRoleDefinitionParameterValue?.isBuiltIn ;
        this.isEnabled = unifiedRoleDefinitionParameterValue?.isEnabled ;
        this.resourceScopes = unifiedRoleDefinitionParameterValue?.resourceScopes ;
        this.rolePermissions = unifiedRoleDefinitionParameterValue?.rolePermissions ;
        this.templateId = unifiedRoleDefinitionParameterValue?.templateId ;
        this.version = unifiedRoleDefinitionParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "inheritsPermissionsFrom": n => { this.inheritsPermissionsFrom = n.getCollectionOfObjectValues<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "isBuiltIn": n => { this.isBuiltIn = n.getBooleanValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "resourceScopes": n => { this.resourceScopes = n.getCollectionOfPrimitiveValues<string>(); },
            "rolePermissions": n => { this.rolePermissions = n.getCollectionOfObjectValues<UnifiedRolePermissionImpl>(createUnifiedRolePermissionFromDiscriminatorValue); },
            "templateId": n => { this.templateId = n.getStringValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.inheritsPermissionsFrom && this.inheritsPermissionsFrom.length != 0){        const inheritsPermissionsFromArrValue: UnifiedRoleDefinitionImpl[] = []; this.inheritsPermissionsFrom?.forEach(element => {inheritsPermissionsFromArrValue.push(new UnifiedRoleDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinitionImpl>("inheritsPermissionsFrom", inheritsPermissionsFromArrValue);
        }
        if(this.isBuiltIn){
        writer.writeBooleanValue("isBuiltIn", this.isBuiltIn);
        }
        if(this.isEnabled){
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        if(this.resourceScopes){
        writer.writeCollectionOfPrimitiveValues<string>("resourceScopes", this.resourceScopes);
        }
        if(this.rolePermissions && this.rolePermissions.length != 0){        const rolePermissionsArrValue: UnifiedRolePermissionImpl[] = []; this.rolePermissions?.forEach(element => {rolePermissionsArrValue.push(new UnifiedRolePermissionImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRolePermissionImpl>("rolePermissions", rolePermissionsArrValue);
        }
        if(this.templateId){
        writer.writeStringValue("templateId", this.templateId);
        }
        if(this.version){
        writer.writeStringValue("version", this.version);
        }
    };
}
