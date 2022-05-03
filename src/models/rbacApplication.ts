import {createUnifiedRoleAssignmentFromDiscriminatorValue} from './createUnifiedRoleAssignmentFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue';
import {Entity, UnifiedRoleAssignment, UnifiedRoleAssignmentSchedule, UnifiedRoleAssignmentScheduleInstance, UnifiedRoleAssignmentScheduleRequest, UnifiedRoleDefinition, UnifiedRoleEligibilitySchedule, UnifiedRoleEligibilityScheduleInstance, UnifiedRoleEligibilityScheduleRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RbacApplication extends Entity implements Parsable {
    /** Resource to grant access to users or groups.  */
    private _roleAssignments?: UnifiedRoleAssignment[] | undefined;
    /** Instances for active role assignments.  */
    private _roleAssignmentScheduleInstances?: UnifiedRoleAssignmentScheduleInstance[] | undefined;
    /** Requests for active role assignments to principals through PIM.  */
    private _roleAssignmentScheduleRequests?: UnifiedRoleAssignmentScheduleRequest[] | undefined;
    /** Schedules for active role assignment operations.  */
    private _roleAssignmentSchedules?: UnifiedRoleAssignmentSchedule[] | undefined;
    /** Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.  */
    private _roleDefinitions?: UnifiedRoleDefinition[] | undefined;
    /** Instances for role eligibility requests.  */
    private _roleEligibilityScheduleInstances?: UnifiedRoleEligibilityScheduleInstance[] | undefined;
    /** Requests for role eligibilities for principals through PIM.  */
    private _roleEligibilityScheduleRequests?: UnifiedRoleEligibilityScheduleRequest[] | undefined;
    /** Schedules for role eligibility operations.  */
    private _roleEligibilitySchedules?: UnifiedRoleEligibilitySchedule[] | undefined;
    /**
     * Instantiates a new rbacApplication and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "roleAssignments": n => { this.roleAssignments = n.getCollectionOfObjectValues<UnifiedRoleAssignment>(createUnifiedRoleAssignmentFromDiscriminatorValue); },
            "roleAssignmentScheduleInstances": n => { this.roleAssignmentScheduleInstances = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstance>(createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue); },
            "roleAssignmentScheduleRequests": n => { this.roleAssignmentScheduleRequests = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>(createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue); },
            "roleAssignmentSchedules": n => { this.roleAssignmentSchedules = n.getCollectionOfObjectValues<UnifiedRoleAssignmentSchedule>(createUnifiedRoleAssignmentScheduleFromDiscriminatorValue); },
            "roleDefinitions": n => { this.roleDefinitions = n.getCollectionOfObjectValues<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleEligibilityScheduleInstances": n => { this.roleEligibilityScheduleInstances = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
            "roleEligibilityScheduleRequests": n => { this.roleEligibilityScheduleRequests = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>(createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue); },
            "roleEligibilitySchedules": n => { this.roleEligibilitySchedules = n.getCollectionOfObjectValues<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the roleAssignments property value. Resource to grant access to users or groups.
     * @returns a unifiedRoleAssignment
     */
    public get roleAssignments() {
        return this._roleAssignments;
    };
    /**
     * Sets the roleAssignments property value. Resource to grant access to users or groups.
     * @param value Value to set for the roleAssignments property.
     */
    public set roleAssignments(value: UnifiedRoleAssignment[] | undefined) {
        this._roleAssignments = value;
    };
    /**
     * Gets the roleAssignmentScheduleInstances property value. Instances for active role assignments.
     * @returns a unifiedRoleAssignmentScheduleInstance
     */
    public get roleAssignmentScheduleInstances() {
        return this._roleAssignmentScheduleInstances;
    };
    /**
     * Sets the roleAssignmentScheduleInstances property value. Instances for active role assignments.
     * @param value Value to set for the roleAssignmentScheduleInstances property.
     */
    public set roleAssignmentScheduleInstances(value: UnifiedRoleAssignmentScheduleInstance[] | undefined) {
        this._roleAssignmentScheduleInstances = value;
    };
    /**
     * Gets the roleAssignmentScheduleRequests property value. Requests for active role assignments to principals through PIM.
     * @returns a unifiedRoleAssignmentScheduleRequest
     */
    public get roleAssignmentScheduleRequests() {
        return this._roleAssignmentScheduleRequests;
    };
    /**
     * Sets the roleAssignmentScheduleRequests property value. Requests for active role assignments to principals through PIM.
     * @param value Value to set for the roleAssignmentScheduleRequests property.
     */
    public set roleAssignmentScheduleRequests(value: UnifiedRoleAssignmentScheduleRequest[] | undefined) {
        this._roleAssignmentScheduleRequests = value;
    };
    /**
     * Gets the roleAssignmentSchedules property value. Schedules for active role assignment operations.
     * @returns a unifiedRoleAssignmentSchedule
     */
    public get roleAssignmentSchedules() {
        return this._roleAssignmentSchedules;
    };
    /**
     * Sets the roleAssignmentSchedules property value. Schedules for active role assignment operations.
     * @param value Value to set for the roleAssignmentSchedules property.
     */
    public set roleAssignmentSchedules(value: UnifiedRoleAssignmentSchedule[] | undefined) {
        this._roleAssignmentSchedules = value;
    };
    /**
     * Gets the roleDefinitions property value. Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     * @returns a unifiedRoleDefinition
     */
    public get roleDefinitions() {
        return this._roleDefinitions;
    };
    /**
     * Sets the roleDefinitions property value. Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     * @param value Value to set for the roleDefinitions property.
     */
    public set roleDefinitions(value: UnifiedRoleDefinition[] | undefined) {
        this._roleDefinitions = value;
    };
    /**
     * Gets the roleEligibilityScheduleInstances property value. Instances for role eligibility requests.
     * @returns a unifiedRoleEligibilityScheduleInstance
     */
    public get roleEligibilityScheduleInstances() {
        return this._roleEligibilityScheduleInstances;
    };
    /**
     * Sets the roleEligibilityScheduleInstances property value. Instances for role eligibility requests.
     * @param value Value to set for the roleEligibilityScheduleInstances property.
     */
    public set roleEligibilityScheduleInstances(value: UnifiedRoleEligibilityScheduleInstance[] | undefined) {
        this._roleEligibilityScheduleInstances = value;
    };
    /**
     * Gets the roleEligibilityScheduleRequests property value. Requests for role eligibilities for principals through PIM.
     * @returns a unifiedRoleEligibilityScheduleRequest
     */
    public get roleEligibilityScheduleRequests() {
        return this._roleEligibilityScheduleRequests;
    };
    /**
     * Sets the roleEligibilityScheduleRequests property value. Requests for role eligibilities for principals through PIM.
     * @param value Value to set for the roleEligibilityScheduleRequests property.
     */
    public set roleEligibilityScheduleRequests(value: UnifiedRoleEligibilityScheduleRequest[] | undefined) {
        this._roleEligibilityScheduleRequests = value;
    };
    /**
     * Gets the roleEligibilitySchedules property value. Schedules for role eligibility operations.
     * @returns a unifiedRoleEligibilitySchedule
     */
    public get roleEligibilitySchedules() {
        return this._roleEligibilitySchedules;
    };
    /**
     * Sets the roleEligibilitySchedules property value. Schedules for role eligibility operations.
     * @param value Value to set for the roleEligibilitySchedules property.
     */
    public set roleEligibilitySchedules(value: UnifiedRoleEligibilitySchedule[] | undefined) {
        this._roleEligibilitySchedules = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignment>("roleAssignments", this.roleAssignments);
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstance>("roleAssignmentScheduleInstances", this.roleAssignmentScheduleInstances);
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>("roleAssignmentScheduleRequests", this.roleAssignmentScheduleRequests);
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentSchedule>("roleAssignmentSchedules", this.roleAssignmentSchedules);
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinition>("roleDefinitions", this.roleDefinitions);
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>("roleEligibilityScheduleInstances", this.roleEligibilityScheduleInstances);
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>("roleEligibilityScheduleRequests", this.roleEligibilityScheduleRequests);
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilitySchedule>("roleEligibilitySchedules", this.roleEligibilitySchedules);
    };
}
