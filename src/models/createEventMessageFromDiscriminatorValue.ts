import {EventMessageImpl, EventMessageRequestImpl, EventMessageResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.eventMessageRequest":
                    return new EventMessageRequestImpl();
                case "#microsoft.graph.eventMessageResponse":
                    return new EventMessageResponseImpl();
            }
        }
    }
    return new EventMessageImpl();
}
