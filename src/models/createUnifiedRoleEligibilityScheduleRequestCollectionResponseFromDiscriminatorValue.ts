import {deserializeIntoUnifiedRoleEligibilityScheduleRequestCollectionResponse} from './deserializeIntoUnifiedRoleEligibilityScheduleRequestCollectionResponse';
import {UnifiedRoleEligibilityScheduleRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilityScheduleRequestCollectionResponse;
}
