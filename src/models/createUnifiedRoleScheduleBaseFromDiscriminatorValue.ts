import {UnifiedRoleScheduleBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleScheduleBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleScheduleBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleScheduleBase":
                    return new UnifiedRoleScheduleBaseImpl();
            }
        }
    }
    return new UnifiedRoleScheduleBaseImpl();
}
