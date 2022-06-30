import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {AppScopeImpl, DirectoryObjectImpl, EntityImpl, UnifiedRoleDefinitionImpl} from './index';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleScheduleInstanceBase} from './unifiedRoleScheduleInstanceBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class UnifiedRoleScheduleInstanceBaseImpl extends EntityImpl implements UnifiedRoleScheduleInstanceBase {
    /** Read-only property with details of the app-specific scope when the assignment or role eligibility is scoped to an app. Nullable. */
    private _appScope?: AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment or role eligibility is scoped to an app. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. */
    private _appScopeId?: string | undefined;
    /** The directory object that is the scope of the assignment or role eligibility. Read-only. */
    private _directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment or role eligibility. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. */
    private _directoryScopeId?: string | undefined;
    /** The principal that's getting a role assignment or role eligibility through the request. */
    private _principal?: DirectoryObject | undefined;
    /** Identifier of the principal that has been granted the role assignment or that's eligible for a role. */
    private _principalId?: string | undefined;
    /** Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property. */
    private _roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that the principal is eligible for. */
    private _roleDefinitionId?: string | undefined;
    /**
     * Gets the appScope property value. Read-only property with details of the app-specific scope when the assignment or role eligibility is scoped to an app. Nullable.
     * @returns a AppScopeInterface
     */
    public get appScope() {
        return this._appScope;
    };
    /**
     * Sets the appScope property value. Read-only property with details of the app-specific scope when the assignment or role eligibility is scoped to an app. Nullable.
     * @param value Value to set for the appScope property.
     */
    public set appScope(value: AppScope | undefined) {
        if(value) {
            this._appScope = value instanceof AppScopeImpl? value : new AppScopeImpl(value);
        }
    };
    /**
     * Gets the appScopeId property value. Identifier of the app-specific scope when the assignment or role eligibility is scoped to an app. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units.
     * @returns a string
     */
    public get appScopeId() {
        return this._appScopeId;
    };
    /**
     * Sets the appScopeId property value. Identifier of the app-specific scope when the assignment or role eligibility is scoped to an app. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units.
     * @param value Value to set for the appScopeId property.
     */
    public set appScopeId(value: string | undefined) {
        if(value) {
            this._appScopeId = value;
        }
    };
    /**
     * Instantiates a new unifiedRoleScheduleInstanceBase and sets the default values.
     * @param unifiedRoleScheduleInstanceBaseParameterValue 
     */
    public constructor(unifiedRoleScheduleInstanceBaseParameterValue?: UnifiedRoleScheduleInstanceBase | undefined) {
        super(unifiedRoleScheduleInstanceBaseParameterValue);
        this._appScope = unifiedRoleScheduleInstanceBaseParameterValue?.appScope;
        this._appScopeId = unifiedRoleScheduleInstanceBaseParameterValue?.appScopeId;
        this._directoryScope = unifiedRoleScheduleInstanceBaseParameterValue?.directoryScope;
        this._directoryScopeId = unifiedRoleScheduleInstanceBaseParameterValue?.directoryScopeId;
        this._principal = unifiedRoleScheduleInstanceBaseParameterValue?.principal;
        this._principalId = unifiedRoleScheduleInstanceBaseParameterValue?.principalId;
        this._roleDefinition = unifiedRoleScheduleInstanceBaseParameterValue?.roleDefinition;
        this._roleDefinitionId = unifiedRoleScheduleInstanceBaseParameterValue?.roleDefinitionId;
    };
    /**
     * Gets the directoryScope property value. The directory object that is the scope of the assignment or role eligibility. Read-only.
     * @returns a DirectoryObjectInterface
     */
    public get directoryScope() {
        return this._directoryScope;
    };
    /**
     * Sets the directoryScope property value. The directory object that is the scope of the assignment or role eligibility. Read-only.
     * @param value Value to set for the directoryScope property.
     */
    public set directoryScope(value: DirectoryObject | undefined) {
        if(value) {
            this._directoryScope = value instanceof DirectoryObjectImpl? value : new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment or role eligibility. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only.
     * @returns a string
     */
    public get directoryScopeId() {
        return this._directoryScopeId;
    };
    /**
     * Sets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment or role eligibility. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only.
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
            "directoryScope": n => { this.directoryScope = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "directoryScopeId": n => { this.directoryScopeId = n.getStringValue(); },
            "principal": n => { this.principal = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
        };
    };
    /**
     * Gets the principal property value. The principal that's getting a role assignment or role eligibility through the request.
     * @returns a DirectoryObjectInterface
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Sets the principal property value. The principal that's getting a role assignment or role eligibility through the request.
     * @param value Value to set for the principal property.
     */
    public set principal(value: DirectoryObject | undefined) {
        if(value) {
            this._principal = value instanceof DirectoryObjectImpl? value : new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the principalId property value. Identifier of the principal that has been granted the role assignment or that's eligible for a role.
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. Identifier of the principal that has been granted the role assignment or that's eligible for a role.
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        if(value) {
            this._principalId = value;
        }
    };
    /**
     * Gets the roleDefinition property value. Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
     * @returns a UnifiedRoleDefinitionInterface
     */
    public get roleDefinition() {
        return this._roleDefinition;
    };
    /**
     * Sets the roleDefinition property value. Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
     * @param value Value to set for the roleDefinition property.
     */
    public set roleDefinition(value: UnifiedRoleDefinition | undefined) {
        if(value) {
            this._roleDefinition = value instanceof UnifiedRoleDefinitionImpl? value : new UnifiedRoleDefinitionImpl(value);
        }
    };
    /**
     * Gets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that the principal is eligible for.
     * @returns a string
     */
    public get roleDefinitionId() {
        return this._roleDefinitionId;
    };
    /**
     * Sets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that the principal is eligible for.
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
