import {WorkbookTableCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookTableCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookTableCollectionResponse();
}
