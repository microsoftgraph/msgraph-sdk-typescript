import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookTableRow} from './serializeWorkbookTableRow';
import {WorkbookTableRow} from './workbookTableRow';
import {WorkbookTableRowCollectionResponse} from './workbookTableRowCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableRowCollectionResponse(writer: SerializationWriter, workbookTableRowCollectionResponse: WorkbookTableRowCollectionResponse | undefined = {} as WorkbookTableRowCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookTableRowCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookTableRow>("value", workbookTableRowCollectionResponse.value, serializeWorkbookTableRow);
}
