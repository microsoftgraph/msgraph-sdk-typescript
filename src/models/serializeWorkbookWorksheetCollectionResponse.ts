import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {WorkbookWorksheet} from './workbookWorksheet';
import {WorkbookWorksheetCollectionResponse} from './workbookWorksheetCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookWorksheetCollectionResponse(writer: SerializationWriter, workbookWorksheetCollectionResponse: WorkbookWorksheetCollectionResponse | undefined = {} as WorkbookWorksheetCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookWorksheetCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookWorksheet>("value", workbookWorksheetCollectionResponse.value, serializeWorkbookWorksheet);
}
