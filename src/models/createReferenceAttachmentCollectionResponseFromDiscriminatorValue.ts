import {ReferenceAttachmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReferenceAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReferenceAttachmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReferenceAttachmentCollectionResponse();
}
