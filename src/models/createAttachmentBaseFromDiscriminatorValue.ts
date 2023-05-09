import {deserializeIntoAttachmentBase} from './deserializeIntoAttachmentBase';
import {deserializeIntoTaskFileAttachment} from './deserializeIntoTaskFileAttachment';
import {AttachmentBase, TaskFileAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.taskFileAttachment":
                    return deserializeIntoTaskFileAttachment;
            }
        }
    }
    return deserializeIntoAttachmentBase;
}
