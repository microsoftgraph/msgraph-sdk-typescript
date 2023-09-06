import { deserializeIntoUnifiedRoleEligibilityScheduleRequestCollectionResponse } from './deserializeIntoUnifiedRoleEligibilityScheduleRequestCollectionResponse';
import { type UnifiedRoleEligibilityScheduleRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilityScheduleRequestCollectionResponse;
}
