import {createWorkbookOperationFromDiscriminatorValue} from './createWorkbookOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookOperation} from './serializeWorkbookOperation';
import {WorkbookOperation} from './workbookOperation';
import {WorkbookOperationCollectionResponse} from './workbookOperationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookOperationCollectionResponse(workbookOperationCollectionResponse: WorkbookOperationCollectionResponse | undefined = {} as WorkbookOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookOperationCollectionResponse),
        "value": n => { workbookOperationCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookOperation>(createWorkbookOperationFromDiscriminatorValue); },
    }
}
