import { createRequestScheduleFromDiscriminatorValue } from './createRequestScheduleFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleScheduleBase } from './deserializeIntoUnifiedRoleScheduleBase';
import { type RequestSchedule } from './requestSchedule';
import { serializeRequestSchedule } from './serializeRequestSchedule';
import { type UnifiedRoleEligibilitySchedule } from './unifiedRoleEligibilitySchedule';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilitySchedule(unifiedRoleEligibilitySchedule: UnifiedRoleEligibilitySchedule | undefined = {} as UnifiedRoleEligibilitySchedule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleScheduleBase(unifiedRoleEligibilitySchedule),
        "memberType": n => { unifiedRoleEligibilitySchedule.memberType = n.getStringValue(); },
        "scheduleInfo": n => { unifiedRoleEligibilitySchedule.scheduleInfo = n.getObjectValue<RequestSchedule>(createRequestScheduleFromDiscriminatorValue); },
    }
}
