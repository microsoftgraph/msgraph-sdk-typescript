import {deserializeIntoColumnLinkCollectionResponse} from './deserializeIntoColumnLinkCollectionResponse';
import {ColumnLinkCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnLinkCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnLinkCollectionResponse;
}
