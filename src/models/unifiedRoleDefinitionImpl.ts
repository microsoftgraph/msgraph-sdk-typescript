import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRolePermissionFromDiscriminatorValue} from './createUnifiedRolePermissionFromDiscriminatorValue';
import {EntityImpl, UnifiedRolePermissionImpl} from './index';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRolePermission} from './unifiedRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class UnifiedRoleDefinitionImpl extends EntityImpl implements UnifiedRoleDefinition {
    /** The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true. */
    private _description?: string | undefined;
    /** The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required.  Supports $filter (eq and startsWith operators only). */
    private _displayName?: string | undefined;
    /** Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute. */
    private _inheritsPermissionsFrom?: UnifiedRoleDefinition[] | undefined;
    /** Flag indicating if the unifiedRoleDefinition is part of the default set included with the product or custom. Read-only.  Supports $filter (eq operator only). */
    private _isBuiltIn?: boolean | undefined;
    /** Flag indicating if the role is enabled for assignment. If false the role is not available for assignment. Read-only when isBuiltIn is true. */
    private _isEnabled?: boolean | undefined;
    /** List of scopes permissions granted by the role definition apply to. Currently only / is supported. Read-only when isBuiltIn is true. DO NOT USE. This will be deprecated soon. Attach scope to role assignment */
    private _resourceScopes?: string[] | undefined;
    /** List of permissions included in the role. Read-only when isBuiltIn is true. Required. */
    private _rolePermissions?: UnifiedRolePermission[] | undefined;
    /** Custom template identifier that can be set when isBuiltIn is false. This identifier is typically used if one needs an identifier to be the same across different directories. Read-only when isBuiltIn is true. */
    private _templateId?: string | undefined;
    /** Indicates version of the unifiedRoleDefinition. Read-only when isBuiltIn is true. */
    private _version?: string | undefined;
    /**
     * Instantiates a new unifiedRoleDefinition and sets the default values.
     * @param unifiedRoleDefinitionParameterValue 
     */
    public constructor(unifiedRoleDefinitionParameterValue?: UnifiedRoleDefinition | undefined) {
        super(unifiedRoleDefinitionParameterValue);
        this._description = unifiedRoleDefinitionParameterValue?.description;
        this._displayName = unifiedRoleDefinitionParameterValue?.displayName;
        this._inheritsPermissionsFrom = unifiedRoleDefinitionParameterValue?.inheritsPermissionsFrom;
        this._isBuiltIn = unifiedRoleDefinitionParameterValue?.isBuiltIn;
        this._isEnabled = unifiedRoleDefinitionParameterValue?.isEnabled;
        this._resourceScopes = unifiedRoleDefinitionParameterValue?.resourceScopes;
        this._rolePermissions = unifiedRoleDefinitionParameterValue?.rolePermissions;
        this._templateId = unifiedRoleDefinitionParameterValue?.templateId;
        this._version = unifiedRoleDefinitionParameterValue?.version;
    };
    /**
     * Gets the description property value. The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required.  Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required.  Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the inheritsPermissionsFrom property value. Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.
     * @returns a UnifiedRoleDefinitionInterface
     */
    public get inheritsPermissionsFrom() {
        return this._inheritsPermissionsFrom;
    };
    /**
     * Sets the inheritsPermissionsFrom property value. Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.
     * @param value Value to set for the inheritsPermissionsFrom property.
     */
    public set inheritsPermissionsFrom(value: UnifiedRoleDefinition[] | undefined) {
        if(value) {
            const inheritsPermissionsFromArrValue: UnifiedRoleDefinitionImpl[] = [];
            this.inheritsPermissionsFrom?.forEach(element => {
                inheritsPermissionsFromArrValue.push((element instanceof UnifiedRoleDefinitionImpl? element:new UnifiedRoleDefinitionImpl(element)));
            });
            this._inheritsPermissionsFrom = inheritsPermissionsFromArrValue;
        }
    };
    /**
     * Gets the isBuiltIn property value. Flag indicating if the unifiedRoleDefinition is part of the default set included with the product or custom. Read-only.  Supports $filter (eq operator only).
     * @returns a boolean
     */
    public get isBuiltIn() {
        return this._isBuiltIn;
    };
    /**
     * Sets the isBuiltIn property value. Flag indicating if the unifiedRoleDefinition is part of the default set included with the product or custom. Read-only.  Supports $filter (eq operator only).
     * @param value Value to set for the isBuiltIn property.
     */
    public set isBuiltIn(value: boolean | undefined) {
        if(value) {
            this._isBuiltIn = value;
        }
    };
    /**
     * Gets the isEnabled property value. Flag indicating if the role is enabled for assignment. If false the role is not available for assignment. Read-only when isBuiltIn is true.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Flag indicating if the role is enabled for assignment. If false the role is not available for assignment. Read-only when isBuiltIn is true.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        if(value) {
            this._isEnabled = value;
        }
    };
    /**
     * Gets the resourceScopes property value. List of scopes permissions granted by the role definition apply to. Currently only / is supported. Read-only when isBuiltIn is true. DO NOT USE. This will be deprecated soon. Attach scope to role assignment
     * @returns a string
     */
    public get resourceScopes() {
        return this._resourceScopes;
    };
    /**
     * Sets the resourceScopes property value. List of scopes permissions granted by the role definition apply to. Currently only / is supported. Read-only when isBuiltIn is true. DO NOT USE. This will be deprecated soon. Attach scope to role assignment
     * @param value Value to set for the resourceScopes property.
     */
    public set resourceScopes(value: string[] | undefined) {
        if(value) {
            this._resourceScopes = value;
        }
    };
    /**
     * Gets the rolePermissions property value. List of permissions included in the role. Read-only when isBuiltIn is true. Required.
     * @returns a UnifiedRolePermissionInterface
     */
    public get rolePermissions() {
        return this._rolePermissions;
    };
    /**
     * Sets the rolePermissions property value. List of permissions included in the role. Read-only when isBuiltIn is true. Required.
     * @param value Value to set for the rolePermissions property.
     */
    public set rolePermissions(value: UnifiedRolePermission[] | undefined) {
        if(value) {
            const rolePermissionsArrValue: UnifiedRolePermissionImpl[] = [];
            this.rolePermissions?.forEach(element => {
                rolePermissionsArrValue.push((element instanceof UnifiedRolePermissionImpl? element:new UnifiedRolePermissionImpl(element)));
            });
            this._rolePermissions = rolePermissionsArrValue;
        }
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
        if(this.inheritsPermissionsFrom && this.inheritsPermissionsFrom.length != 0){        const inheritsPermissionsFromArrValue: UnifiedRoleDefinitionImpl[] = [];
        this.inheritsPermissionsFrom?.forEach(element => {
            inheritsPermissionsFromArrValue.push((element instanceof UnifiedRoleDefinitionImpl? element:new UnifiedRoleDefinitionImpl(element)));
        });
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
        if(this.rolePermissions && this.rolePermissions.length != 0){        const rolePermissionsArrValue: UnifiedRolePermissionImpl[] = [];
        this.rolePermissions?.forEach(element => {
            rolePermissionsArrValue.push((element instanceof UnifiedRolePermissionImpl? element:new UnifiedRolePermissionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRolePermissionImpl>("rolePermissions", rolePermissionsArrValue);
        }
        if(this.templateId){
            writer.writeStringValue("templateId", this.templateId);
        }
        if(this.version){
            writer.writeStringValue("version", this.version);
        }
    };
    /**
     * Gets the templateId property value. Custom template identifier that can be set when isBuiltIn is false. This identifier is typically used if one needs an identifier to be the same across different directories. Read-only when isBuiltIn is true.
     * @returns a string
     */
    public get templateId() {
        return this._templateId;
    };
    /**
     * Sets the templateId property value. Custom template identifier that can be set when isBuiltIn is false. This identifier is typically used if one needs an identifier to be the same across different directories. Read-only when isBuiltIn is true.
     * @param value Value to set for the templateId property.
     */
    public set templateId(value: string | undefined) {
        if(value) {
            this._templateId = value;
        }
    };
    /**
     * Gets the version property value. Indicates version of the unifiedRoleDefinition. Read-only when isBuiltIn is true.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Indicates version of the unifiedRoleDefinition. Read-only when isBuiltIn is true.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
