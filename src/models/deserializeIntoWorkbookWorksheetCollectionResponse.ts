import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {WorkbookWorksheet} from './workbookWorksheet';
import {WorkbookWorksheetCollectionResponse} from './workbookWorksheetCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookWorksheetCollectionResponse(workbookWorksheetCollectionResponse: WorkbookWorksheetCollectionResponse | undefined = {} as WorkbookWorksheetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookWorksheetCollectionResponse),
        "value": n => { workbookWorksheetCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
    }
}
