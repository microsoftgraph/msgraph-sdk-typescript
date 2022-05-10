import {UnifiedRoleScheduleBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleScheduleBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleScheduleBaseImpl();
}
