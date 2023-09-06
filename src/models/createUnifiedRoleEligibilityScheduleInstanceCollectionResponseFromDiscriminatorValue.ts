import { deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse } from './deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse';
import { type UnifiedRoleEligibilityScheduleInstanceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse;
}
