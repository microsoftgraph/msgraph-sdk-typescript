import {WorkbookTableImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTableImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTableImpl();
}
