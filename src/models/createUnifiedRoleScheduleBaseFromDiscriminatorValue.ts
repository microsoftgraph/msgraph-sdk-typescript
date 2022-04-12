import {UnifiedRoleScheduleBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleScheduleBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleScheduleBase();
}
