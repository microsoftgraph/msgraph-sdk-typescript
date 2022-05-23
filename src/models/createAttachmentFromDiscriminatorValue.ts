import {AttachmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttachmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.attachment":
                    return new AttachmentImpl();
            }
        }
    }
    return new AttachmentImpl();
}
