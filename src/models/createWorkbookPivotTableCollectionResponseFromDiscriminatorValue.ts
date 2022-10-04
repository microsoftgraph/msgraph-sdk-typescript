import {WorkbookPivotTableCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookPivotTableCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookPivotTableCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookPivotTableCollectionResponse();
}
