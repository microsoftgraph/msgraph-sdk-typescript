import {WorkbookOperationErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookOperationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookOperationErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookOperationErrorImpl();
}
