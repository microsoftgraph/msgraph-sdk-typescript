import {UnifiedRoleScheduleInstanceBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleInstanceBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleScheduleInstanceBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleScheduleInstanceBaseImpl();
}
