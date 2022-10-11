import {WorkbookRangeBorderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeBorderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeBorderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeBorderCollectionResponse();
}
