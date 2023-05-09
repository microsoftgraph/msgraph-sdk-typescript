import {deserializeIntoWorkbookOperationCollectionResponse} from './deserializeIntoWorkbookOperationCollectionResponse';
import {WorkbookOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookOperationCollectionResponse;
}
