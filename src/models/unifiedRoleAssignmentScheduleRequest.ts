import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {createTicketInfoFromDiscriminatorValue} from './createTicketInfoFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {AppScope, DirectoryObject, Request, RequestSchedule, TicketInfo, UnifiedRoleAssignmentSchedule, UnifiedRoleDefinition, UnifiedRoleEligibilitySchedule} from './index';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class UnifiedRoleAssignmentScheduleRequest extends Request implements Parsable {
    /** Represents the type of the operation on the role assignment request. The possible values are: adminAssign, adminUpdate, adminRemove, selfActivate, selfDeactivate, adminExtend, adminRenew, selfExtend, selfRenew, unknownFutureValue. adminAssign: For administrators to assign roles to principals.adminRemove: For administrators to remove principals from roles. adminUpdate: For administrators to change existing role assignments.adminExtend: For administrators to extend expiring assignments.adminRenew: For administrators to renew expired assignments.selfActivate: For principals to activate their assignments.selfDeactivate: For principals to deactivate their active assignments.selfExtend: For principals to request to extend their expiring assignments.selfRenew: For principals to request to renew their expired assignments. */
    private _action?: UnifiedRoleScheduleRequestActions | undefined;
    /** If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand. */
    private _activatedUsing?: UnifiedRoleEligibilitySchedule | undefined;
    /** Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand. */
    private _appScope?: AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment is scoped to an app. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, ne, and on null values). */
    private _appScopeId?: string | undefined;
    /** The directory object that is the scope of the assignment. Read-only. Supports $expand. */
    private _directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, ne, and on null values). */
    private _directoryScopeId?: string | undefined;
    /** Determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request. */
    private _isValidationOnly?: boolean | undefined;
    /** A message provided by users and administrators when create they create the unifiedRoleAssignmentScheduleRequest object. */
    private _justification?: string | undefined;
    /** The principal that's getting a role assignment through the request. Supports $expand. */
    private _principal?: DirectoryObject | undefined;
    /** Identifier of the principal that has been granted the assignment. Can be a user, role-assignable group, or a service principal. Supports $filter (eq, ne). */
    private _principalId?: string | undefined;
    /** Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand. */
    private _roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition object that is being assigned to the principal. Supports $filter (eq, ne). */
    private _roleDefinitionId?: string | undefined;
    /** The period of the role assignment. Recurring schedules are currently unsupported. */
    private _scheduleInfo?: RequestSchedule | undefined;
    /** The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand. */
    private _targetSchedule?: UnifiedRoleAssignmentSchedule | undefined;
    /** Identifier of the schedule object that's linked to the assignment request. Supports $filter (eq, ne). */
    private _targetScheduleId?: string | undefined;
    /** Ticket details linked to the role assignment request including details of the ticket number and ticket system. */
    private _ticketInfo?: TicketInfo | undefined;
    /**
     * Gets the action property value. Represents the type of the operation on the role assignment request. The possible values are: adminAssign, adminUpdate, adminRemove, selfActivate, selfDeactivate, adminExtend, adminRenew, selfExtend, selfRenew, unknownFutureValue. adminAssign: For administrators to assign roles to principals.adminRemove: For administrators to remove principals from roles. adminUpdate: For administrators to change existing role assignments.adminExtend: For administrators to extend expiring assignments.adminRenew: For administrators to renew expired assignments.selfActivate: For principals to activate their assignments.selfDeactivate: For principals to deactivate their active assignments.selfExtend: For principals to request to extend their expiring assignments.selfRenew: For principals to request to renew their expired assignments.
     * @returns a unifiedRoleScheduleRequestActions
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. Represents the type of the operation on the role assignment request. The possible values are: adminAssign, adminUpdate, adminRemove, selfActivate, selfDeactivate, adminExtend, adminRenew, selfExtend, selfRenew, unknownFutureValue. adminAssign: For administrators to assign roles to principals.adminRemove: For administrators to remove principals from roles. adminUpdate: For administrators to change existing role assignments.adminExtend: For administrators to extend expiring assignments.adminRenew: For administrators to renew expired assignments.selfActivate: For principals to activate their assignments.selfDeactivate: For principals to deactivate their active assignments.selfExtend: For principals to request to extend their expiring assignments.selfRenew: For principals to request to renew their expired assignments.
     * @param value Value to set for the action property.
     */
    public set action(value: UnifiedRoleScheduleRequestActions | undefined) {
        this._action = value;
    };
    /**
     * Gets the activatedUsing property value. If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand.
     * @returns a unifiedRoleEligibilitySchedule
     */
    public get activatedUsing() {
        return this._activatedUsing;
    };
    /**
     * Sets the activatedUsing property value. If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand.
     * @param value Value to set for the activatedUsing property.
     */
    public set activatedUsing(value: UnifiedRoleEligibilitySchedule | undefined) {
        this._activatedUsing = value;
    };
    /**
     * Gets the appScope property value. Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand.
     * @returns a appScope
     */
    public get appScope() {
        return this._appScope;
    };
    /**
     * Sets the appScope property value. Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand.
     * @param value Value to set for the appScope property.
     */
    public set appScope(value: AppScope | undefined) {
        this._appScope = value;
    };
    /**
     * Gets the appScopeId property value. Identifier of the app-specific scope when the assignment is scoped to an app. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, ne, and on null values).
     * @returns a string
     */
    public get appScopeId() {
        return this._appScopeId;
    };
    /**
     * Sets the appScopeId property value. Identifier of the app-specific scope when the assignment is scoped to an app. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, ne, and on null values).
     * @param value Value to set for the appScopeId property.
     */
    public set appScopeId(value: string | undefined) {
        this._appScopeId = value;
    };
    /**
     * Instantiates a new unifiedRoleAssignmentScheduleRequest and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.unifiedRoleAssignmentScheduleRequest";
    };
    /**
     * Gets the directoryScope property value. The directory object that is the scope of the assignment. Read-only. Supports $expand.
     * @returns a directoryObject
     */
    public get directoryScope() {
        return this._directoryScope;
    };
    /**
     * Sets the directoryScope property value. The directory object that is the scope of the assignment. Read-only. Supports $expand.
     * @param value Value to set for the directoryScope property.
     */
    public set directoryScope(value: DirectoryObject | undefined) {
        this._directoryScope = value;
    };
    /**
     * Gets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, ne, and on null values).
     * @returns a string
     */
    public get directoryScopeId() {
        return this._directoryScopeId;
    };
    /**
     * Sets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, ne, and on null values).
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
            "activatedUsing": n => { this.activatedUsing = n.getObjectValue<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
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
            "targetSchedule": n => { this.targetSchedule = n.getObjectValue<UnifiedRoleAssignmentSchedule>(createUnifiedRoleAssignmentScheduleFromDiscriminatorValue); },
            "targetScheduleId": n => { this.targetScheduleId = n.getStringValue(); },
            "ticketInfo": n => { this.ticketInfo = n.getObjectValue<TicketInfo>(createTicketInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isValidationOnly property value. Determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request.
     * @returns a boolean
     */
    public get isValidationOnly() {
        return this._isValidationOnly;
    };
    /**
     * Sets the isValidationOnly property value. Determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request.
     * @param value Value to set for the isValidationOnly property.
     */
    public set isValidationOnly(value: boolean | undefined) {
        this._isValidationOnly = value;
    };
    /**
     * Gets the justification property value. A message provided by users and administrators when create they create the unifiedRoleAssignmentScheduleRequest object.
     * @returns a string
     */
    public get justification() {
        return this._justification;
    };
    /**
     * Sets the justification property value. A message provided by users and administrators when create they create the unifiedRoleAssignmentScheduleRequest object.
     * @param value Value to set for the justification property.
     */
    public set justification(value: string | undefined) {
        this._justification = value;
    };
    /**
     * Gets the principal property value. The principal that's getting a role assignment through the request. Supports $expand.
     * @returns a directoryObject
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Sets the principal property value. The principal that's getting a role assignment through the request. Supports $expand.
     * @param value Value to set for the principal property.
     */
    public set principal(value: DirectoryObject | undefined) {
        this._principal = value;
    };
    /**
     * Gets the principalId property value. Identifier of the principal that has been granted the assignment. Can be a user, role-assignable group, or a service principal. Supports $filter (eq, ne).
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. Identifier of the principal that has been granted the assignment. Can be a user, role-assignable group, or a service principal. Supports $filter (eq, ne).
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        this._principalId = value;
    };
    /**
     * Gets the roleDefinition property value. Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.
     * @returns a unifiedRoleDefinition
     */
    public get roleDefinition() {
        return this._roleDefinition;
    };
    /**
     * Sets the roleDefinition property value. Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.
     * @param value Value to set for the roleDefinition property.
     */
    public set roleDefinition(value: UnifiedRoleDefinition | undefined) {
        this._roleDefinition = value;
    };
    /**
     * Gets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition object that is being assigned to the principal. Supports $filter (eq, ne).
     * @returns a string
     */
    public get roleDefinitionId() {
        return this._roleDefinitionId;
    };
    /**
     * Sets the roleDefinitionId property value. Identifier of the unifiedRoleDefinition object that is being assigned to the principal. Supports $filter (eq, ne).
     * @param value Value to set for the roleDefinitionId property.
     */
    public set roleDefinitionId(value: string | undefined) {
        this._roleDefinitionId = value;
    };
    /**
     * Gets the scheduleInfo property value. The period of the role assignment. Recurring schedules are currently unsupported.
     * @returns a requestSchedule
     */
    public get scheduleInfo() {
        return this._scheduleInfo;
    };
    /**
     * Sets the scheduleInfo property value. The period of the role assignment. Recurring schedules are currently unsupported.
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
        writer.writeObjectValue<UnifiedRoleEligibilitySchedule>("activatedUsing", this.activatedUsing);
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
        writer.writeObjectValue<UnifiedRoleAssignmentSchedule>("targetSchedule", this.targetSchedule);
        writer.writeStringValue("targetScheduleId", this.targetScheduleId);
        writer.writeObjectValue<TicketInfo>("ticketInfo", this.ticketInfo);
    };
    /**
     * Gets the targetSchedule property value. The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand.
     * @returns a unifiedRoleAssignmentSchedule
     */
    public get targetSchedule() {
        return this._targetSchedule;
    };
    /**
     * Sets the targetSchedule property value. The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand.
     * @param value Value to set for the targetSchedule property.
     */
    public set targetSchedule(value: UnifiedRoleAssignmentSchedule | undefined) {
        this._targetSchedule = value;
    };
    /**
     * Gets the targetScheduleId property value. Identifier of the schedule object that's linked to the assignment request. Supports $filter (eq, ne).
     * @returns a string
     */
    public get targetScheduleId() {
        return this._targetScheduleId;
    };
    /**
     * Sets the targetScheduleId property value. Identifier of the schedule object that's linked to the assignment request. Supports $filter (eq, ne).
     * @param value Value to set for the targetScheduleId property.
     */
    public set targetScheduleId(value: string | undefined) {
        this._targetScheduleId = value;
    };
    /**
     * Gets the ticketInfo property value. Ticket details linked to the role assignment request including details of the ticket number and ticket system.
     * @returns a ticketInfo
     */
    public get ticketInfo() {
        return this._ticketInfo;
    };
    /**
     * Sets the ticketInfo property value. Ticket details linked to the role assignment request including details of the ticket number and ticket system.
     * @param value Value to set for the ticketInfo property.
     */
    public set ticketInfo(value: TicketInfo | undefined) {
        this._ticketInfo = value;
    };
}
