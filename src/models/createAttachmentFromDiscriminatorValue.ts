import {Attachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Attachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.attachment":
                    return new Attachment();
            }
        }
    }
    return new Attachment();
}
