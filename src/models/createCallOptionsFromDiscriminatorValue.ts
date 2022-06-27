import {CallOptionsImpl, IncomingCallOptionsImpl, OutgoingCallOptionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallOptionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.incomingCallOptions":
                    return new IncomingCallOptionsImpl();
                case "#microsoft.graph.outgoingCallOptions":
                    return new OutgoingCallOptionsImpl();
            }
        }
    }
    return new CallOptionsImpl();
}
