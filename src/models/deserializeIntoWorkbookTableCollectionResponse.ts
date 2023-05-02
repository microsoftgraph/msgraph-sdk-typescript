import {createWorkbookTableFromDiscriminatorValue} from './createWorkbookTableFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookTable} from './serializeWorkbookTable';
import {WorkbookTable} from './workbookTable';
import {WorkbookTableCollectionResponse} from './workbookTableCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableCollectionResponse(workbookTableCollectionResponse: WorkbookTableCollectionResponse | undefined = {} as WorkbookTableCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookTableCollectionResponse),
        "value": n => { workbookTableCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookTable>(createWorkbookTableFromDiscriminatorValue); },
    }
}
