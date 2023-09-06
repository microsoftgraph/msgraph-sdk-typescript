import { serializeEntity } from './serializeEntity';
import { type WorkbookRangeSort } from './workbookRangeSort';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeSort(writer: SerializationWriter, workbookRangeSort: WorkbookRangeSort | undefined = {} as WorkbookRangeSort) : void {
        serializeEntity(writer, workbookRangeSort)
}
