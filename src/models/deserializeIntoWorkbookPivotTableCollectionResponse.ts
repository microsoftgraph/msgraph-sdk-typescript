import {createWorkbookPivotTableFromDiscriminatorValue} from './createWorkbookPivotTableFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookPivotTable} from './serializeWorkbookPivotTable';
import {WorkbookPivotTable} from './workbookPivotTable';
import {WorkbookPivotTableCollectionResponse} from './workbookPivotTableCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookPivotTableCollectionResponse(workbookPivotTableCollectionResponse: WorkbookPivotTableCollectionResponse | undefined = {} as WorkbookPivotTableCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookPivotTableCollectionResponse),
        "value": n => { workbookPivotTableCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookPivotTable>(createWorkbookPivotTableFromDiscriminatorValue); },
    }
}
