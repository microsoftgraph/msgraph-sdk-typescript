import {WorkbookSortFieldImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookSortFieldFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookSortFieldImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookSortFieldImpl();
}
