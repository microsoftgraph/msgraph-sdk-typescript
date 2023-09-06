import { deserializeIntoColumnLinkCollectionResponse } from './deserializeIntoColumnLinkCollectionResponse';
import { type ColumnLinkCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createColumnLinkCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnLinkCollectionResponse;
}
