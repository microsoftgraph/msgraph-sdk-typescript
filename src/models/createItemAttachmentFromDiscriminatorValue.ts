import {deserializeIntoItemAttachment} from './deserializeIntoItemAttachment';
import {ItemAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemAttachment;
}
