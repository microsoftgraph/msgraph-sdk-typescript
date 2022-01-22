import {AppScope} from './appScope';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignment extends Entity implements Parsable {
    /** Details of the app specific scope when the assignment scope is app specific. Containment entity.  */
    private _appScope?: AppScope | undefined;
    /** Identifier of the app specific scope when the assignment scope is app specific. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. App scopes are scopes that are defined and understood by this application only.  For the entitlement management provider, use app scopes to specify a catalog, for example /AccessPackageCatalog/beedadfe-01d5-4025-910b-84abb9369997.  */
    private _appScopeId?: string | undefined;
    private _condition?: string | undefined;
    /** The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.  */
    private _directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. App scopes are scopes that are defined and understood by this application only.  */
    private _directoryScopeId?: string | undefined;
    /** The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.  */
    private _principal?: DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is granted. Supports $filter (eq operator only).  */
    private _principalId?: string | undefined;
    /** The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.  */
    private _roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition the assignment is for. Read-only. Supports $filter (eq operator only).  */
    private _roleDefinitionId?: string | undefined;
    /**
     * Instantiates a new unifiedRoleAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the appScope property value. Details of the app specific scope when the assignment scope is app specific. Containment entity.
     * @returns a appScope
     */
    public get appScope() {
        return this._appScope;
    };
    /**
     * Gets the appScopeId property value. Identifier of the app specific scope when the assignment scope is app specific. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. App scopes are scopes that are defined and understood by this application only.  For the entitlement management provider, use app scopes to specify a catalog, for example /AccessPackageCatalog/beedadfe-01d5-4025-910b-84abb9369997.
     * @returns a string
     */
    public get appScopeId() {
        return this._appScopeId;
    };
    /**
     * Gets the condition property value. 
     * @returns a string
     */
    public get condition() {
        return this._condition;
    };
    /**
     * Gets the directoryScope property value. The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
     * @returns a directoryObject
     */
    public get directoryScope() {
        return this._directoryScope;
    };
    /**
     * Gets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. App scopes are scopes that are defined and understood by this application only.
     * @returns a string
     */
    public get directoryScopeId() {
        return this._directoryScopeId;
    };
    /**
     * Gets the principal property value. The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
     * @returns a directoryObject
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Gets the principalId property value. Identifier of the principal to which the assignment is granted. Supports $filter (eq operator only).
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Gets the roleDefinition property value. The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.
     * @returns a unifiedRoleDefinition
     */
    public get roleDefinition() {
        return this._roleDefinition;
    };
    /**
     * Gets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition the assignment is for. Read-only. Supports $filter (eq operator only).
     * @returns a string
     */
    public get roleDefinitionId() {
        return this._roleDefinitionId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appScope", (o, n) => { (o as unknown as UnifiedRoleAssignment).appScope = n.getObjectValue<AppScope>(AppScope); }],
            ["appScopeId", (o, n) => { (o as unknown as UnifiedRoleAssignment).appScopeId = n.getStringValue(); }],
            ["condition", (o, n) => { (o as unknown as UnifiedRoleAssignment).condition = n.getStringValue(); }],
            ["directoryScope", (o, n) => { (o as unknown as UnifiedRoleAssignment).directoryScope = n.getObjectValue<DirectoryObject>(DirectoryObject); }],
            ["directoryScopeId", (o, n) => { (o as unknown as UnifiedRoleAssignment).directoryScopeId = n.getStringValue(); }],
            ["principal", (o, n) => { (o as unknown as UnifiedRoleAssignment).principal = n.getObjectValue<DirectoryObject>(DirectoryObject); }],
            ["principalId", (o, n) => { (o as unknown as UnifiedRoleAssignment).principalId = n.getStringValue(); }],
            ["roleDefinition", (o, n) => { (o as unknown as UnifiedRoleAssignment).roleDefinition = n.getObjectValue<UnifiedRoleDefinition>(UnifiedRoleDefinition); }],
            ["roleDefinitionId", (o, n) => { (o as unknown as UnifiedRoleAssignment).roleDefinitionId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AppScope>("appScope", this.appScope);
        writer.writeStringValue("appScopeId", this.appScopeId);
        writer.writeStringValue("condition", this.condition);
        writer.writeObjectValue<DirectoryObject>("directoryScope", this.directoryScope);
        writer.writeStringValue("directoryScopeId", this.directoryScopeId);
        writer.writeObjectValue<DirectoryObject>("principal", this.principal);
        writer.writeStringValue("principalId", this.principalId);
        writer.writeObjectValue<UnifiedRoleDefinition>("roleDefinition", this.roleDefinition);
        writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
    };
    /**
     * Sets the appScope property value. Details of the app specific scope when the assignment scope is app specific. Containment entity.
     * @param value Value to set for the appScope property.
     */
    public set appScope(value: AppScope | undefined) {
        this._appScope = value;
    };
    /**
     * Sets the appScopeId property value. Identifier of the app specific scope when the assignment scope is app specific. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. App scopes are scopes that are defined and understood by this application only.  For the entitlement management provider, use app scopes to specify a catalog, for example /AccessPackageCatalog/beedadfe-01d5-4025-910b-84abb9369997.
     * @param value Value to set for the appScopeId property.
     */
    public set appScopeId(value: string | undefined) {
        this._appScopeId = value;
    };
    /**
     * Sets the condition property value. 
     * @param value Value to set for the condition property.
     */
    public set condition(value: string | undefined) {
        this._condition = value;
    };
    /**
     * Sets the directoryScope property value. The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
     * @param value Value to set for the directoryScope property.
     */
    public set directoryScope(value: DirectoryObject | undefined) {
        this._directoryScope = value;
    };
    /**
     * Sets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. App scopes are scopes that are defined and understood by this application only.
     * @param value Value to set for the directoryScopeId property.
     */
    public set directoryScopeId(value: string | undefined) {
        this._directoryScopeId = value;
    };
    /**
     * Sets the principal property value. The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
     * @param value Value to set for the principal property.
     */
    public set principal(value: DirectoryObject | undefined) {
        this._principal = value;
    };
    /**
     * Sets the principalId property value. Identifier of the principal to which the assignment is granted. Supports $filter (eq operator only).
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        this._principalId = value;
    };
    /**
     * Sets the roleDefinition property value. The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.
     * @param value Value to set for the roleDefinition property.
     */
    public set roleDefinition(value: UnifiedRoleDefinition | undefined) {
        this._roleDefinition = value;
    };
    /**
     * Sets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition the assignment is for. Read-only. Supports $filter (eq operator only).
     * @param value Value to set for the roleDefinitionId property.
     */
    public set roleDefinitionId(value: string | undefined) {
        this._roleDefinitionId = value;
    };
}
