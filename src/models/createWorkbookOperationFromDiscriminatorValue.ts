import {WorkbookOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookOperationImpl();
}
