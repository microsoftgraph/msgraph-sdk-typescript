import { createUnifiedRoleEligibilityScheduleFromDiscriminatorValue } from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleEligibilitySchedule } from './serializeUnifiedRoleEligibilitySchedule';
import { type UnifiedRoleEligibilitySchedule } from './unifiedRoleEligibilitySchedule';
import { type UnifiedRoleEligibilityScheduleCollectionResponse } from './unifiedRoleEligibilityScheduleCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleCollectionResponse(unifiedRoleEligibilityScheduleCollectionResponse: UnifiedRoleEligibilityScheduleCollectionResponse | undefined = {} as UnifiedRoleEligibilityScheduleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleEligibilityScheduleCollectionResponse),
        "value": n => { unifiedRoleEligibilityScheduleCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
    }
}
