import {AttachmentImpl, FileAttachmentImpl, ItemAttachmentImpl, ReferenceAttachmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttachmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.fileAttachment":
                    return new FileAttachmentImpl();
                case "#microsoft.graph.itemAttachment":
                    return new ItemAttachmentImpl();
                case "#microsoft.graph.referenceAttachment":
                    return new ReferenceAttachmentImpl();
            }
        }
    }
    return new AttachmentImpl();
}
