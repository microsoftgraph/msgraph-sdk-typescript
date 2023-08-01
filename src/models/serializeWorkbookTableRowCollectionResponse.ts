import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookTableRow} from './serializeWorkbookTableRow';
import type {WorkbookTableRow} from './workbookTableRow';
import type {WorkbookTableRowCollectionResponse} from './workbookTableRowCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableRowCollectionResponse(writer: SerializationWriter, workbookTableRowCollectionResponse: WorkbookTableRowCollectionResponse | undefined = {} as WorkbookTableRowCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookTableRowCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookTableRow>("value", workbookTableRowCollectionResponse.value, serializeWorkbookTableRow);
}
