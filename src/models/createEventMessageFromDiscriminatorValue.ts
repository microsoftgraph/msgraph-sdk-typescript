import {EventMessage, EventMessageRequest, EventMessageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.eventMessageRequest":
                    return new EventMessageRequest();
                case "#microsoft.graph.eventMessageResponse":
                    return new EventMessageResponse();
            }
        }
    }
    return new EventMessage();
}
