import { deserializeIntoCalendarSharingMessage } from './deserializeIntoCalendarSharingMessage';
import { deserializeIntoContact } from './deserializeIntoContact';
import { deserializeIntoEvent } from './deserializeIntoEvent';
import { deserializeIntoEventMessage } from './deserializeIntoEventMessage';
import { deserializeIntoEventMessageRequest } from './deserializeIntoEventMessageRequest';
import { deserializeIntoEventMessageResponse } from './deserializeIntoEventMessageResponse';
import { deserializeIntoMessage } from './deserializeIntoMessage';
import { deserializeIntoOutlookItem } from './deserializeIntoOutlookItem';
import { deserializeIntoPost } from './deserializeIntoPost';
import { type CalendarSharingMessage, type Contact, type Event, type EventMessage, type EventMessageRequest, type EventMessageResponse, type Message, type OutlookItem, type Post } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOutlookItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.calendarSharingMessage":
                    return deserializeIntoCalendarSharingMessage;
                case "#microsoft.graph.contact":
                    return deserializeIntoContact;
                case "#microsoft.graph.event":
                    return deserializeIntoEvent;
                case "#microsoft.graph.eventMessage":
                    return deserializeIntoEventMessage;
                case "#microsoft.graph.eventMessageRequest":
                    return deserializeIntoEventMessageRequest;
                case "#microsoft.graph.eventMessageResponse":
                    return deserializeIntoEventMessageResponse;
                case "#microsoft.graph.message":
                    return deserializeIntoMessage;
                case "#microsoft.graph.post":
                    return deserializeIntoPost;
            }
        }
    }
    return deserializeIntoOutlookItem;
}
