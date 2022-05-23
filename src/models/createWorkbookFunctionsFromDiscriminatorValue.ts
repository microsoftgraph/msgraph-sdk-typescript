import {WorkbookFunctionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFunctionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookFunctionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookFunctionsImpl();
}
