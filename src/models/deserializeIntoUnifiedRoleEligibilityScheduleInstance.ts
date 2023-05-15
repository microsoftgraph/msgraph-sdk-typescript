import {deserializeIntoUnifiedRoleScheduleInstanceBase} from './deserializeIntoUnifiedRoleScheduleInstanceBase';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleInstance(unifiedRoleEligibilityScheduleInstance: UnifiedRoleEligibilityScheduleInstance | undefined = {} as UnifiedRoleEligibilityScheduleInstance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleScheduleInstanceBase(unifiedRoleEligibilityScheduleInstance),
        "endDateTime": n => { unifiedRoleEligibilityScheduleInstance.endDateTime = n.getDateValue(); },
        "memberType": n => { unifiedRoleEligibilityScheduleInstance.memberType = n.getStringValue(); },
        "roleEligibilityScheduleId": n => { unifiedRoleEligibilityScheduleInstance.roleEligibilityScheduleId = n.getStringValue(); },
        "startDateTime": n => { unifiedRoleEligibilityScheduleInstance.startDateTime = n.getDateValue(); },
    }
}
