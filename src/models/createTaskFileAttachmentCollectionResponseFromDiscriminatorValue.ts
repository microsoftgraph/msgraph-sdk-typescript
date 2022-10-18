import {TaskFileAttachmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskFileAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TaskFileAttachmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TaskFileAttachmentCollectionResponse();
}
