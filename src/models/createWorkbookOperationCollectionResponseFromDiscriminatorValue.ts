import {WorkbookOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookOperationCollectionResponse();
}
