import { createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue } from './createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleEligibilityScheduleRequest } from './serializeUnifiedRoleEligibilityScheduleRequest';
import { type UnifiedRoleEligibilityScheduleRequest } from './unifiedRoleEligibilityScheduleRequest';
import { type UnifiedRoleEligibilityScheduleRequestCollectionResponse } from './unifiedRoleEligibilityScheduleRequestCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleRequestCollectionResponse(unifiedRoleEligibilityScheduleRequestCollectionResponse: UnifiedRoleEligibilityScheduleRequestCollectionResponse | undefined = {} as UnifiedRoleEligibilityScheduleRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleEligibilityScheduleRequestCollectionResponse),
        "value": n => { unifiedRoleEligibilityScheduleRequestCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>(createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue); },
    }
}
