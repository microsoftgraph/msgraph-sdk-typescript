import {WorkbookTableColumnImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTableColumnImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTableColumnImpl();
}
