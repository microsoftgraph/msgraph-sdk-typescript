import {RequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : RequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.request":
                    return new RequestImpl();
            }
        }
    }
    return new RequestImpl();
}
