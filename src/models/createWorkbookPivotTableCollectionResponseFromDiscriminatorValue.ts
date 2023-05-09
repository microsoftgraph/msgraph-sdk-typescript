import {deserializeIntoWorkbookPivotTableCollectionResponse} from './deserializeIntoWorkbookPivotTableCollectionResponse';
import {WorkbookPivotTableCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookPivotTableCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookPivotTableCollectionResponse;
}
