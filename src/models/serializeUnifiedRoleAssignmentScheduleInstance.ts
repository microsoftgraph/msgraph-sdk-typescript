import {serializeUnifiedRoleEligibilityScheduleInstance} from './serializeUnifiedRoleEligibilityScheduleInstance';
import {serializeUnifiedRoleScheduleInstanceBase} from './serializeUnifiedRoleScheduleInstanceBase';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleInstance(writer: SerializationWriter, unifiedRoleAssignmentScheduleInstance: UnifiedRoleAssignmentScheduleInstance | undefined = {} as UnifiedRoleAssignmentScheduleInstance) : void {
        serializeUnifiedRoleScheduleInstanceBase(writer, unifiedRoleAssignmentScheduleInstance)
        writer.writeObjectValue<UnifiedRoleEligibilityScheduleInstance>("activatedUsing", unifiedRoleAssignmentScheduleInstance.activatedUsing, serializeUnifiedRoleEligibilityScheduleInstance);
        writer.writeStringValue("assignmentType", unifiedRoleAssignmentScheduleInstance.assignmentType);
        writer.writeDateValue("endDateTime", unifiedRoleAssignmentScheduleInstance.endDateTime);
        writer.writeStringValue("memberType", unifiedRoleAssignmentScheduleInstance.memberType);
        writer.writeStringValue("roleAssignmentOriginId", unifiedRoleAssignmentScheduleInstance.roleAssignmentOriginId);
        writer.writeStringValue("roleAssignmentScheduleId", unifiedRoleAssignmentScheduleInstance.roleAssignmentScheduleId);
        writer.writeDateValue("startDateTime", unifiedRoleAssignmentScheduleInstance.startDateTime);
}
