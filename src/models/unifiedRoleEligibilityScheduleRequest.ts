import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {createTicketInfoFromDiscriminatorValue} from './createTicketInfoFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {AppScope, DirectoryObject, Request, RequestSchedule, TicketInfo, UnifiedRoleDefinition, UnifiedRoleEligibilitySchedule} from './index';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleEligibilityScheduleRequest extends Request implements Parsable {
    /** Represents the type of the operation on the role eligibility assignment. The possible values are: AdminAssign: For administrators to assign role eligibility to users or groups to roles.AdminExtend: For administrators to extend expiring assignments.AdminUpdate: For administrators to change existing role assignments.AdminRenew: For administrators to renew expired assignments.AdminRemove: For administrators to remove users or groups from eligible roles.UserAdd: For users to activate their eligible assignments.UserExtend: For users to request to extend their expiring eligible assignments.UserRemove: For users to deactivate their active eligible assignments.UserRenew: For users to request to renew their expired eligible assignments.  */
    private _action?: UnifiedRoleScheduleRequestActions | undefined;
    /** Read-only property with details of the app-specific scope when the assignment scope is app-specific. Containment entity.  */
    private _appScope?: AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment scope is app-specific. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units.  */
    private _appScopeId?: string | undefined;
    /** Property referencing the directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only.  */
    private _directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only.  */
    private _directoryScopeId?: string | undefined;
    /** A boolean that determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request.  */
    private _isValidationOnly?: boolean | undefined;
    /** A message provided by users and administrators when create the request about why it is needed.  */
    private _justification?: string | undefined;
    /** Property referencing the principal that is getting a role assignment through the request. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only.  */
    private _principal?: DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is being granted to. For example, a user or a group. For groups, they must be assignable to roles, that is, the isAssignableToRole of the group property set to true.  */
    private _principalId?: string | undefined;
    /** Property indicating the roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.Id will be auto expanded.  */
    private _roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition the assignment is for. Read only.  */
    private _roleDefinitionId?: string | undefined;
    /** The schedule object of the role assignment request.  */
    private _scheduleInfo?: RequestSchedule | undefined;
    /** Property indicating the schedule for an eligible role assignment.  */
    private _targetSchedule?: UnifiedRoleEligibilitySchedule | undefined;
    /** The time period for which the eligibility assignment is valid.  */
    private _targetScheduleId?: string | undefined;
    /** The details of the ticket number and ticket system that is attached to the role assignment request.  */
    private _ticketInfo?: TicketInfo | undefined;
    /**
     * Gets the action property value. Represents the type of the operation on the role eligibility assignment. The possible values are: AdminAssign: For administrators to assign role eligibility to users or groups to roles.AdminExtend: For administrators to extend expiring assignments.AdminUpdate: For administrators to change existing role assignments.AdminRenew: For administrators to renew expired assignments.AdminRemove: For administrators to remove users or groups from eligible roles.UserAdd: For users to activate their eligible assignments.UserExtend: For users to request to extend their expiring eligible assignments.UserRemove: For users to deactivate their active eligible assignments.UserRenew: For users to request to renew their expired eligible assignments.
     * @returns a unifiedRoleScheduleRequestActions
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. Represents the type of the operation on the role eligibility assignment. The possible values are: AdminAssign: For administrators to assign role eligibility to users or groups to roles.AdminExtend: For administrators to extend expiring assignments.AdminUpdate: For administrators to change existing role assignments.AdminRenew: For administrators to renew expired assignments.AdminRemove: For administrators to remove users or groups from eligible roles.UserAdd: For users to activate their eligible assignments.UserExtend: For users to request to extend their expiring eligible assignments.UserRemove: For users to deactivate their active eligible assignments.UserRenew: For users to request to renew their expired eligible assignments.
     * @param value Value to set for the action property.
     */
    public set action(value: UnifiedRoleScheduleRequestActions | undefined) {
        this._action = value;
    };
    /**
     * Gets the appScope property value. Read-only property with details of the app-specific scope when the assignment scope is app-specific. Containment entity.
     * @returns a appScope
     */
    public get appScope() {
        return this._appScope;
    };
    /**
     * Sets the appScope property value. Read-only property with details of the app-specific scope when the assignment scope is app-specific. Containment entity.
     * @param value Value to set for the appScope property.
     */
    public set appScope(value: AppScope | undefined) {
        this._appScope = value;
    };
    /**
     * Gets the appScopeId property value. Identifier of the app-specific scope when the assignment scope is app-specific. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units.
     * @returns a string
     */
    public get appScopeId() {
        return this._appScopeId;
    };
    /**
     * Sets the appScopeId property value. Identifier of the app-specific scope when the assignment scope is app-specific. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units.
     * @param value Value to set for the appScopeId property.
     */
    public set appScopeId(value: string | undefined) {
        this._appScopeId = value;
    };
    /**
     * Instantiates a new unifiedRoleEligibilityScheduleRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the directoryScope property value. Property referencing the directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only.
     * @returns a directoryObject
     */
    public get directoryScope() {
        return this._directoryScope;
    };
    /**
     * Sets the directoryScope property value. Property referencing the directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only.
     * @param value Value to set for the directoryScope property.
     */
    public set directoryScope(value: DirectoryObject | undefined) {
        this._directoryScope = value;
    };
    /**
     * Gets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only.
     * @returns a string
     */
    public get directoryScopeId() {
        return this._directoryScopeId;
    };
    /**
     * Sets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only.
     * @param value Value to set for the directoryScopeId property.
     */
    public set directoryScopeId(value: string | undefined) {
        this._directoryScopeId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "action": n => { this.action = n.getEnumValue<UnifiedRoleScheduleRequestActions>(UnifiedRoleScheduleRequestActions); },
            "appScope": n => { this.appScope = n.getObjectValue<AppScope>(createAppScopeFromDiscriminatorValue); },
            "appScopeId": n => { this.appScopeId = n.getStringValue(); },
            "directoryScope": n => { this.directoryScope = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "directoryScopeId": n => { this.directoryScopeId = n.getStringValue(); },
            "isValidationOnly": n => { this.isValidationOnly = n.getBooleanValue(); },
            "justification": n => { this.justification = n.getStringValue(); },
            "principal": n => { this.principal = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
            "scheduleInfo": n => { this.scheduleInfo = n.getObjectValue<RequestSchedule>(createRequestScheduleFromDiscriminatorValue); },
            "targetSchedule": n => { this.targetSchedule = n.getObjectValue<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
            "targetScheduleId": n => { this.targetScheduleId = n.getStringValue(); },
            "ticketInfo": n => { this.ticketInfo = n.getObjectValue<TicketInfo>(createTicketInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isValidationOnly property value. A boolean that determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request.
     * @returns a boolean
     */
    public get isValidationOnly() {
        return this._isValidationOnly;
    };
    /**
     * Sets the isValidationOnly property value. A boolean that determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request.
     * @param value Value to set for the isValidationOnly property.
     */
    public set isValidationOnly(value: boolean | undefined) {
        this._isValidationOnly = value;
    };
    /**
     * Gets the justification property value. A message provided by users and administrators when create the request about why it is needed.
     * @returns a string
     */
    public get justification() {
        return this._justification;
    };
    /**
     * Sets the justification property value. A message provided by users and administrators when create the request about why it is needed.
     * @param value Value to set for the justification property.
     */
    public set justification(value: string | undefined) {
        this._justification = value;
    };
    /**
     * Gets the principal property value. Property referencing the principal that is getting a role assignment through the request. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only.
     * @returns a directoryObject
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Sets the principal property value. Property referencing the principal that is getting a role assignment through the request. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only.
     * @param value Value to set for the principal property.
     */
    public set principal(value: DirectoryObject | undefined) {
        this._principal = value;
    };
    /**
     * Gets the principalId property value. Identifier of the principal to which the assignment is being granted to. For example, a user or a group. For groups, they must be assignable to roles, that is, the isAssignableToRole of the group property set to true.
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. Identifier of the principal to which the assignment is being granted to. For example, a user or a group. For groups, they must be assignable to roles, that is, the isAssignableToRole of the group property set to true.
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        this._principalId = value;
    };
    /**
     * Gets the roleDefinition property value. Property indicating the roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.Id will be auto expanded.
     * @returns a unifiedRoleDefinition
     */
    public get roleDefinition() {
        return this._roleDefinition;
    };
    /**
     * Sets the roleDefinition property value. Property indicating the roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.Id will be auto expanded.
     * @param value Value to set for the roleDefinition property.
     */
    public set roleDefinition(value: UnifiedRoleDefinition | undefined) {
        this._roleDefinition = value;
    };
    /**
     * Gets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition the assignment is for. Read only.
     * @returns a string
     */
    public get roleDefinitionId() {
        return this._roleDefinitionId;
    };
    /**
     * Sets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition the assignment is for. Read only.
     * @param value Value to set for the roleDefinitionId property.
     */
    public set roleDefinitionId(value: string | undefined) {
        this._roleDefinitionId = value;
    };
    /**
     * Gets the scheduleInfo property value. The schedule object of the role assignment request.
     * @returns a requestSchedule
     */
    public get scheduleInfo() {
        return this._scheduleInfo;
    };
    /**
     * Sets the scheduleInfo property value. The schedule object of the role assignment request.
     * @param value Value to set for the scheduleInfo property.
     */
    public set scheduleInfo(value: RequestSchedule | undefined) {
        this._scheduleInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<UnifiedRoleScheduleRequestActions>("action", this.action);
        writer.writeObjectValue<AppScope>("appScope", this.appScope);
        writer.writeStringValue("appScopeId", this.appScopeId);
        writer.writeObjectValue<DirectoryObject>("directoryScope", this.directoryScope);
        writer.writeStringValue("directoryScopeId", this.directoryScopeId);
        writer.writeBooleanValue("isValidationOnly", this.isValidationOnly);
        writer.writeStringValue("justification", this.justification);
        writer.writeObjectValue<DirectoryObject>("principal", this.principal);
        writer.writeStringValue("principalId", this.principalId);
        writer.writeObjectValue<UnifiedRoleDefinition>("roleDefinition", this.roleDefinition);
        writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
        writer.writeObjectValue<RequestSchedule>("scheduleInfo", this.scheduleInfo);
        writer.writeObjectValue<UnifiedRoleEligibilitySchedule>("targetSchedule", this.targetSchedule);
        writer.writeStringValue("targetScheduleId", this.targetScheduleId);
        writer.writeObjectValue<TicketInfo>("ticketInfo", this.ticketInfo);
    };
    /**
     * Gets the targetSchedule property value. Property indicating the schedule for an eligible role assignment.
     * @returns a unifiedRoleEligibilitySchedule
     */
    public get targetSchedule() {
        return this._targetSchedule;
    };
    /**
     * Sets the targetSchedule property value. Property indicating the schedule for an eligible role assignment.
     * @param value Value to set for the targetSchedule property.
     */
    public set targetSchedule(value: UnifiedRoleEligibilitySchedule | undefined) {
        this._targetSchedule = value;
    };
    /**
     * Gets the targetScheduleId property value. The time period for which the eligibility assignment is valid.
     * @returns a string
     */
    public get targetScheduleId() {
        return this._targetScheduleId;
    };
    /**
     * Sets the targetScheduleId property value. The time period for which the eligibility assignment is valid.
     * @param value Value to set for the targetScheduleId property.
     */
    public set targetScheduleId(value: string | undefined) {
        this._targetScheduleId = value;
    };
    /**
     * Gets the ticketInfo property value. The details of the ticket number and ticket system that is attached to the role assignment request.
     * @returns a ticketInfo
     */
    public get ticketInfo() {
        return this._ticketInfo;
    };
    /**
     * Sets the ticketInfo property value. The details of the ticket number and ticket system that is attached to the role assignment request.
     * @param value Value to set for the ticketInfo property.
     */
    public set ticketInfo(value: TicketInfo | undefined) {
        this._ticketInfo = value;
    };
}
