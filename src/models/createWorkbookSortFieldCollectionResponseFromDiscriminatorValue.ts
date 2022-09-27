import {WorkbookSortFieldCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookSortFieldCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookSortFieldCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookSortFieldCollectionResponse();
}
