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
export class RbacApplicationImpl extends EntityImpl implements RbacApplication {
    /** Resource to grant access to users or groups. */
    private _roleAssignments?: UnifiedRoleAssignment[] | undefined;
    /** Instances for active role assignments. */
    private _roleAssignmentScheduleInstances?: UnifiedRoleAssignmentScheduleInstance[] | undefined;
    /** Requests for active role assignments to principals through PIM. */
    private _roleAssignmentScheduleRequests?: UnifiedRoleAssignmentScheduleRequest[] | undefined;
    /** Schedules for active role assignment operations. */
    private _roleAssignmentSchedules?: UnifiedRoleAssignmentSchedule[] | undefined;
    /** Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles. */
    private _roleDefinitions?: UnifiedRoleDefinition[] | undefined;
    /** Instances for role eligibility requests. */
    private _roleEligibilityScheduleInstances?: UnifiedRoleEligibilityScheduleInstance[] | undefined;
    /** Requests for role eligibilities for principals through PIM. */
    private _roleEligibilityScheduleRequests?: UnifiedRoleEligibilityScheduleRequest[] | undefined;
    /** Schedules for role eligibility operations. */
    private _roleEligibilitySchedules?: UnifiedRoleEligibilitySchedule[] | undefined;
    /**
     * Instantiates a new rbacApplication and sets the default values.
     * @param rbacApplicationParameterValue 
     */
    public constructor(rbacApplicationParameterValue?: RbacApplication | undefined) {
        super(rbacApplicationParameterValue);
        this._roleAssignments = rbacApplicationParameterValue?.roleAssignments;
        this._roleAssignmentScheduleInstances = rbacApplicationParameterValue?.roleAssignmentScheduleInstances;
        this._roleAssignmentScheduleRequests = rbacApplicationParameterValue?.roleAssignmentScheduleRequests;
        this._roleAssignmentSchedules = rbacApplicationParameterValue?.roleAssignmentSchedules;
        this._roleDefinitions = rbacApplicationParameterValue?.roleDefinitions;
        this._roleEligibilityScheduleInstances = rbacApplicationParameterValue?.roleEligibilityScheduleInstances;
        this._roleEligibilityScheduleRequests = rbacApplicationParameterValue?.roleEligibilityScheduleRequests;
        this._roleEligibilitySchedules = rbacApplicationParameterValue?.roleEligibilitySchedules;
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
     * Gets the roleAssignments property value. Resource to grant access to users or groups.
     * @returns a UnifiedRoleAssignmentInterface
     */
    public get roleAssignments() {
        return this._roleAssignments;
    };
    /**
     * Sets the roleAssignments property value. Resource to grant access to users or groups.
     * @param value Value to set for the roleAssignments property.
     */
    public set roleAssignments(value: UnifiedRoleAssignment[] | undefined) {
        if(value) {
            const roleAssignmentsArrValue: UnifiedRoleAssignmentImpl[] = [];
            this.roleAssignments?.forEach(element => {
                roleAssignmentsArrValue.push((element instanceof UnifiedRoleAssignmentImpl? element:new UnifiedRoleAssignmentImpl(element)));
            });
            this._roleAssignments = roleAssignmentsArrValue;
        }
    };
    /**
     * Gets the roleAssignmentScheduleInstances property value. Instances for active role assignments.
     * @returns a UnifiedRoleAssignmentScheduleInstanceInterface
     */
    public get roleAssignmentScheduleInstances() {
        return this._roleAssignmentScheduleInstances;
    };
    /**
     * Sets the roleAssignmentScheduleInstances property value. Instances for active role assignments.
     * @param value Value to set for the roleAssignmentScheduleInstances property.
     */
    public set roleAssignmentScheduleInstances(value: UnifiedRoleAssignmentScheduleInstance[] | undefined) {
        if(value) {
            const roleAssignmentScheduleInstancesArrValue: UnifiedRoleAssignmentScheduleInstanceImpl[] = [];
            this.roleAssignmentScheduleInstances?.forEach(element => {
                roleAssignmentScheduleInstancesArrValue.push((element instanceof UnifiedRoleAssignmentScheduleInstanceImpl? element:new UnifiedRoleAssignmentScheduleInstanceImpl(element)));
            });
            this._roleAssignmentScheduleInstances = roleAssignmentScheduleInstancesArrValue;
        }
    };
    /**
     * Gets the roleAssignmentScheduleRequests property value. Requests for active role assignments to principals through PIM.
     * @returns a UnifiedRoleAssignmentScheduleRequestInterface
     */
    public get roleAssignmentScheduleRequests() {
        return this._roleAssignmentScheduleRequests;
    };
    /**
     * Sets the roleAssignmentScheduleRequests property value. Requests for active role assignments to principals through PIM.
     * @param value Value to set for the roleAssignmentScheduleRequests property.
     */
    public set roleAssignmentScheduleRequests(value: UnifiedRoleAssignmentScheduleRequest[] | undefined) {
        if(value) {
            const roleAssignmentScheduleRequestsArrValue: UnifiedRoleAssignmentScheduleRequestImpl[] = [];
            this.roleAssignmentScheduleRequests?.forEach(element => {
                roleAssignmentScheduleRequestsArrValue.push((element instanceof UnifiedRoleAssignmentScheduleRequestImpl? element:new UnifiedRoleAssignmentScheduleRequestImpl(element)));
            });
            this._roleAssignmentScheduleRequests = roleAssignmentScheduleRequestsArrValue;
        }
    };
    /**
     * Gets the roleAssignmentSchedules property value. Schedules for active role assignment operations.
     * @returns a UnifiedRoleAssignmentScheduleInterface
     */
    public get roleAssignmentSchedules() {
        return this._roleAssignmentSchedules;
    };
    /**
     * Sets the roleAssignmentSchedules property value. Schedules for active role assignment operations.
     * @param value Value to set for the roleAssignmentSchedules property.
     */
    public set roleAssignmentSchedules(value: UnifiedRoleAssignmentSchedule[] | undefined) {
        if(value) {
            const roleAssignmentSchedulesArrValue: UnifiedRoleAssignmentScheduleImpl[] = [];
            this.roleAssignmentSchedules?.forEach(element => {
                roleAssignmentSchedulesArrValue.push((element instanceof UnifiedRoleAssignmentScheduleImpl? element:new UnifiedRoleAssignmentScheduleImpl(element)));
            });
            this._roleAssignmentSchedules = roleAssignmentSchedulesArrValue;
        }
    };
    /**
     * Gets the roleDefinitions property value. Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     * @returns a UnifiedRoleDefinitionInterface
     */
    public get roleDefinitions() {
        return this._roleDefinitions;
    };
    /**
     * Sets the roleDefinitions property value. Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     * @param value Value to set for the roleDefinitions property.
     */
    public set roleDefinitions(value: UnifiedRoleDefinition[] | undefined) {
        if(value) {
            const roleDefinitionsArrValue: UnifiedRoleDefinitionImpl[] = [];
            this.roleDefinitions?.forEach(element => {
                roleDefinitionsArrValue.push((element instanceof UnifiedRoleDefinitionImpl? element:new UnifiedRoleDefinitionImpl(element)));
            });
            this._roleDefinitions = roleDefinitionsArrValue;
        }
    };
    /**
     * Gets the roleEligibilityScheduleInstances property value. Instances for role eligibility requests.
     * @returns a UnifiedRoleEligibilityScheduleInstanceInterface
     */
    public get roleEligibilityScheduleInstances() {
        return this._roleEligibilityScheduleInstances;
    };
    /**
     * Sets the roleEligibilityScheduleInstances property value. Instances for role eligibility requests.
     * @param value Value to set for the roleEligibilityScheduleInstances property.
     */
    public set roleEligibilityScheduleInstances(value: UnifiedRoleEligibilityScheduleInstance[] | undefined) {
        if(value) {
            const roleEligibilityScheduleInstancesArrValue: UnifiedRoleEligibilityScheduleInstanceImpl[] = [];
            this.roleEligibilityScheduleInstances?.forEach(element => {
                roleEligibilityScheduleInstancesArrValue.push((element instanceof UnifiedRoleEligibilityScheduleInstanceImpl? element:new UnifiedRoleEligibilityScheduleInstanceImpl(element)));
            });
            this._roleEligibilityScheduleInstances = roleEligibilityScheduleInstancesArrValue;
        }
    };
    /**
     * Gets the roleEligibilityScheduleRequests property value. Requests for role eligibilities for principals through PIM.
     * @returns a UnifiedRoleEligibilityScheduleRequestInterface
     */
    public get roleEligibilityScheduleRequests() {
        return this._roleEligibilityScheduleRequests;
    };
    /**
     * Sets the roleEligibilityScheduleRequests property value. Requests for role eligibilities for principals through PIM.
     * @param value Value to set for the roleEligibilityScheduleRequests property.
     */
    public set roleEligibilityScheduleRequests(value: UnifiedRoleEligibilityScheduleRequest[] | undefined) {
        if(value) {
            const roleEligibilityScheduleRequestsArrValue: UnifiedRoleEligibilityScheduleRequestImpl[] = [];
            this.roleEligibilityScheduleRequests?.forEach(element => {
                roleEligibilityScheduleRequestsArrValue.push((element instanceof UnifiedRoleEligibilityScheduleRequestImpl? element:new UnifiedRoleEligibilityScheduleRequestImpl(element)));
            });
            this._roleEligibilityScheduleRequests = roleEligibilityScheduleRequestsArrValue;
        }
    };
    /**
     * Gets the roleEligibilitySchedules property value. Schedules for role eligibility operations.
     * @returns a UnifiedRoleEligibilityScheduleInterface
     */
    public get roleEligibilitySchedules() {
        return this._roleEligibilitySchedules;
    };
    /**
     * Sets the roleEligibilitySchedules property value. Schedules for role eligibility operations.
     * @param value Value to set for the roleEligibilitySchedules property.
     */
    public set roleEligibilitySchedules(value: UnifiedRoleEligibilitySchedule[] | undefined) {
        if(value) {
            const roleEligibilitySchedulesArrValue: UnifiedRoleEligibilityScheduleImpl[] = [];
            this.roleEligibilitySchedules?.forEach(element => {
                roleEligibilitySchedulesArrValue.push((element instanceof UnifiedRoleEligibilityScheduleImpl? element:new UnifiedRoleEligibilityScheduleImpl(element)));
            });
            this._roleEligibilitySchedules = roleEligibilitySchedulesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.roleAssignments && this.roleAssignments.length != 0){        const roleAssignmentsArrValue: UnifiedRoleAssignmentImpl[] = [];
        this.roleAssignments?.forEach(element => {
            roleAssignmentsArrValue.push((element instanceof UnifiedRoleAssignmentImpl? element:new UnifiedRoleAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentImpl>("roleAssignments", roleAssignmentsArrValue);
        }
        if(this.roleAssignmentScheduleInstances && this.roleAssignmentScheduleInstances.length != 0){        const roleAssignmentScheduleInstancesArrValue: UnifiedRoleAssignmentScheduleInstanceImpl[] = [];
        this.roleAssignmentScheduleInstances?.forEach(element => {
            roleAssignmentScheduleInstancesArrValue.push((element instanceof UnifiedRoleAssignmentScheduleInstanceImpl? element:new UnifiedRoleAssignmentScheduleInstanceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstanceImpl>("roleAssignmentScheduleInstances", roleAssignmentScheduleInstancesArrValue);
        }
        if(this.roleAssignmentScheduleRequests && this.roleAssignmentScheduleRequests.length != 0){        const roleAssignmentScheduleRequestsArrValue: UnifiedRoleAssignmentScheduleRequestImpl[] = [];
        this.roleAssignmentScheduleRequests?.forEach(element => {
            roleAssignmentScheduleRequestsArrValue.push((element instanceof UnifiedRoleAssignmentScheduleRequestImpl? element:new UnifiedRoleAssignmentScheduleRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequestImpl>("roleAssignmentScheduleRequests", roleAssignmentScheduleRequestsArrValue);
        }
        if(this.roleAssignmentSchedules && this.roleAssignmentSchedules.length != 0){        const roleAssignmentSchedulesArrValue: UnifiedRoleAssignmentScheduleImpl[] = [];
        this.roleAssignmentSchedules?.forEach(element => {
            roleAssignmentSchedulesArrValue.push((element instanceof UnifiedRoleAssignmentScheduleImpl? element:new UnifiedRoleAssignmentScheduleImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleImpl>("roleAssignmentSchedules", roleAssignmentSchedulesArrValue);
        }
        if(this.roleDefinitions && this.roleDefinitions.length != 0){        const roleDefinitionsArrValue: UnifiedRoleDefinitionImpl[] = [];
        this.roleDefinitions?.forEach(element => {
            roleDefinitionsArrValue.push((element instanceof UnifiedRoleDefinitionImpl? element:new UnifiedRoleDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleDefinitionImpl>("roleDefinitions", roleDefinitionsArrValue);
        }
        if(this.roleEligibilityScheduleInstances && this.roleEligibilityScheduleInstances.length != 0){        const roleEligibilityScheduleInstancesArrValue: UnifiedRoleEligibilityScheduleInstanceImpl[] = [];
        this.roleEligibilityScheduleInstances?.forEach(element => {
            roleEligibilityScheduleInstancesArrValue.push((element instanceof UnifiedRoleEligibilityScheduleInstanceImpl? element:new UnifiedRoleEligibilityScheduleInstanceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstanceImpl>("roleEligibilityScheduleInstances", roleEligibilityScheduleInstancesArrValue);
        }
        if(this.roleEligibilityScheduleRequests && this.roleEligibilityScheduleRequests.length != 0){        const roleEligibilityScheduleRequestsArrValue: UnifiedRoleEligibilityScheduleRequestImpl[] = [];
        this.roleEligibilityScheduleRequests?.forEach(element => {
            roleEligibilityScheduleRequestsArrValue.push((element instanceof UnifiedRoleEligibilityScheduleRequestImpl? element:new UnifiedRoleEligibilityScheduleRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequestImpl>("roleEligibilityScheduleRequests", roleEligibilityScheduleRequestsArrValue);
        }
        if(this.roleEligibilitySchedules && this.roleEligibilitySchedules.length != 0){        const roleEligibilitySchedulesArrValue: UnifiedRoleEligibilityScheduleImpl[] = [];
        this.roleEligibilitySchedules?.forEach(element => {
            roleEligibilitySchedulesArrValue.push((element instanceof UnifiedRoleEligibilityScheduleImpl? element:new UnifiedRoleEligibilityScheduleImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleImpl>("roleEligibilitySchedules", roleEligibilitySchedulesArrValue);
        }
    };
}
