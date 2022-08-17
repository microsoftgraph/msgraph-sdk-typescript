import {TaskFileAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskFileAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : TaskFileAttachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TaskFileAttachment();
}
