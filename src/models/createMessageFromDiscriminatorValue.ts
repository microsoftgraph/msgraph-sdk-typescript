import {deserializeIntoCalendarSharingMessage} from './deserializeIntoCalendarSharingMessage';
import {deserializeIntoEventMessage} from './deserializeIntoEventMessage';
import {deserializeIntoEventMessageRequest} from './deserializeIntoEventMessageRequest';
import {deserializeIntoEventMessageResponse} from './deserializeIntoEventMessageResponse';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {CalendarSharingMessage, EventMessage, EventMessageRequest, EventMessageResponse, Message} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.calendarSharingMessage":
                    return deserializeIntoCalendarSharingMessage;
                case "#microsoft.graph.eventMessage":
                    return deserializeIntoEventMessage;
                case "#microsoft.graph.eventMessageRequest":
                    return deserializeIntoEventMessageRequest;
                case "#microsoft.graph.eventMessageResponse":
                    return deserializeIntoEventMessageResponse;
            }
        }
    }
    return deserializeIntoMessage;
}
