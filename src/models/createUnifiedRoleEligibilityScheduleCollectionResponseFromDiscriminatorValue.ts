import { deserializeIntoUnifiedRoleEligibilityScheduleCollectionResponse } from './deserializeIntoUnifiedRoleEligibilityScheduleCollectionResponse';
import { type UnifiedRoleEligibilityScheduleCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilityScheduleCollectionResponse;
}
