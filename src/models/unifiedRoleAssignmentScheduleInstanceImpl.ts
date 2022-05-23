import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {UnifiedRoleEligibilityScheduleInstanceImpl, UnifiedRoleScheduleInstanceBaseImpl} from './index';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class UnifiedRoleAssignmentScheduleInstanceImpl extends UnifiedRoleScheduleInstanceBaseImpl implements Parsable, UnifiedRoleAssignmentScheduleInstance {
    /** If the roleAssignmentScheduleInstance is activated by a roleEligibilityScheduleRequest, this is the link to the related schedule instance. */
    public activatedUsing?: UnifiedRoleEligibilityScheduleInstance | undefined;
    /** Type of the assignment. It can either be Assigned or Activated. */
    public assignmentType?: string | undefined;
    /** Time that the roleAssignmentInstance will expire */
    public endDateTime?: Date | undefined;
    /** Membership type of the assignment. It can either be Inherited, Direct, or Group. */
    public memberType?: string | undefined;
    /** ID of the roleAssignment in the directory */
    public roleAssignmentOriginId?: string | undefined;
    /** ID of the parent roleAssignmentSchedule for this instance */
    public roleAssignmentScheduleId?: string | undefined;
    /** Time that the roleAssignmentInstance will start */
    public startDateTime?: Date | undefined;
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
