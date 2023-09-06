import { deserializeIntoWorkbookNamedItemCollectionResponse } from './deserializeIntoWorkbookNamedItemCollectionResponse';
import { type WorkbookNamedItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookNamedItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookNamedItemCollectionResponse;
}
