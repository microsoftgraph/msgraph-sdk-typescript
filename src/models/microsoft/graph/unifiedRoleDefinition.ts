import {Entity} from './entity';
import {UnifiedRolePermission} from './unifiedRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleDefinition extends Entity implements Parsable {
    /** The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true.  */
    private _description?: string | undefined;
    /** The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required.  Supports $filter (eq and startsWith operators only).  */
    private _displayName?: string | undefined;
    /** Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.  */
    private _inheritsPermissionsFrom?: UnifiedRoleDefinition[] | undefined;
    /** Flag indicating if the unifiedRoleDefinition is part of the default set included with the product or custom. Read-only.  Supports $filter (eq operator only).  */
    private _isBuiltIn?: boolean | undefined;
    /** Flag indicating if the role is enabled for assignment. If false the role is not available for assignment. Read-only when isBuiltIn is true.  */
    private _isEnabled?: boolean | undefined;
    /** List of scopes permissions granted by the role definition apply to. Currently only / is supported. Read-only when isBuiltIn is true. DO NOT USE. This will be deprecated soon. Attach scope to role assignment  */
    private _resourceScopes?: string[] | undefined;
    /** List of permissions included in the role. Read-only when isBuiltIn is true. Required.  */
    private _rolePermissions?: UnifiedRolePermission[] | undefined;
    /** Custom template identifier that can be set when isBuiltIn is false. This identifier is typically used if one needs an identifier to be the same across different directories. Read-only when isBuiltIn is true.  */
    private _templateId?: string | undefined;
    /** Indicates version of the unifiedRoleDefinition. Read-only when isBuiltIn is true.  */
    private _version?: string | undefined;
    /**
     * Instantiates a new unifiedRoleDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required.  Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the inheritsPermissionsFrom property value. Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.
     * @returns a unifiedRoleDefinition
     */
    public get inheritsPermissionsFrom() {
        return this._inheritsPermissionsFrom;
    };
    /**
     * Gets the isBuiltIn property value. Flag indicating if the unifiedRoleDefinition is part of the default set included with the product or custom. Read-only.  Supports $filter (eq operator only).
     * @returns a boolean
     */
    public get isBuiltIn() {
        return this._isBuiltIn;
    };
    /**
     * Gets the isEnabled property value. Flag indicating if the role is enabled for assignment. If false the role is not available for assignment. Read-only when isBuiltIn is true.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Gets the resourceScopes property value. List of scopes permissions granted by the role definition apply to. Currently only / is supported. Read-only when isBuiltIn is true. DO NOT USE. This will be deprecated soon. Attach scope to role assignment
     * @returns a string
     */
    public get resourceScopes() {
        return this._resourceScopes;
    };
    /**
     * Gets the rolePermissions property value. List of permissions included in the role. Read-only when isBuiltIn is true. Required.
     * @returns a unifiedRolePermission
     */
    public get rolePermissions() {
        return this._rolePermissions;
    };
    /**
     * Gets the templateId property value. Custom template identifier that can be set when isBuiltIn is false. This identifier is typically used if one needs an identifier to be the same across different directories. Read-only when isBuiltIn is true.
     * @returns a string
     */
    public get templateId() {
        return this._templateId;
    };
    /**
     * Gets the version property value. Indicates version of the unifiedRoleDefinition. Read-only when isBuiltIn is true.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["description", (o, n) => { (o as unknown as UnifiedRoleDefinition).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as UnifiedRoleDefinition).displayName = n.getStringValue(); }],
            ["inheritsPermissionsFrom", (o, n) => { (o as unknown as UnifiedRoleDefinition).inheritsPermissionsFrom = n.getCollectionOfObjectValues<UnifiedRoleDefinition>(UnifiedRoleDefinition); }],
            ["isBuiltIn", (o, n) => { (o as unknown as UnifiedRoleDefinition).isBuiltIn = n.getBooleanValue(); }],
            ["isEnabled", (o, n) => { (o as unknown as UnifiedRoleDefinition).isEnabled = n.getBooleanValue(); }],
            ["resourceScopes", (o, n) => { (o as unknown as UnifiedRoleDefinition).resourceScopes = n.getCollectionOfPrimitiveValues<string>(); }],
            ["rolePermissions", (o, n) => { (o as unknown as UnifiedRoleDefinition).rolePermissions = n.getCollectionOfObjectValues<UnifiedRolePermission>(UnifiedRolePermission); }],
            ["templateId", (o, n) => { (o as unknown as UnifiedRoleDefinition).templateId = n.getStringValue(); }],
            ["version", (o, n) => { (o as unknown as UnifiedRoleDefinition).version = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinition>("inheritsPermissionsFrom", this.inheritsPermissionsFrom);
        writer.writeBooleanValue("isBuiltIn", this.isBuiltIn);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeCollectionOfPrimitiveValues<string>("resourceScopes", this.resourceScopes);
        writer.writeCollectionOfObjectValues<UnifiedRolePermission>("rolePermissions", this.rolePermissions);
        writer.writeStringValue("templateId", this.templateId);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Sets the description property value. The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required.  Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the inheritsPermissionsFrom property value. Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.
     * @param value Value to set for the inheritsPermissionsFrom property.
     */
    public set inheritsPermissionsFrom(value: UnifiedRoleDefinition[] | undefined) {
        this._inheritsPermissionsFrom = value;
    };
    /**
     * Sets the isBuiltIn property value. Flag indicating if the unifiedRoleDefinition is part of the default set included with the product or custom. Read-only.  Supports $filter (eq operator only).
     * @param value Value to set for the isBuiltIn property.
     */
    public set isBuiltIn(value: boolean | undefined) {
        this._isBuiltIn = value;
    };
    /**
     * Sets the isEnabled property value. Flag indicating if the role is enabled for assignment. If false the role is not available for assignment. Read-only when isBuiltIn is true.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Sets the resourceScopes property value. List of scopes permissions granted by the role definition apply to. Currently only / is supported. Read-only when isBuiltIn is true. DO NOT USE. This will be deprecated soon. Attach scope to role assignment
     * @param value Value to set for the resourceScopes property.
     */
    public set resourceScopes(value: string[] | undefined) {
        this._resourceScopes = value;
    };
    /**
     * Sets the rolePermissions property value. List of permissions included in the role. Read-only when isBuiltIn is true. Required.
     * @param value Value to set for the rolePermissions property.
     */
    public set rolePermissions(value: UnifiedRolePermission[] | undefined) {
        this._rolePermissions = value;
    };
    /**
     * Sets the templateId property value. Custom template identifier that can be set when isBuiltIn is false. This identifier is typically used if one needs an identifier to be the same across different directories. Read-only when isBuiltIn is true.
     * @param value Value to set for the templateId property.
     */
    public set templateId(value: string | undefined) {
        this._templateId = value;
    };
    /**
     * Sets the version property value. Indicates version of the unifiedRoleDefinition. Read-only when isBuiltIn is true.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
