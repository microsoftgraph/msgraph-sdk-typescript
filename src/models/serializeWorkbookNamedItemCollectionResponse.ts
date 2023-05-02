import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookNamedItem} from './serializeWorkbookNamedItem';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookNamedItemCollectionResponse} from './workbookNamedItemCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookNamedItemCollectionResponse(writer: SerializationWriter, workbookNamedItemCollectionResponse: WorkbookNamedItemCollectionResponse | undefined = {} as WorkbookNamedItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookNamedItemCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookNamedItem>("value", workbookNamedItemCollectionResponse.value, serializeWorkbookNamedItem);
}
