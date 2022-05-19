import {Request} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : Request {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.request":
                    return new Request();
            }
        }
    }
    return new Request();
}
