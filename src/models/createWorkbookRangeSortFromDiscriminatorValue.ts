import {deserializeIntoWorkbookRangeSort} from './deserializeIntoWorkbookRangeSort';
import {WorkbookRangeSort} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeSortFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookRangeSort;
}
