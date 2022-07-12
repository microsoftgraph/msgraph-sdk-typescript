import {Contact, Event, Message, OutlookItem, Post} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.contact":
                    return new Contact();
                case "#microsoft.graph.event":
                    return new Event();
                case "#microsoft.graph.message":
                    return new Message();
                case "#microsoft.graph.post":
                    return new Post();
            }
        }
    }
    return new OutlookItem();
}
