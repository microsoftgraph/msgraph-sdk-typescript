import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {UnifiedRoleEligibilityScheduleInstanceImpl, UnifiedRoleScheduleInstanceBaseImpl} from './index';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentScheduleInstanceImpl extends UnifiedRoleScheduleInstanceBaseImpl implements UnifiedRoleAssignmentScheduleInstance {
    /** If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand. */
    public activatedUsing?: UnifiedRoleEligibilityScheduleInstance | undefined;
    /** Type of the assignment which can either be Assigned or Activated. Supports $filter (eq, ne). */
    public assignmentType?: string | undefined;
    /** The end date of the schedule instance. */
    public endDateTime?: Date | undefined;
    /** How the assignments is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleAssignmentSchedule can be managed by the caller. Supports $filter (eq, ne). */
    public memberType?: string | undefined;
    /** The identifier of the role assignment in Azure AD. */
    public roleAssignmentOriginId?: string | undefined;
    /** The identifier of the unifiedRoleAssignmentSchedule object from which this instance was created. */
    public roleAssignmentScheduleId?: string | undefined;
    /** When this instance starts. */
    public startDateTime?: Date | undefined;
    /**
     * Instantiates a new UnifiedRoleAssignmentScheduleInstance and sets the default values.
     * @param unifiedRoleAssignmentScheduleInstanceParameterValue 
     */
    public constructor(unifiedRoleAssignmentScheduleInstanceParameterValue?: UnifiedRoleAssignmentScheduleInstance | undefined) {
        super(unifiedRoleAssignmentScheduleInstanceParameterValue);
        this.activatedUsing = unifiedRoleAssignmentScheduleInstanceParameterValue?.activatedUsing;
        this.assignmentType = unifiedRoleAssignmentScheduleInstanceParameterValue?.assignmentType;
        this.endDateTime = unifiedRoleAssignmentScheduleInstanceParameterValue?.endDateTime;
        this.memberType = unifiedRoleAssignmentScheduleInstanceParameterValue?.memberType;
        this.roleAssignmentOriginId = unifiedRoleAssignmentScheduleInstanceParameterValue?.roleAssignmentOriginId;
        this.roleAssignmentScheduleId = unifiedRoleAssignmentScheduleInstanceParameterValue?.roleAssignmentScheduleId;
        this.startDateTime = unifiedRoleAssignmentScheduleInstanceParameterValue?.startDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activatedUsing": n => { this.activatedUsing = n.getObjectValue<UnifiedRoleEligibilityScheduleInstanceImpl>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
            "assignmentType": n => { this.assignmentType = n.getStringValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "memberType": n => { this.memberType = n.getStringValue(); },
            "roleAssignmentOriginId": n => { this.roleAssignmentOriginId = n.getStringValue(); },
            "roleAssignmentScheduleId": n => { this.roleAssignmentScheduleId = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activatedUsing){
            writer.writeObjectValue<UnifiedRoleEligibilityScheduleInstanceImpl>("activatedUsing", new UnifiedRoleEligibilityScheduleInstanceImpl(this.activatedUsing));
        }
        if(this.assignmentType){
            writer.writeStringValue("assignmentType", this.assignmentType);
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.memberType){
            writer.writeStringValue("memberType", this.memberType);
        }
        if(this.roleAssignmentOriginId){
            writer.writeStringValue("roleAssignmentOriginId", this.roleAssignmentOriginId);
        }
        if(this.roleAssignmentScheduleId){
            writer.writeStringValue("roleAssignmentScheduleId", this.roleAssignmentScheduleId);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
    };
}
