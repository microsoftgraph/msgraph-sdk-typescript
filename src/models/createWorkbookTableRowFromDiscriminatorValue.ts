import {WorkbookTableRowImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableRowFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTableRowImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTableRowImpl();
}
