import { deserializeIntoWorkbookTableColumnCollectionResponse } from './deserializeIntoWorkbookTableColumnCollectionResponse';
import { type WorkbookTableColumnCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookTableColumnCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableColumnCollectionResponse;
}
