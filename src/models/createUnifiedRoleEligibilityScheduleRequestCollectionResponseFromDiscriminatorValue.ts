import {UnifiedRoleEligibilityScheduleRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleEligibilityScheduleRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleEligibilityScheduleRequestCollectionResponse();
}
