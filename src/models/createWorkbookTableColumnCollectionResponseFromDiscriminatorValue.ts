import {deserializeIntoWorkbookTableColumnCollectionResponse} from './deserializeIntoWorkbookTableColumnCollectionResponse';
import {WorkbookTableColumnCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableColumnCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableColumnCollectionResponse;
}
