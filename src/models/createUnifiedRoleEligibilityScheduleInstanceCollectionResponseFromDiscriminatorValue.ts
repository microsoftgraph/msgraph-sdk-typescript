import {deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse} from './deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse';
import {UnifiedRoleEligibilityScheduleInstanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse;
}
