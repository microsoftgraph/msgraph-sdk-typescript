import {UnifiedRoleScheduleInstanceBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleInstanceBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleScheduleInstanceBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleScheduleInstanceBase":
                    return new UnifiedRoleScheduleInstanceBaseImpl();
            }
        }
    }
    return new UnifiedRoleScheduleInstanceBaseImpl();
}
