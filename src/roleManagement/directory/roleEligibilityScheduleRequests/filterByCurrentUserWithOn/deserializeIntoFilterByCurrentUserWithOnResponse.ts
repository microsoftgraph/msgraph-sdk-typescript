import {createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue} from '../../../../models/createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleRequest} from '../../../../models/serializeUnifiedRoleEligibilityScheduleRequest';
import {UnifiedRoleEligibilityScheduleRequest} from '../../../../models/unifiedRoleEligibilityScheduleRequest';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>(createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue); },
    }
}
