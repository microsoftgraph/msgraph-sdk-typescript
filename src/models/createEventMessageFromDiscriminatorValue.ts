import {deserializeIntoEventMessage} from './deserializeIntoEventMessage';
import {deserializeIntoEventMessageRequest} from './deserializeIntoEventMessageRequest';
import {deserializeIntoEventMessageResponse} from './deserializeIntoEventMessageResponse';
import {EventMessage, EventMessageRequest, EventMessageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.eventMessageRequest":
                    return deserializeIntoEventMessageRequest;
                case "#microsoft.graph.eventMessageResponse":
                    return deserializeIntoEventMessageResponse;
            }
        }
    }
    return deserializeIntoEventMessage;
}
