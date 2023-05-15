import {createWorkbookTableRowFromDiscriminatorValue} from './createWorkbookTableRowFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookTableRow} from './serializeWorkbookTableRow';
import {WorkbookTableRow} from './workbookTableRow';
import {WorkbookTableRowCollectionResponse} from './workbookTableRowCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableRowCollectionResponse(workbookTableRowCollectionResponse: WorkbookTableRowCollectionResponse | undefined = {} as WorkbookTableRowCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookTableRowCollectionResponse),
        "value": n => { workbookTableRowCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookTableRow>(createWorkbookTableRowFromDiscriminatorValue); },
    }
}
