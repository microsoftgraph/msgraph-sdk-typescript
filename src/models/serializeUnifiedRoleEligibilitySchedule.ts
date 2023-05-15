import {RequestSchedule} from './requestSchedule';
import {serializeRequestSchedule} from './serializeRequestSchedule';
import {serializeUnifiedRoleScheduleBase} from './serializeUnifiedRoleScheduleBase';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilitySchedule(writer: SerializationWriter, unifiedRoleEligibilitySchedule: UnifiedRoleEligibilitySchedule | undefined = {} as UnifiedRoleEligibilitySchedule) : void {
        serializeUnifiedRoleScheduleBase(writer, unifiedRoleEligibilitySchedule)
        writer.writeStringValue("memberType", unifiedRoleEligibilitySchedule.memberType);
        writer.writeObjectValue<RequestSchedule>("scheduleInfo", unifiedRoleEligibilitySchedule.scheduleInfo, serializeRequestSchedule);
}
