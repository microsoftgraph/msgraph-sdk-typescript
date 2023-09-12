import { deserializeIntoWorkbookCommentCollectionResponse } from './deserializeIntoWorkbookCommentCollectionResponse';
import { type WorkbookCommentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookCommentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookCommentCollectionResponse;
}
