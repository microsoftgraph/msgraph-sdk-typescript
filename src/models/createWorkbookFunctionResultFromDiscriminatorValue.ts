import {WorkbookFunctionResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFunctionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookFunctionResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookFunctionResultImpl();
}
