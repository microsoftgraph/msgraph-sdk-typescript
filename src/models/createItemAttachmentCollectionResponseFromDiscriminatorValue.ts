import {ItemAttachmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemAttachmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemAttachmentCollectionResponse();
}
