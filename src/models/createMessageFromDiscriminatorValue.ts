import {CalendarSharingMessageImpl, EventMessageImpl, MessageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.calendarSharingMessage":
                    return new CalendarSharingMessageImpl();
                case "#microsoft.graph.eventMessage":
                    return new EventMessageImpl();
            }
        }
    }
    return new MessageImpl();
}
