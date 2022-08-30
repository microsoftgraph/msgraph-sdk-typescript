import {AttachmentInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttachmentInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttachmentInfo();
}
