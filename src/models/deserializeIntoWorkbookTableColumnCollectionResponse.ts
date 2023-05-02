import {createWorkbookTableColumnFromDiscriminatorValue} from './createWorkbookTableColumnFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookTableColumn} from './serializeWorkbookTableColumn';
import {WorkbookTableColumn} from './workbookTableColumn';
import {WorkbookTableColumnCollectionResponse} from './workbookTableColumnCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableColumnCollectionResponse(workbookTableColumnCollectionResponse: WorkbookTableColumnCollectionResponse | undefined = {} as WorkbookTableColumnCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookTableColumnCollectionResponse),
        "value": n => { workbookTableColumnCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookTableColumn>(createWorkbookTableColumnFromDiscriminatorValue); },
    }
}
