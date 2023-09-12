import { deserializeIntoWorkbookTableRowCollectionResponse } from './deserializeIntoWorkbookTableRowCollectionResponse';
import { type WorkbookTableRowCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookTableRowCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableRowCollectionResponse;
}
