import { createUnifiedRoleEligibilityScheduleFromDiscriminatorValue } from '../../../../models/createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleEligibilitySchedule } from '../../../../models/serializeUnifiedRoleEligibilitySchedule';
import { type UnifiedRoleEligibilitySchedule } from '../../../../models/unifiedRoleEligibilitySchedule';
import { type FilterByCurrentUserWithOnResponse } from './filterByCurrentUserWithOnResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilitySchedule>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
    }
}
