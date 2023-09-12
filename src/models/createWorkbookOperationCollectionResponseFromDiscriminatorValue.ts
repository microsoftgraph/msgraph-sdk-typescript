import { deserializeIntoWorkbookOperationCollectionResponse } from './deserializeIntoWorkbookOperationCollectionResponse';
import { type WorkbookOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookOperationCollectionResponse;
}
