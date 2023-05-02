import {deserializeIntoWorkbookTableSort} from './deserializeIntoWorkbookTableSort';
import {WorkbookTableSort} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableSortFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableSort;
}
