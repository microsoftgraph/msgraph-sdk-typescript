import {deserializeIntoWorkbookTableRowCollectionResponse} from './deserializeIntoWorkbookTableRowCollectionResponse';
import {WorkbookTableRowCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableRowCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableRowCollectionResponse;
}
