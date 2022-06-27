import {WorkbookRangeSortImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeSortFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeSortImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeSortImpl();
}
