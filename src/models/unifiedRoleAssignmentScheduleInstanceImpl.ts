import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {UnifiedRoleEligibilityScheduleInstanceImpl, UnifiedRoleScheduleInstanceBaseImpl} from './index';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentScheduleInstanceImpl extends UnifiedRoleScheduleInstanceBaseImpl implements Parsable, UnifiedRoleAssignmentScheduleInstance {
    /** If the roleAssignmentScheduleInstance is activated by a roleEligibilityScheduleRequest, this is the link to the related schedule instance. */
    activatedUsing?: UnifiedRoleEligibilityScheduleInstance | undefined;
    /** Type of the assignment. It can either be Assigned or Activated. */
    assignmentType?: string | undefined;
    /** Time that the roleAssignmentInstance will expire */
    endDateTime?: Date | undefined;
    /** Membership type of the assignment. It can either be Inherited, Direct, or Group. */
    memberType?: string | undefined;
    /** ID of the roleAssignment in the directory */
    roleAssignmentOriginId?: string | undefined;
    /** ID of the parent roleAssignmentSchedule for this instance */
    roleAssignmentScheduleId?: string | undefined;
    /** Time that the roleAssignmentInstance will start */
    startDateTime?: Date | undefined;
    /**
     * Instantiates a new unifiedRoleAssignmentScheduleInstance and sets the default values.
     * @param unifiedRoleAssignmentScheduleInstanceParameterValue 
     */
    public constructor(unifiedRoleAssignmentScheduleInstanceParameterValue?: UnifiedRoleAssignmentScheduleInstance | undefined) {
        super();
        this.activatedUsing = unifiedRoleAssignmentScheduleInstanceParameterValue?.activatedUsing ;
        this.assignmentType = unifiedRoleAssignmentScheduleInstanceParameterValue?.assignmentType ;
        this.endDateTime = unifiedRoleAssignmentScheduleInstanceParameterValue?.endDateTime ;
        this.memberType = unifiedRoleAssignmentScheduleInstanceParameterValue?.memberType ;
        this.roleAssignmentOriginId = unifiedRoleAssignmentScheduleInstanceParameterValue?.roleAssignmentOriginId ;
        this.roleAssignmentScheduleId = unifiedRoleAssignmentScheduleInstanceParameterValue?.roleAssignmentScheduleId ;
        this.startDateTime = unifiedRoleAssignmentScheduleInstanceParameterValue?.startDateTime ;
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
        if(this.activatedUsing)
        writer.writeObjectValue<UnifiedRoleEligibilityScheduleInstanceImpl>("activatedUsing", new UnifiedRoleEligibilityScheduleInstanceImpl(this.activatedUsing));
        }
        if(this.assignmentType){
        if(this.assignmentType)
        writer.writeStringValue("assignmentType", this.assignmentType);
        }
        if(this.endDateTime){
        if(this.endDateTime)
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.memberType){
        if(this.memberType)
        writer.writeStringValue("memberType", this.memberType);
        }
        if(this.roleAssignmentOriginId){
        if(this.roleAssignmentOriginId)
        writer.writeStringValue("roleAssignmentOriginId", this.roleAssignmentOriginId);
        }
        if(this.roleAssignmentScheduleId){
        if(this.roleAssignmentScheduleId)
        writer.writeStringValue("roleAssignmentScheduleId", this.roleAssignmentScheduleId);
        }
        if(this.startDateTime){
        if(this.startDateTime)
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
    };
}
