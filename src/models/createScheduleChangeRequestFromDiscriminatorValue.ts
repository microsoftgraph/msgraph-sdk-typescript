import {ScheduleChangeRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleChangeRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.scheduleChangeRequest":
                    return new ScheduleChangeRequestImpl();
            }
        }
    }
    return new ScheduleChangeRequestImpl();
}
