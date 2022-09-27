import {WorkbookNamedItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookNamedItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookNamedItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookNamedItemCollectionResponse();
}
