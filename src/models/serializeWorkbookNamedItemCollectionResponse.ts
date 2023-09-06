import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWorkbookNamedItem } from './serializeWorkbookNamedItem';
import { type WorkbookNamedItem } from './workbookNamedItem';
import { type WorkbookNamedItemCollectionResponse } from './workbookNamedItemCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookNamedItemCollectionResponse(writer: SerializationWriter, workbookNamedItemCollectionResponse: WorkbookNamedItemCollectionResponse | undefined = {} as WorkbookNamedItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookNamedItemCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookNamedItem>("value", workbookNamedItemCollectionResponse.value, serializeWorkbookNamedItem);
}
