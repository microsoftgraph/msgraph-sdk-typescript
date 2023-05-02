import {serializeEntity} from './serializeEntity';
import {serializeWorkbookSortField} from './serializeWorkbookSortField';
import {WorkbookSortField} from './workbookSortField';
import {WorkbookTableSort} from './workbookTableSort';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableSort(writer: SerializationWriter, workbookTableSort: WorkbookTableSort | undefined = {} as WorkbookTableSort) : void {
        serializeEntity(writer, workbookTableSort)
        writer.writeCollectionOfObjectValues<WorkbookSortField>("fields", workbookTableSort.fields, serializeWorkbookSortField);
        writer.writeBooleanValue("matchCase", workbookTableSort.matchCase);
        writer.writeStringValue("method", workbookTableSort.method);
}
