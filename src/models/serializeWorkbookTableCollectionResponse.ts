import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookTable} from './serializeWorkbookTable';
import type {WorkbookTable} from './workbookTable';
import type {WorkbookTableCollectionResponse} from './workbookTableCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableCollectionResponse(writer: SerializationWriter, workbookTableCollectionResponse: WorkbookTableCollectionResponse | undefined = {} as WorkbookTableCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookTableCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookTable>("value", workbookTableCollectionResponse.value, serializeWorkbookTable);
}
