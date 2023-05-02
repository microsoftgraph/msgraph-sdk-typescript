import {RequestSchedule} from './requestSchedule';
import {serializeRequestSchedule} from './serializeRequestSchedule';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {serializeUnifiedRoleScheduleBase} from './serializeUnifiedRoleScheduleBase';
import {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentSchedule(writer: SerializationWriter, unifiedRoleAssignmentSchedule: UnifiedRoleAssignmentSchedule | undefined = {} as UnifiedRoleAssignmentSchedule) : void {
        serializeUnifiedRoleScheduleBase(writer, unifiedRoleAssignmentSchedule)
        writer.writeObjectValue<UnifiedRoleEligibilitySchedule>("activatedUsing", unifiedRoleAssignmentSchedule.activatedUsing, serializeUnifiedRoleEligibilitySchedule);
        writer.writeStringValue("assignmentType", unifiedRoleAssignmentSchedule.assignmentType);
        writer.writeStringValue("memberType", unifiedRoleAssignmentSchedule.memberType);
        writer.writeObjectValue<RequestSchedule>("scheduleInfo", unifiedRoleAssignmentSchedule.scheduleInfo, serializeRequestSchedule);
}
