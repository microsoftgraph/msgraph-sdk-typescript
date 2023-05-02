import {serializeEntity} from './serializeEntity';
import {WorkbookRangeSort} from './workbookRangeSort';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeSort(writer: SerializationWriter, workbookRangeSort: WorkbookRangeSort | undefined = {} as WorkbookRangeSort) : void {
        serializeEntity(writer, workbookRangeSort)
}
