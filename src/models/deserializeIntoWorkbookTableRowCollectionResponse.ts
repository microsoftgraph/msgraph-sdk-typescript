import { createWorkbookTableRowFromDiscriminatorValue } from './createWorkbookTableRowFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWorkbookTableRow } from './serializeWorkbookTableRow';
import { type WorkbookTableRow } from './workbookTableRow';
import { type WorkbookTableRowCollectionResponse } from './workbookTableRowCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableRowCollectionResponse(workbookTableRowCollectionResponse: WorkbookTableRowCollectionResponse | undefined = {} as WorkbookTableRowCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookTableRowCollectionResponse),
        "value": n => { workbookTableRowCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookTableRow>(createWorkbookTableRowFromDiscriminatorValue); },
    }
}
