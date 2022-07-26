import {WorkbookFunctionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFunctionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookFunctionResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookFunctionResult();
}
