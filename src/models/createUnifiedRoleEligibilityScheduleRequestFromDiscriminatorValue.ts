import {deserializeIntoUnifiedRoleEligibilityScheduleRequest} from './deserializeIntoUnifiedRoleEligibilityScheduleRequest';
import {UnifiedRoleEligibilityScheduleRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilityScheduleRequest;
}
