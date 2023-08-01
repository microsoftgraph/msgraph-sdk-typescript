import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from '../../../../models/createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleInstance} from '../../../../models/serializeUnifiedRoleEligibilityScheduleInstance';
import type {UnifiedRoleEligibilityScheduleInstance} from '../../../../models/unifiedRoleEligibilityScheduleInstance';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
    }
}
