import {deserializeIntoWorkbookTableCollectionResponse} from './deserializeIntoWorkbookTableCollectionResponse';
import {WorkbookTableCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableCollectionResponse;
}
