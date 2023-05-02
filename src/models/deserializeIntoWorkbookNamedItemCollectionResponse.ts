import {createWorkbookNamedItemFromDiscriminatorValue} from './createWorkbookNamedItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookNamedItem} from './serializeWorkbookNamedItem';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookNamedItemCollectionResponse} from './workbookNamedItemCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookNamedItemCollectionResponse(workbookNamedItemCollectionResponse: WorkbookNamedItemCollectionResponse | undefined = {} as WorkbookNamedItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookNamedItemCollectionResponse),
        "value": n => { workbookNamedItemCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookNamedItem>(createWorkbookNamedItemFromDiscriminatorValue); },
    }
}
