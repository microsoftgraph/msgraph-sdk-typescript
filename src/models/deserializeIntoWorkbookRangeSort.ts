import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type WorkbookRangeSort } from './workbookRangeSort';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeSort(workbookRangeSort: WorkbookRangeSort | undefined = {} as WorkbookRangeSort) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeSort),
    }
}
