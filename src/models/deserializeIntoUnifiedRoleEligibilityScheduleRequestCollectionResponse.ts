import {createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleRequest} from './serializeUnifiedRoleEligibilityScheduleRequest';
import {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
import {UnifiedRoleEligibilityScheduleRequestCollectionResponse} from './unifiedRoleEligibilityScheduleRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleRequestCollectionResponse(unifiedRoleEligibilityScheduleRequestCollectionResponse: UnifiedRoleEligibilityScheduleRequestCollectionResponse | undefined = {} as UnifiedRoleEligibilityScheduleRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleEligibilityScheduleRequestCollectionResponse),
        "value": n => { unifiedRoleEligibilityScheduleRequestCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>(createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue); },
    }
}
