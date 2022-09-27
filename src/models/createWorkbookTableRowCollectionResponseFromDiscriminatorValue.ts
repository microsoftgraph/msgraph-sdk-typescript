import {WorkbookTableRowCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableRowCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTableRowCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTableRowCollectionResponse();
}
