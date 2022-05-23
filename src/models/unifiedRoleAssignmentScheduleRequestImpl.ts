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

/** Provides operations to manage the roleManagement singleton. */
export class UnifiedRoleAssignmentScheduleRequestImpl extends RequestImpl implements Parsable, UnifiedRoleAssignmentScheduleRequest {
    /** Represents the type of the operation on the role assignment. The possible values are: AdminAssign: For administrators to assign roles to users or groups.AdminRemove: For administrators to remove users or groups from roles. AdminUpdate: For administrators to change existing role assignments.AdminExtend: For administrators to extend expiring assignments.AdminRenew: For administrators to renew expired assignments.SelfActivate: For users to activate their assignments.SelfDeactivate: For users to deactivate their active assignments.SelfExtend: For users to request to extend their expiring assignments.SelfRenew: For users to request to renew their expired assignments. */
    public action?: UnifiedRoleScheduleRequestActions | undefined;
    /** If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. */
    public activatedUsing?: UnifiedRoleEligibilitySchedule | undefined;
    /** Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. */
    public appScope?: AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment scope is app-specific. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. */
    public appScopeId?: string | undefined;
    /** Property referencing the directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. */
    public directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. */
    public directoryScopeId?: string | undefined;
    /** A boolean that determines whether the call is a validation or an actual call. Only set this property if you want to check whether an activation is subject to additional rules like MFA before actually submitting the request. */
    public isValidationOnly?: boolean | undefined;
    /** A message provided by users and administrators when create the request about why it is needed. */
    public justification?: string | undefined;
    /** Property referencing the principal that is getting a role assignment through the request. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. */
    public principal?: DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is being granted to. */
    public principalId?: string | undefined;
    /** Property indicating the roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.Id will be auto expanded. */
    public roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition the assignment is for. Read only. */
    public roleDefinitionId?: string | undefined;
    /** The schedule object of the role assignment request. */
    public scheduleInfo?: RequestSchedule | undefined;
    /** Property indicating the schedule for an eligible role assignment. */
    public targetSchedule?: UnifiedRoleAssignmentSchedule | undefined;
    /** Identifier of the schedule object attached to the assignment. */
    public targetScheduleId?: string | undefined;
    /** The ticketInfo object attached to the role assignment request which includes details of the ticket number and ticket system. */
    public ticketInfo?: TicketInfo | undefined;
    /**
     * Instantiates a new unifiedRoleAssignmentScheduleRequest and sets the default values.
     * @param unifiedRoleAssignmentScheduleRequestParameterValue 
     */
    public constructor(unifiedRoleAssignmentScheduleRequestParameterValue?: UnifiedRoleAssignmentScheduleRequest | undefined) {
        super();
        this.action = unifiedRoleAssignmentScheduleRequestParameterValue?.action ;
        this.activatedUsing = unifiedRoleAssignmentScheduleRequestParameterValue?.activatedUsing ;
        this.appScope = unifiedRoleAssignmentScheduleRequestParameterValue?.appScope ;
        this.appScopeId = unifiedRoleAssignmentScheduleRequestParameterValue?.appScopeId ;
        this.directoryScope = unifiedRoleAssignmentScheduleRequestParameterValue?.directoryScope ;
        this.directoryScopeId = unifiedRoleAssignmentScheduleRequestParameterValue?.directoryScopeId ;
        this.isValidationOnly = unifiedRoleAssignmentScheduleRequestParameterValue?.isValidationOnly ;
        this.justification = unifiedRoleAssignmentScheduleRequestParameterValue?.justification ;
        this.principal = unifiedRoleAssignmentScheduleRequestParameterValue?.principal ;
        this.principalId = unifiedRoleAssignmentScheduleRequestParameterValue?.principalId ;
        this.roleDefinition = unifiedRoleAssignmentScheduleRequestParameterValue?.roleDefinition ;
        this.roleDefinitionId = unifiedRoleAssignmentScheduleRequestParameterValue?.roleDefinitionId ;
        this.scheduleInfo = unifiedRoleAssignmentScheduleRequestParameterValue?.scheduleInfo ;
        this.targetSchedule = unifiedRoleAssignmentScheduleRequestParameterValue?.targetSchedule ;
        this.targetScheduleId = unifiedRoleAssignmentScheduleRequestParameterValue?.targetScheduleId ;
        this.ticketInfo = unifiedRoleAssignmentScheduleRequestParameterValue?.ticketInfo ;
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
        writer.writeObjectValue<UnifiedRoleEligibilityScheduleImpl>("activatedUsing", new UnifiedRoleEligibilityScheduleImpl(this.activatedUsing));
        }
        if(this.appScope){
        writer.writeObjectValue<AppScopeImpl>("appScope", new AppScopeImpl(this.appScope));
        }
        if(this.appScopeId){
        writer.writeStringValue("appScopeId", this.appScopeId);
        }
        if(this.directoryScope){
        writer.writeObjectValue<DirectoryObjectImpl>("directoryScope", new DirectoryObjectImpl(this.directoryScope));
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
        writer.writeObjectValue<DirectoryObjectImpl>("principal", new DirectoryObjectImpl(this.principal));
        }
        if(this.principalId){
        writer.writeStringValue("principalId", this.principalId);
        }
        if(this.roleDefinition){
        writer.writeObjectValue<UnifiedRoleDefinitionImpl>("roleDefinition", new UnifiedRoleDefinitionImpl(this.roleDefinition));
        }
        if(this.roleDefinitionId){
        writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
        }
        if(this.scheduleInfo){
        writer.writeObjectValue<RequestScheduleImpl>("scheduleInfo", new RequestScheduleImpl(this.scheduleInfo));
        }
        if(this.targetSchedule){
        writer.writeObjectValue<UnifiedRoleAssignmentScheduleImpl>("targetSchedule", new UnifiedRoleAssignmentScheduleImpl(this.targetSchedule));
        }
        if(this.targetScheduleId){
        writer.writeStringValue("targetScheduleId", this.targetScheduleId);
        }
        if(this.ticketInfo){
        writer.writeObjectValue<TicketInfoImpl>("ticketInfo", new TicketInfoImpl(this.ticketInfo));
        }
    };
}
