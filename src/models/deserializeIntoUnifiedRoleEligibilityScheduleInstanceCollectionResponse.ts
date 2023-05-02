import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleInstance} from './serializeUnifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstanceCollectionResponse} from './unifiedRoleEligibilityScheduleInstanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse(unifiedRoleEligibilityScheduleInstanceCollectionResponse: UnifiedRoleEligibilityScheduleInstanceCollectionResponse | undefined = {} as UnifiedRoleEligibilityScheduleInstanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleEligibilityScheduleInstanceCollectionResponse),
        "value": n => { unifiedRoleEligibilityScheduleInstanceCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>(createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue); },
    }
}
