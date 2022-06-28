import {createRequestScheduleFromDiscriminatorValue} from './createRequestScheduleFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {RequestScheduleImpl, UnifiedRoleEligibilityScheduleImpl, UnifiedRoleScheduleBaseImpl} from './index';
import {RequestSchedule} from './requestSchedule';
import {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentScheduleImpl extends UnifiedRoleScheduleBaseImpl implements UnifiedRoleAssignmentSchedule {
    /** If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand. */
    public activatedUsing?: UnifiedRoleEligibilitySchedule | undefined;
    /** Type of the assignment which can either be Assigned or Activated. Supports $filter (eq, ne). */
    public assignmentType?: string | undefined;
    /** How the assignments is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleAssignmentSchedule can be managed by the caller. Supports $filter (eq, ne). */
    public memberType?: string | undefined;
    /** The period of the role assignment. It can represent a single occurrence or multiple recurrences. */
    public scheduleInfo?: RequestSchedule | undefined;
    /**
     * Instantiates a new UnifiedRoleAssignmentSchedule and sets the default values.
     * @param unifiedRoleAssignmentScheduleParameterValue 
     */
    public constructor(unifiedRoleAssignmentScheduleParameterValue?: UnifiedRoleAssignmentSchedule | undefined) {
        super(unifiedRoleAssignmentScheduleParameterValue);
        this.activatedUsing = unifiedRoleAssignmentScheduleParameterValue?.activatedUsing;
        this.assignmentType = unifiedRoleAssignmentScheduleParameterValue?.assignmentType;
        this.memberType = unifiedRoleAssignmentScheduleParameterValue?.memberType;
        this.scheduleInfo = unifiedRoleAssignmentScheduleParameterValue?.scheduleInfo;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activatedUsing": n => { this.activatedUsing = n.getObjectValue<UnifiedRoleEligibilityScheduleImpl>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
            "assignmentType": n => { this.assignmentType = n.getStringValue(); },
            "memberType": n => { this.memberType = n.getStringValue(); },
            "scheduleInfo": n => { this.scheduleInfo = n.getObjectValue<RequestScheduleImpl>(createRequestScheduleFromDiscriminatorValue); },
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
            writer.writeObjectValue<UnifiedRoleEligibilityScheduleImpl>("activatedUsing", new UnifiedRoleEligibilityScheduleImpl(this.activatedUsing));
        }
        if(this.assignmentType){
            writer.writeStringValue("assignmentType", this.assignmentType);
        }
        if(this.memberType){
            writer.writeStringValue("memberType", this.memberType);
        }
        if(this.scheduleInfo){
            writer.writeObjectValue<RequestScheduleImpl>("scheduleInfo", new RequestScheduleImpl(this.scheduleInfo));
        }
    };
}
