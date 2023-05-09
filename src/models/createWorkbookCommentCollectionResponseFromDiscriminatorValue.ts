import {deserializeIntoWorkbookCommentCollectionResponse} from './deserializeIntoWorkbookCommentCollectionResponse';
import {WorkbookCommentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookCommentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookCommentCollectionResponse;
}
