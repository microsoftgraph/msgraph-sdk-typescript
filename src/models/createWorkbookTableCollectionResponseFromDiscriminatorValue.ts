import { deserializeIntoWorkbookTableCollectionResponse } from './deserializeIntoWorkbookTableCollectionResponse';
import { type WorkbookTableCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookTableCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableCollectionResponse;
}
