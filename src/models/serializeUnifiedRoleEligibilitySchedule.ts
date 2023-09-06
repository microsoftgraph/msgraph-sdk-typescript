import { type RequestSchedule } from './requestSchedule';
import { serializeRequestSchedule } from './serializeRequestSchedule';
import { serializeUnifiedRoleScheduleBase } from './serializeUnifiedRoleScheduleBase';
import { type UnifiedRoleEligibilitySchedule } from './unifiedRoleEligibilitySchedule';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilitySchedule(writer: SerializationWriter, unifiedRoleEligibilitySchedule: UnifiedRoleEligibilitySchedule | undefined = {} as UnifiedRoleEligibilitySchedule) : void {
        serializeUnifiedRoleScheduleBase(writer, unifiedRoleEligibilitySchedule)
        writer.writeStringValue("memberType", unifiedRoleEligibilitySchedule.memberType);
        writer.writeObjectValue<RequestSchedule>("scheduleInfo", unifiedRoleEligibilitySchedule.scheduleInfo, serializeRequestSchedule);
}
