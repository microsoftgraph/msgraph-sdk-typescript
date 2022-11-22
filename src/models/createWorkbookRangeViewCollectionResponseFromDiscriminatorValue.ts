import {WorkbookRangeViewCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeViewCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeViewCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeViewCollectionResponse();
}
