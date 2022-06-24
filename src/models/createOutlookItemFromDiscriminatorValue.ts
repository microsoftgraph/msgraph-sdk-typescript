import {ContactImpl, EventImpl, MessageImpl, OutlookItemImpl, PostImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.contact":
                    return new ContactImpl();
                case "#microsoft.graph.event":
                    return new EventImpl();
                case "#microsoft.graph.message":
                    return new MessageImpl();
                case "#microsoft.graph.post":
                    return new PostImpl();
            }
        }
    }
    return new OutlookItemImpl();
}
