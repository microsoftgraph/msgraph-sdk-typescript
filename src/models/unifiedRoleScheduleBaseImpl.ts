import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {AppScopeImpl, DirectoryObjectImpl, EntityImpl, UnifiedRoleDefinitionImpl} from './index';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class UnifiedRoleScheduleBaseImpl extends EntityImpl implements UnifiedRoleScheduleBase {
    /** Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable. */
    private _appScope?: AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment or eligibility is scoped to an app. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. */
    private _appScopeId?: string | undefined;
    /** When the schedule was created. */
    private _createdDateTime?: Date | undefined;
    /** Identifier of the object through which this schedule was created. */
    private _createdUsing?: string | undefined;
    /** The directory object that is the scope of the role eligibility or assignment. Read-only. */
    private _directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment or eligibility. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. */
    private _directoryScopeId?: string | undefined;
    /** When the schedule was last modified. */
    private _modifiedDateTime?: Date | undefined;
    /** The principal that's getting a role assignment or that's eligible for a role through the request. */
    private _principal?: DirectoryObject | undefined;
    /** Identifier of the principal that has been granted the role assignment or eligibility. */
    private _principalId?: string | undefined;
    /** Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property. */
    private _roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that a principal is eligible for. */
    private _roleDefinitionId?: string | undefined;
    /** The status of the role assignment or eligibility request. */
    private _status?: string | undefined;
    /**
     * Gets the appScope property value. Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
     * @returns a AppScopeInterface
     */
    public get appScope() {
        return this._appScope;
    };
    /**
     * Sets the appScope property value. Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
     * @param value Value to set for the appScope property.
     */
    public set appScope(value: AppScope | undefined) {
        if(value) {
            this._appScope = value instanceof AppScopeImpl? value as AppScopeImpl: new AppScopeImpl(value);
        }
    };
    /**
     * Gets the appScopeId property value. Identifier of the app-specific scope when the assignment or eligibility is scoped to an app. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units.
     * @returns a string
     */
    public get appScopeId() {
        return this._appScopeId;
    };
    /**
     * Sets the appScopeId property value. Identifier of the app-specific scope when the assignment or eligibility is scoped to an app. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units.
     * @param value Value to set for the appScopeId property.
     */
    public set appScopeId(value: string | undefined) {
        if(value) {
            this._appScopeId = value;
        }
    };
    /**
     * Instantiates a new unifiedRoleScheduleBase and sets the default values.
     * @param unifiedRoleScheduleBaseParameterValue 
     */
    public constructor(unifiedRoleScheduleBaseParameterValue?: UnifiedRoleScheduleBase | undefined) {
        super(unifiedRoleScheduleBaseParameterValue);
        this._appScope = unifiedRoleScheduleBaseParameterValue?.appScope;
        this._appScopeId = unifiedRoleScheduleBaseParameterValue?.appScopeId;
        this._createdDateTime = unifiedRoleScheduleBaseParameterValue?.createdDateTime;
        this._createdUsing = unifiedRoleScheduleBaseParameterValue?.createdUsing;
        this._directoryScope = unifiedRoleScheduleBaseParameterValue?.directoryScope;
        this._directoryScopeId = unifiedRoleScheduleBaseParameterValue?.directoryScopeId;
        this._modifiedDateTime = unifiedRoleScheduleBaseParameterValue?.modifiedDateTime;
        this._principal = unifiedRoleScheduleBaseParameterValue?.principal;
        this._principalId = unifiedRoleScheduleBaseParameterValue?.principalId;
        this._roleDefinition = unifiedRoleScheduleBaseParameterValue?.roleDefinition;
        this._roleDefinitionId = unifiedRoleScheduleBaseParameterValue?.roleDefinitionId;
        this._status = unifiedRoleScheduleBaseParameterValue?.status;
    };
    /**
     * Gets the createdDateTime property value. When the schedule was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. When the schedule was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the createdUsing property value. Identifier of the object through which this schedule was created.
     * @returns a string
     */
    public get createdUsing() {
        return this._createdUsing;
    };
    /**
     * Sets the createdUsing property value. Identifier of the object through which this schedule was created.
     * @param value Value to set for the createdUsing property.
     */
    public set createdUsing(value: string | undefined) {
        if(value) {
            this._createdUsing = value;
        }
    };
    /**
     * Gets the directoryScope property value. The directory object that is the scope of the role eligibility or assignment. Read-only.
     * @returns a DirectoryObjectInterface
     */
    public get directoryScope() {
        return this._directoryScope;
    };
    /**
     * Sets the directoryScope property value. The directory object that is the scope of the role eligibility or assignment. Read-only.
     * @param value Value to set for the directoryScope property.
     */
    public set directoryScope(value: DirectoryObject | undefined) {
        if(value) {
            this._directoryScope = value instanceof DirectoryObjectImpl? value as DirectoryObjectImpl: new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment or eligibility. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only.
     * @returns a string
     */
    public get directoryScopeId() {
        return this._directoryScopeId;
    };
    /**
     * Sets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment or eligibility. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only.
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
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "createdUsing": n => { this.createdUsing = n.getStringValue(); },
            "directoryScope": n => { this.directoryScope = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "directoryScopeId": n => { this.directoryScopeId = n.getStringValue(); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "principal": n => { this.principal = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the modifiedDateTime property value. When the schedule was last modified.
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. When the schedule was last modified.
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        if(value) {
            this._modifiedDateTime = value;
        }
    };
    /**
     * Gets the principal property value. The principal that's getting a role assignment or that's eligible for a role through the request.
     * @returns a DirectoryObjectInterface
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Sets the principal property value. The principal that's getting a role assignment or that's eligible for a role through the request.
     * @param value Value to set for the principal property.
     */
    public set principal(value: DirectoryObject | undefined) {
        if(value) {
            this._principal = value instanceof DirectoryObjectImpl? value as DirectoryObjectImpl: new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the principalId property value. Identifier of the principal that has been granted the role assignment or eligibility.
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. Identifier of the principal that has been granted the role assignment or eligibility.
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
            this._roleDefinition = value instanceof UnifiedRoleDefinitionImpl? value as UnifiedRoleDefinitionImpl: new UnifiedRoleDefinitionImpl(value);
        }
    };
    /**
     * Gets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that a principal is eligible for.
     * @returns a string
     */
    public get roleDefinitionId() {
        return this._roleDefinitionId;
    };
    /**
     * Sets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that a principal is eligible for.
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
            writer.writeObjectValue<AppScopeImpl>("appScope", (this.appScope instanceof AppScopeImpl? this.appScope as AppScopeImpl: new AppScopeImpl(this.appScope)));
        }
        if(this.appScopeId){
            writer.writeStringValue("appScopeId", this.appScopeId);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.createdUsing){
            writer.writeStringValue("createdUsing", this.createdUsing);
        }
        if(this.directoryScope){
            writer.writeObjectValue<DirectoryObjectImpl>("directoryScope", (this.directoryScope instanceof DirectoryObjectImpl? this.directoryScope as DirectoryObjectImpl: new DirectoryObjectImpl(this.directoryScope)));
        }
        if(this.directoryScopeId){
            writer.writeStringValue("directoryScopeId", this.directoryScopeId);
        }
        if(this.modifiedDateTime){
            writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.principal){
            writer.writeObjectValue<DirectoryObjectImpl>("principal", (this.principal instanceof DirectoryObjectImpl? this.principal as DirectoryObjectImpl: new DirectoryObjectImpl(this.principal)));
        }
        if(this.principalId){
            writer.writeStringValue("principalId", this.principalId);
        }
        if(this.roleDefinition){
            writer.writeObjectValue<UnifiedRoleDefinitionImpl>("roleDefinition", (this.roleDefinition instanceof UnifiedRoleDefinitionImpl? this.roleDefinition as UnifiedRoleDefinitionImpl: new UnifiedRoleDefinitionImpl(this.roleDefinition)));
        }
        if(this.roleDefinitionId){
            writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
        }
        if(this.status){
            writer.writeStringValue("status", this.status);
        }
    };
    /**
     * Gets the status property value. The status of the role assignment or eligibility request.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the role assignment or eligibility request.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
