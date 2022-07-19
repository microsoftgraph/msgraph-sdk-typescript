import {CallOptions, IncomingCallOptions, OutgoingCallOptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallOptions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.incomingCallOptions":
                    return new IncomingCallOptions();
                case "#microsoft.graph.outgoingCallOptions":
                    return new OutgoingCallOptions();
            }
        }
    }
    return new CallOptions();
}
