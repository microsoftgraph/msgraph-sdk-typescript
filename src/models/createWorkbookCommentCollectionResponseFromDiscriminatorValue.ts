import {WorkbookCommentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookCommentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookCommentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookCommentCollectionResponse();
}
