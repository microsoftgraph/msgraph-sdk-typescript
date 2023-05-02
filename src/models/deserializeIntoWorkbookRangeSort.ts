import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookRangeSort} from './workbookRangeSort';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeSort(workbookRangeSort: WorkbookRangeSort | undefined = {} as WorkbookRangeSort) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeSort),
    }
}
