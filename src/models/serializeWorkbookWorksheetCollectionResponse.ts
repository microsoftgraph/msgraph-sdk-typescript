import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWorkbookWorksheet } from './serializeWorkbookWorksheet';
import { type WorkbookWorksheet } from './workbookWorksheet';
import { type WorkbookWorksheetCollectionResponse } from './workbookWorksheetCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookWorksheetCollectionResponse(writer: SerializationWriter, workbookWorksheetCollectionResponse: WorkbookWorksheetCollectionResponse | undefined = {} as WorkbookWorksheetCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookWorksheetCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookWorksheet>("value", workbookWorksheetCollectionResponse.value, serializeWorkbookWorksheet);
}
