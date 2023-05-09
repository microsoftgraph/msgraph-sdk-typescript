import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {deserializeIntoFileAttachment} from './deserializeIntoFileAttachment';
import {deserializeIntoItemAttachment} from './deserializeIntoItemAttachment';
import {deserializeIntoReferenceAttachment} from './deserializeIntoReferenceAttachment';
import {Attachment, FileAttachment, ItemAttachment, ReferenceAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.fileAttachment":
                    return deserializeIntoFileAttachment;
                case "#microsoft.graph.itemAttachment":
                    return deserializeIntoItemAttachment;
                case "#microsoft.graph.referenceAttachment":
                    return deserializeIntoReferenceAttachment;
            }
        }
    }
    return deserializeIntoAttachment;
}
