import {createUnifiedRoleAssignmentFromDiscriminatorValue} from './createUnifiedRoleAssignmentFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue';
import {EntityImpl, UnifiedRoleAssignmentImpl, UnifiedRoleAssignmentScheduleImpl, UnifiedRoleAssignmentScheduleInstanceImpl, UnifiedRoleAssignmentScheduleRequestImpl, UnifiedRoleDefinitionImpl, UnifiedRoleEligibilityScheduleImpl, UnifiedRoleEligibilityScheduleInstanceImpl, UnifiedRoleEligibilityScheduleRequestImpl} from './index';
import {RbacApplication} from './rbacApplication';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class RbacApplicationImpl extends EntityImpl implements Parsable, RbacApplication {
    /** Resource to grant access to users or groups. */
    public roleAssignments?: UnifiedRoleAssignment[] | undefined;
    /** Instances for active role assignments. */
    public roleAssignmentScheduleInstances?: UnifiedRoleAssignmentScheduleInstance[] | undefined;
    /** Requests for active role assignments to principals through PIM. */
    public roleAssignmentScheduleRequests?: UnifiedRoleAssignmentScheduleRequest[] | undefined;
    /** Schedules for active role assignment operations. */
    public roleAssignmentSchedules?: UnifiedRoleAssignmentSchedule[] | undefined;
    /** Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles. */
    public roleDefinitions?: UnifiedRoleDefinition[] | undefined;
    /** Instances for role eligibility requests. */
    public roleEligibilityScheduleInstances?: UnifiedRoleEligibilityScheduleInstance[] | undefined;
    /** Requests for role eligibilities for principals through PIM. */
    public roleEligibilityScheduleRequests?: UnifiedRoleEligibilityScheduleRequest[] | undefined;
    /** Schedules for role eligibility operations. */
    public roleEligibilitySchedules?: UnifiedRoleEligibilitySchedule[] | undefined;
    /**
     * Instantiates a new rbacApplication and sets the default values.
     * @param rbacApplicationParameterValue 
     */
    public constructor(rbacApplicationParameterValue?: RbacApplication | undefined) {
        super();
        this.roleAssignments = rbacApplicationParameterValue?.roleAssignments ;
        this.roleAssignmentScheduleInstances = rbacApplicationParameterValue?.roleAssignmentScheduleInstances ;
        this.roleAssignmentScheduleRequests = rbacApplicationParameterValue?.roleAssignmentScheduleRequests ;
        this.roleAssignmentSchedules = rbacApplicationParameterValue?.roleAssignmentSchedules ;
        this.roleDefinitions = rbacApplicationParameterValue?.roleDefinitions ;
        this.roleEligibilityScheduleInstances = rbacApplicationParameterValue?.roleEligibilityScheduleInstances ;
        this.roleEligibilityScheduleRequests = rbacApplicationParameterValue?.roleEligibilityScheduleRequests ;
        this.roleEligibilitySchedules = rbacApplicationParameterValue?.roleEligibilitySchedules ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "roleAssignments": n => { this.roleAssignments = n.getCollectionOfObjectValues<UnifiedRoleAssignmentImpl>(createUnifiedRoleAssignmentFromDiscriminatorValue); },
            "roleAssignmentScheduleInstances": n => { this.roleAssignmentScheduleInstances = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstanceImpl>(createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue); },
            "roleAssignmentScheduleRequests": n => { this.roleAssignmentScheduleRequests = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequestImpl>(createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue); },
            "roleAssignmentSchedules": n => { this.roleAssignmentSchedules = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleImpl>(createUnifiedRoleAssignmentScheduleFromDiscriminatorValue); },
            "roleDefinitions": n => { this.roleDefinitions = n.getCollectionOfObjectValues<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleEligibilityScheduleInstances": n => { this.roleEligibilityScheduleInstances = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstanceImpl>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
            "roleEligibilityScheduleRequests": n => { this.roleEligibilityScheduleRequests = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequestImpl>(createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue); },
            "roleEligibilitySchedules": n => { this.roleEligibilitySchedules = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleImpl>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.roleAssignments && this.roleAssignments.length != 0){        const roleAssignmentsArrValue: UnifiedRoleAssignmentImpl[] = []; this.roleAssignments?.forEach(element => {roleAssignmentsArrValue.push(new UnifiedRoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentImpl>("roleAssignments", roleAssignmentsArrValue);
        }
        if(this.roleAssignmentScheduleInstances && this.roleAssignmentScheduleInstances.length != 0){        const roleAssignmentScheduleInstancesArrValue: UnifiedRoleAssignmentScheduleInstanceImpl[] = []; this.roleAssignmentScheduleInstances?.forEach(element => {roleAssignmentScheduleInstancesArrValue.push(new UnifiedRoleAssignmentScheduleInstanceImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstanceImpl>("roleAssignmentScheduleInstances", roleAssignmentScheduleInstancesArrValue);
        }
        if(this.roleAssignmentScheduleRequests && this.roleAssignmentScheduleRequests.length != 0){        const roleAssignmentScheduleRequestsArrValue: UnifiedRoleAssignmentScheduleRequestImpl[] = []; this.roleAssignmentScheduleRequests?.forEach(element => {roleAssignmentScheduleRequestsArrValue.push(new UnifiedRoleAssignmentScheduleRequestImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequestImpl>("roleAssignmentScheduleRequests", roleAssignmentScheduleRequestsArrValue);
        }
        if(this.roleAssignmentSchedules && this.roleAssignmentSchedules.length != 0){        const roleAssignmentSchedulesArrValue: UnifiedRoleAssignmentScheduleImpl[] = []; this.roleAssignmentSchedules?.forEach(element => {roleAssignmentSchedulesArrValue.push(new UnifiedRoleAssignmentScheduleImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleImpl>("roleAssignmentSchedules", roleAssignmentSchedulesArrValue);
        }
        if(this.roleDefinitions && this.roleDefinitions.length != 0){        const roleDefinitionsArrValue: UnifiedRoleDefinitionImpl[] = []; this.roleDefinitions?.forEach(element => {roleDefinitionsArrValue.push(new UnifiedRoleDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinitionImpl>("roleDefinitions", roleDefinitionsArrValue);
        }
        if(this.roleEligibilityScheduleInstances && this.roleEligibilityScheduleInstances.length != 0){        const roleEligibilityScheduleInstancesArrValue: UnifiedRoleEligibilityScheduleInstanceImpl[] = []; this.roleEligibilityScheduleInstances?.forEach(element => {roleEligibilityScheduleInstancesArrValue.push(new UnifiedRoleEligibilityScheduleInstanceImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstanceImpl>("roleEligibilityScheduleInstances", roleEligibilityScheduleInstancesArrValue);
        }
        if(this.roleEligibilityScheduleRequests && this.roleEligibilityScheduleRequests.length != 0){        const roleEligibilityScheduleRequestsArrValue: UnifiedRoleEligibilityScheduleRequestImpl[] = []; this.roleEligibilityScheduleRequests?.forEach(element => {roleEligibilityScheduleRequestsArrValue.push(new UnifiedRoleEligibilityScheduleRequestImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequestImpl>("roleEligibilityScheduleRequests", roleEligibilityScheduleRequestsArrValue);
        }
        if(this.roleEligibilitySchedules && this.roleEligibilitySchedules.length != 0){        const roleEligibilitySchedulesArrValue: UnifiedRoleEligibilityScheduleImpl[] = []; this.roleEligibilitySchedules?.forEach(element => {roleEligibilitySchedulesArrValue.push(new UnifiedRoleEligibilityScheduleImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleImpl>("roleEligibilitySchedules", roleEligibilitySchedulesArrValue);
        }
    };
}
