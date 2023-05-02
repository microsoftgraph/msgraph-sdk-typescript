import {deserializeIntoUnifiedRoleEligibilityScheduleCollectionResponse} from './deserializeIntoUnifiedRoleEligibilityScheduleCollectionResponse';
import {UnifiedRoleEligibilityScheduleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilityScheduleCollectionResponse;
}
