import { createWorkbookWorksheetFromDiscriminatorValue } from './createWorkbookWorksheetFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWorkbookWorksheet } from './serializeWorkbookWorksheet';
import { type WorkbookWorksheet } from './workbookWorksheet';
import { type WorkbookWorksheetCollectionResponse } from './workbookWorksheetCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookWorksheetCollectionResponse(workbookWorksheetCollectionResponse: WorkbookWorksheetCollectionResponse | undefined = {} as WorkbookWorksheetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookWorksheetCollectionResponse),
        "value": n => { workbookWorksheetCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
    }
}
