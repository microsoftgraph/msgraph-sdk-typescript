import {CalendarSharingMessage, EventMessage, EventMessageRequest, EventMessageResponse, Message} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Message {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.calendarSharingMessage":
                    return new CalendarSharingMessage();
                case "#microsoft.graph.eventMessage":
                    return new EventMessage();
                case "#microsoft.graph.eventMessageRequest":
                    return new EventMessageRequest();
                case "#microsoft.graph.eventMessageResponse":
                    return new EventMessageResponse();
            }
        }
    }
    return new Message();
}
