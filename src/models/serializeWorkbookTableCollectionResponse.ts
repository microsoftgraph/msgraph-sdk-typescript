import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWorkbookTable } from './serializeWorkbookTable';
import { type WorkbookTable } from './workbookTable';
import { type WorkbookTableCollectionResponse } from './workbookTableCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableCollectionResponse(writer: SerializationWriter, workbookTableCollectionResponse: WorkbookTableCollectionResponse | undefined = {} as WorkbookTableCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookTableCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookTable>("value", workbookTableCollectionResponse.value, serializeWorkbookTable);
}
