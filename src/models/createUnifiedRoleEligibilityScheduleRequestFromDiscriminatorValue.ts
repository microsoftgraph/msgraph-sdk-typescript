import { deserializeIntoUnifiedRoleEligibilityScheduleRequest } from './deserializeIntoUnifiedRoleEligibilityScheduleRequest';
import { type UnifiedRoleEligibilityScheduleRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleEligibilityScheduleRequest;
}
