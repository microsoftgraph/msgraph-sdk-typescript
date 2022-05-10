import {UnifiedRoleEligibilityScheduleInstanceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleEligibilityScheduleInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleEligibilityScheduleInstanceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleEligibilityScheduleInstanceCollectionResponseImpl();
}
