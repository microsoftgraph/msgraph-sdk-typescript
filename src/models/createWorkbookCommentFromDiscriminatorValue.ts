import {WorkbookCommentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookCommentFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookCommentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookCommentImpl();
}
