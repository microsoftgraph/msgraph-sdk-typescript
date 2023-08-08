import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookTableColumn} from './serializeWorkbookTableColumn';
import type {WorkbookTableColumn} from './workbookTableColumn';
import type {WorkbookTableColumnCollectionResponse} from './workbookTableColumnCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableColumnCollectionResponse(writer: SerializationWriter, workbookTableColumnCollectionResponse: WorkbookTableColumnCollectionResponse | undefined = {} as WorkbookTableColumnCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookTableColumnCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookTableColumn>("value", workbookTableColumnCollectionResponse.value, serializeWorkbookTableColumn);
}
