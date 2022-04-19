import {UnifiedRoleScheduleInstanceBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleInstanceBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleScheduleInstanceBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleScheduleInstanceBase();
}
