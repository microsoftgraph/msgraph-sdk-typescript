import {WorkbookTableColumnCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableColumnCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTableColumnCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTableColumnCollectionResponse();
}
