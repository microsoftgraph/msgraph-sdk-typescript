import { createWorkbookOperationFromDiscriminatorValue } from './createWorkbookOperationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWorkbookOperation } from './serializeWorkbookOperation';
import { type WorkbookOperation } from './workbookOperation';
import { type WorkbookOperationCollectionResponse } from './workbookOperationCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookOperationCollectionResponse(workbookOperationCollectionResponse: WorkbookOperationCollectionResponse | undefined = {} as WorkbookOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookOperationCollectionResponse),
        "value": n => { workbookOperationCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookOperation>(createWorkbookOperationFromDiscriminatorValue); },
    }
}
