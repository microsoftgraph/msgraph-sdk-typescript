import {deserializeIntoWorkbookNamedItemCollectionResponse} from './deserializeIntoWorkbookNamedItemCollectionResponse';
import {WorkbookNamedItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookNamedItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookNamedItemCollectionResponse;
}
