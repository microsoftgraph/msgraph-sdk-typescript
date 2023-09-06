import { deserializeIntoWorkbookPivotTableCollectionResponse } from './deserializeIntoWorkbookPivotTableCollectionResponse';
import { type WorkbookPivotTableCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookPivotTableCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookPivotTableCollectionResponse;
}
