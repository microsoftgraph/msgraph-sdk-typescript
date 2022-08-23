import {AttachmentSessionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentSessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttachmentSessionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttachmentSessionCollectionResponse();
}
