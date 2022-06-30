import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {AppScopeImpl, DirectoryObjectImpl, EntityImpl, UnifiedRoleDefinitionImpl} from './index';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class UnifiedRoleAssignmentImpl extends EntityImpl implements UnifiedRoleAssignment {
    /** Details of the app specific scope when the assignment scope is app specific. Containment entity. */
    private _appScope?: AppScope | undefined;
    /** Identifier of the app specific scope when the assignment scope is app specific. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. App scopes are scopes that are defined and understood by this application only.  For the entitlement management provider, use app scopes to specify a catalog, for example /AccessPackageCatalog/beedadfe-01d5-4025-910b-84abb9369997. */
    private _appScopeId?: string | undefined;
    /** The condition property */
    private _condition?: string | undefined;
    /** The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand. */
    private _directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. App scopes are scopes that are defined and understood by this application only. */
    private _directoryScopeId?: string | undefined;
    /** The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand. */
    private _principal?: DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is granted. Supports $filter (eq operator only). */
    private _principalId?: string | undefined;
    /** The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand. */
    private _roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition the assignment is for. Read-only. Supports $filter (eq operator only). */
    private _roleDefinitionId?: string | undefined;
    /**
     * Gets the appScope property value. Details of the app specific scope when the assignment scope is app specific. Containment entity.
     * @returns a AppScopeInterface
     */
    public get appScope() {
        return this._appScope;
    };
    /**
     * Sets the appScope property value. Details of the app specific scope when the assignment scope is app specific. Containment entity.
     * @param value Value to set for the appScope property.
     */
    public set appScope(value: AppScope | undefined) {
        if(value) {
            this._appScope = value instanceof AppScopeImpl? value : new AppScopeImpl(value);
        }
    };
    /**
     * Gets the appScopeId property value. Identifier of the app specific scope when the assignment scope is app specific. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. App scopes are scopes that are defined and understood by this application only.  For the entitlement management provider, use app scopes to specify a catalog, for example /AccessPackageCatalog/beedadfe-01d5-4025-910b-84abb9369997.
     * @returns a string
     */
    public get appScopeId() {
        return this._appScopeId;
    };
    /**
     * Sets the appScopeId property value. Identifier of the app specific scope when the assignment scope is app specific. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. App scopes are scopes that are defined and understood by this application only.  For the entitlement management provider, use app scopes to specify a catalog, for example /AccessPackageCatalog/beedadfe-01d5-4025-910b-84abb9369997.
     * @param value Value to set for the appScopeId property.
     */
    public set appScopeId(value: string | undefined) {
        if(value) {
            this._appScopeId = value;
        }
    };
    /**
     * Gets the condition property value. The condition property
     * @returns a string
     */
    public get condition() {
        return this._condition;
    };
    /**
     * Sets the condition property value. The condition property
     * @param value Value to set for the condition property.
     */
    public set condition(value: string | undefined) {
        if(value) {
            this._condition = value;
        }
    };
    /**
     * Instantiates a new unifiedRoleAssignment and sets the default values.
     * @param unifiedRoleAssignmentParameterValue 
     */
    public constructor(unifiedRoleAssignmentParameterValue?: UnifiedRoleAssignment | undefined) {
        super(unifiedRoleAssignmentParameterValue);
        this._appScope = unifiedRoleAssignmentParameterValue?.appScope;
        this._appScopeId = unifiedRoleAssignmentParameterValue?.appScopeId;
        this._condition = unifiedRoleAssignmentParameterValue?.condition;
        this._directoryScope = unifiedRoleAssignmentParameterValue?.directoryScope;
        this._directoryScopeId = unifiedRoleAssignmentParameterValue?.directoryScopeId;
        this._principal = unifiedRoleAssignmentParameterValue?.principal;
        this._principalId = unifiedRoleAssignmentParameterValue?.principalId;
        this._roleDefinition = unifiedRoleAssignmentParameterValue?.roleDefinition;
        this._roleDefinitionId = unifiedRoleAssignmentParameterValue?.roleDefinitionId;
    };
    /**
     * Gets the directoryScope property value. The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get directoryScope() {
        return this._directoryScope;
    };
    /**
     * Sets the directoryScope property value. The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
     * @param value Value to set for the directoryScope property.
     */
    public set directoryScope(value: DirectoryObject | undefined) {
        if(value) {
            this._directoryScope = value instanceof DirectoryObjectImpl? value : new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. App scopes are scopes that are defined and understood by this application only.
     * @returns a string
     */
    public get directoryScopeId() {
        return this._directoryScopeId;
    };
    /**
     * Sets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. App scopes are scopes that are defined and understood by this application only.
     * @param value Value to set for the directoryScopeId property.
     */
    public set directoryScopeId(value: string | undefined) {
        if(value) {
            this._directoryScopeId = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appScope": n => { this.appScope = n.getObjectValue<AppScopeImpl>(createAppScopeFromDiscriminatorValue); },
            "appScopeId": n => { this.appScopeId = n.getStringValue(); },
            "condition": n => { this.condition = n.getStringValue(); },
            "directoryScope": n => { this.directoryScope = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "directoryScopeId": n => { this.directoryScopeId = n.getStringValue(); },
            "principal": n => { this.principal = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
        };
    };
    /**
     * Gets the principal property value. The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Sets the principal property value. The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
     * @param value Value to set for the principal property.
     */
    public set principal(value: DirectoryObject | undefined) {
        if(value) {
            this._principal = value instanceof DirectoryObjectImpl? value : new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the principalId property value. Identifier of the principal to which the assignment is granted. Supports $filter (eq operator only).
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. Identifier of the principal to which the assignment is granted. Supports $filter (eq operator only).
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        if(value) {
            this._principalId = value;
        }
    };
    /**
     * Gets the roleDefinition property value. The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.
     * @returns a UnifiedRoleDefinitionInterface
     */
    public get roleDefinition() {
        return this._roleDefinition;
    };
    /**
     * Sets the roleDefinition property value. The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.
     * @param value Value to set for the roleDefinition property.
     */
    public set roleDefinition(value: UnifiedRoleDefinition | undefined) {
        if(value) {
            this._roleDefinition = value instanceof UnifiedRoleDefinitionImpl? value : new UnifiedRoleDefinitionImpl(value);
        }
    };
    /**
     * Gets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition the assignment is for. Read-only. Supports $filter (eq operator only).
     * @returns a string
     */
    public get roleDefinitionId() {
        return this._roleDefinitionId;
    };
    /**
     * Sets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition the assignment is for. Read-only. Supports $filter (eq operator only).
     * @param value Value to set for the roleDefinitionId property.
     */
    public set roleDefinitionId(value: string | undefined) {
        if(value) {
            this._roleDefinitionId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appScope){
            writer.writeObjectValue<AppScopeImpl>("appScope", (!this.appScope || this.appScope instanceof AppScopeImpl? this.appScope : new AppScopeImpl(this.appScope)));
        }
        if(this.appScopeId){
            writer.writeStringValue("appScopeId", this.appScopeId);
        }
        if(this.condition){
            writer.writeStringValue("condition", this.condition);
        }
        if(this.directoryScope){
            writer.writeObjectValue<DirectoryObjectImpl>("directoryScope", (!this.directoryScope || this.directoryScope instanceof DirectoryObjectImpl? this.directoryScope : new DirectoryObjectImpl(this.directoryScope)));
        }
        if(this.directoryScopeId){
            writer.writeStringValue("directoryScopeId", this.directoryScopeId);
        }
        if(this.principal){
            writer.writeObjectValue<DirectoryObjectImpl>("principal", (!this.principal || this.principal instanceof DirectoryObjectImpl? this.principal : new DirectoryObjectImpl(this.principal)));
        }
        if(this.principalId){
            writer.writeStringValue("principalId", this.principalId);
        }
        if(this.roleDefinition){
            writer.writeObjectValue<UnifiedRoleDefinitionImpl>("roleDefinition", (!this.roleDefinition || this.roleDefinition instanceof UnifiedRoleDefinitionImpl? this.roleDefinition : new UnifiedRoleDefinitionImpl(this.roleDefinition)));
        }
        if(this.roleDefinitionId){
            writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
        }
    };
}
