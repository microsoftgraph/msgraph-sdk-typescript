import { deserializeIntoCallOptions } from './deserializeIntoCallOptions';
import { deserializeIntoIncomingCallOptions } from './deserializeIntoIncomingCallOptions';
import { deserializeIntoOutgoingCallOptions } from './deserializeIntoOutgoingCallOptions';
import { type CallOptions, type IncomingCallOptions, type OutgoingCallOptions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.incomingCallOptions":
                    return deserializeIntoIncomingCallOptions;
                case "#microsoft.graph.outgoingCallOptions":
                    return deserializeIntoOutgoingCallOptions;
            }
        }
    }
    return deserializeIntoCallOptions;
}
