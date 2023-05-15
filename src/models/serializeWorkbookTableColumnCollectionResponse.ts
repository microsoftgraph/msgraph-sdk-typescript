import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookTableColumn} from './serializeWorkbookTableColumn';
import {WorkbookTableColumn} from './workbookTableColumn';
import {WorkbookTableColumnCollectionResponse} from './workbookTableColumnCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableColumnCollectionResponse(writer: SerializationWriter, workbookTableColumnCollectionResponse: WorkbookTableColumnCollectionResponse | undefined = {} as WorkbookTableColumnCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookTableColumnCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookTableColumn>("value", workbookTableColumnCollectionResponse.value, serializeWorkbookTableColumn);
}
