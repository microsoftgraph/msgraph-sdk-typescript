import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {createTicketInfoFromDiscriminatorValue} from './createTicketInfoFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {AppScopeImpl, DirectoryObjectImpl, RequestImpl, RequestScheduleImpl, TicketInfoImpl, UnifiedRoleAssignmentScheduleImpl, UnifiedRoleDefinitionImpl, UnifiedRoleEligibilityScheduleImpl} from './index';
import {RequestSchedule} from './requestSchedule';
import {TicketInfo} from './ticketInfo';
import {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleScheduleRequestActions} from './unifiedRoleScheduleRequestActions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentScheduleRequestImpl extends RequestImpl implements UnifiedRoleAssignmentScheduleRequest {
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
    /** Identifier of the principal that has been granted the assignment. Supports $filter (eq, ne). */
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
        if(value) {
            this._action = value;
        }
    };
    /**
     * Gets the activatedUsing property value. If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand.
     * @returns a UnifiedRoleEligibilityScheduleInterface
     */
    public get activatedUsing() {
        return this._activatedUsing;
    };
    /**
     * Sets the activatedUsing property value. If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it's null. Supports $expand.
     * @param value Value to set for the activatedUsing property.
     */
    public set activatedUsing(value: UnifiedRoleEligibilitySchedule | undefined) {
        if(value) {
            this._activatedUsing = value instanceof UnifiedRoleEligibilityScheduleImpl? value as UnifiedRoleEligibilityScheduleImpl: new UnifiedRoleEligibilityScheduleImpl(value);
        }
    };
    /**
     * Gets the appScope property value. Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand.
     * @returns a AppScopeInterface
     */
    public get appScope() {
        return this._appScope;
    };
    /**
     * Sets the appScope property value. Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand.
     * @param value Value to set for the appScope property.
     */
    public set appScope(value: AppScope | undefined) {
        if(value) {
            this._appScope = value instanceof AppScopeImpl? value as AppScopeImpl: new AppScopeImpl(value);
        }
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
        if(value) {
            this._appScopeId = value;
        }
    };
    /**
     * Instantiates a new UnifiedRoleAssignmentScheduleRequest and sets the default values.
     * @param unifiedRoleAssignmentScheduleRequestParameterValue 
     */
    public constructor(unifiedRoleAssignmentScheduleRequestParameterValue?: UnifiedRoleAssignmentScheduleRequest | undefined) {
        super(unifiedRoleAssignmentScheduleRequestParameterValue);
        this._action = unifiedRoleAssignmentScheduleRequestParameterValue?.action;
        this._activatedUsing = unifiedRoleAssignmentScheduleRequestParameterValue?.activatedUsing;
        this._appScope = unifiedRoleAssignmentScheduleRequestParameterValue?.appScope;
        this._appScopeId = unifiedRoleAssignmentScheduleRequestParameterValue?.appScopeId;
        this._directoryScope = unifiedRoleAssignmentScheduleRequestParameterValue?.directoryScope;
        this._directoryScopeId = unifiedRoleAssignmentScheduleRequestParameterValue?.directoryScopeId;
        this._isValidationOnly = unifiedRoleAssignmentScheduleRequestParameterValue?.isValidationOnly;
        this._justification = unifiedRoleAssignmentScheduleRequestParameterValue?.justification;
        this._principal = unifiedRoleAssignmentScheduleRequestParameterValue?.principal;
        this._principalId = unifiedRoleAssignmentScheduleRequestParameterValue?.principalId;
        this._roleDefinition = unifiedRoleAssignmentScheduleRequestParameterValue?.roleDefinition;
        this._roleDefinitionId = unifiedRoleAssignmentScheduleRequestParameterValue?.roleDefinitionId;
        this._scheduleInfo = unifiedRoleAssignmentScheduleRequestParameterValue?.scheduleInfo;
        this._targetSchedule = unifiedRoleAssignmentScheduleRequestParameterValue?.targetSchedule;
        this._targetScheduleId = unifiedRoleAssignmentScheduleRequestParameterValue?.targetScheduleId;
        this._ticketInfo = unifiedRoleAssignmentScheduleRequestParameterValue?.ticketInfo;
    };
    /**
     * Gets the directoryScope property value. The directory object that is the scope of the assignment. Read-only. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get directoryScope() {
        return this._directoryScope;
    };
    /**
     * Sets the directoryScope property value. The directory object that is the scope of the assignment. Read-only. Supports $expand.
     * @param value Value to set for the directoryScope property.
     */
    public set directoryScope(value: DirectoryObject | undefined) {
        if(value) {
            this._directoryScope = value instanceof DirectoryObjectImpl? value as DirectoryObjectImpl: new DirectoryObjectImpl(value);
        }
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
            "action": n => { this.action = n.getEnumValue<UnifiedRoleScheduleRequestActions>(UnifiedRoleScheduleRequestActions); },
            "activatedUsing": n => { this.activatedUsing = n.getObjectValue<UnifiedRoleEligibilityScheduleImpl>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
            "appScope": n => { this.appScope = n.getObjectValue<AppScopeImpl>(createAppScopeFromDiscriminatorValue); },
            "appScopeId": n => { this.appScopeId = n.getStringValue(); },
            "directoryScope": n => { this.directoryScope = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "directoryScopeId": n => { this.directoryScopeId = n.getStringValue(); },
            "isValidationOnly": n => { this.isValidationOnly = n.getBooleanValue(); },
            "justification": n => { this.justification = n.getStringValue(); },
            "principal": n => { this.principal = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
            "scheduleInfo": n => { this.scheduleInfo = n.getObjectValue<RequestScheduleImpl>(createRequestScheduleFromDiscriminatorValue); },
            "targetSchedule": n => { this.targetSchedule = n.getObjectValue<UnifiedRoleAssignmentScheduleImpl>(createUnifiedRoleAssignmentScheduleFromDiscriminatorValue); },
            "targetScheduleId": n => { this.targetScheduleId = n.getStringValue(); },
            "ticketInfo": n => { this.ticketInfo = n.getObjectValue<TicketInfoImpl>(createTicketInfoFromDiscriminatorValue); },
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
        if(value) {
            this._isValidationOnly = value;
        }
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
        if(value) {
            this._justification = value;
        }
    };
    /**
     * Gets the principal property value. The principal that's getting a role assignment through the request. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Sets the principal property value. The principal that's getting a role assignment through the request. Supports $expand.
     * @param value Value to set for the principal property.
     */
    public set principal(value: DirectoryObject | undefined) {
        if(value) {
            this._principal = value instanceof DirectoryObjectImpl? value as DirectoryObjectImpl: new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the principalId property value. Identifier of the principal that has been granted the assignment. Supports $filter (eq, ne).
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. Identifier of the principal that has been granted the assignment. Supports $filter (eq, ne).
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        if(value) {
            this._principalId = value;
        }
    };
    /**
     * Gets the roleDefinition property value. Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.
     * @returns a UnifiedRoleDefinitionInterface
     */
    public get roleDefinition() {
        return this._roleDefinition;
    };
    /**
     * Sets the roleDefinition property value. Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.
     * @param value Value to set for the roleDefinition property.
     */
    public set roleDefinition(value: UnifiedRoleDefinition | undefined) {
        if(value) {
            this._roleDefinition = value instanceof UnifiedRoleDefinitionImpl? value as UnifiedRoleDefinitionImpl: new UnifiedRoleDefinitionImpl(value);
        }
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
        if(value) {
            this._roleDefinitionId = value;
        }
    };
    /**
     * Gets the scheduleInfo property value. The period of the role assignment. Recurring schedules are currently unsupported.
     * @returns a RequestScheduleInterface
     */
    public get scheduleInfo() {
        return this._scheduleInfo;
    };
    /**
     * Sets the scheduleInfo property value. The period of the role assignment. Recurring schedules are currently unsupported.
     * @param value Value to set for the scheduleInfo property.
     */
    public set scheduleInfo(value: RequestSchedule | undefined) {
        if(value) {
            this._scheduleInfo = value instanceof RequestScheduleImpl? value as RequestScheduleImpl: new RequestScheduleImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.action){
            writer.writeEnumValue<UnifiedRoleScheduleRequestActions>("action", this.action);
        }
        if(this.activatedUsing){
            writer.writeObjectValue<UnifiedRoleEligibilityScheduleImpl>("activatedUsing", (this.activatedUsing instanceof UnifiedRoleEligibilityScheduleImpl? this.activatedUsing as UnifiedRoleEligibilityScheduleImpl: new UnifiedRoleEligibilityScheduleImpl(this.activatedUsing)));
        }
        if(this.appScope){
            writer.writeObjectValue<AppScopeImpl>("appScope", (this.appScope instanceof AppScopeImpl? this.appScope as AppScopeImpl: new AppScopeImpl(this.appScope)));
        }
        if(this.appScopeId){
            writer.writeStringValue("appScopeId", this.appScopeId);
        }
        if(this.directoryScope){
            writer.writeObjectValue<DirectoryObjectImpl>("directoryScope", (this.directoryScope instanceof DirectoryObjectImpl? this.directoryScope as DirectoryObjectImpl: new DirectoryObjectImpl(this.directoryScope)));
        }
        if(this.directoryScopeId){
            writer.writeStringValue("directoryScopeId", this.directoryScopeId);
        }
        if(this.isValidationOnly){
            writer.writeBooleanValue("isValidationOnly", this.isValidationOnly);
        }
        if(this.justification){
            writer.writeStringValue("justification", this.justification);
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
        if(this.scheduleInfo){
            writer.writeObjectValue<RequestScheduleImpl>("scheduleInfo", (this.scheduleInfo instanceof RequestScheduleImpl? this.scheduleInfo as RequestScheduleImpl: new RequestScheduleImpl(this.scheduleInfo)));
        }
        if(this.targetSchedule){
            writer.writeObjectValue<UnifiedRoleAssignmentScheduleImpl>("targetSchedule", (this.targetSchedule instanceof UnifiedRoleAssignmentScheduleImpl? this.targetSchedule as UnifiedRoleAssignmentScheduleImpl: new UnifiedRoleAssignmentScheduleImpl(this.targetSchedule)));
        }
        if(this.targetScheduleId){
            writer.writeStringValue("targetScheduleId", this.targetScheduleId);
        }
        if(this.ticketInfo){
            writer.writeObjectValue<TicketInfoImpl>("ticketInfo", (this.ticketInfo instanceof TicketInfoImpl? this.ticketInfo as TicketInfoImpl: new TicketInfoImpl(this.ticketInfo)));
        }
    };
    /**
     * Gets the targetSchedule property value. The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand.
     * @returns a UnifiedRoleAssignmentScheduleInterface
     */
    public get targetSchedule() {
        return this._targetSchedule;
    };
    /**
     * Sets the targetSchedule property value. The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand.
     * @param value Value to set for the targetSchedule property.
     */
    public set targetSchedule(value: UnifiedRoleAssignmentSchedule | undefined) {
        if(value) {
            this._targetSchedule = value instanceof UnifiedRoleAssignmentScheduleImpl? value as UnifiedRoleAssignmentScheduleImpl: new UnifiedRoleAssignmentScheduleImpl(value);
        }
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
        if(value) {
            this._targetScheduleId = value;
        }
    };
    /**
     * Gets the ticketInfo property value. Ticket details linked to the role assignment request including details of the ticket number and ticket system.
     * @returns a TicketInfoInterface
     */
    public get ticketInfo() {
        return this._ticketInfo;
    };
    /**
     * Sets the ticketInfo property value. Ticket details linked to the role assignment request including details of the ticket number and ticket system.
     * @param value Value to set for the ticketInfo property.
     */
    public set ticketInfo(value: TicketInfo | undefined) {
        if(value) {
            this._ticketInfo = value instanceof TicketInfoImpl? value as TicketInfoImpl: new TicketInfoImpl(value);
        }
    };
}
