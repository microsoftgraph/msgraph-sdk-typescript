import { deserializeIntoWorkbookComment } from './deserializeIntoWorkbookComment';
import { type WorkbookComment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookCommentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookComment;
}
