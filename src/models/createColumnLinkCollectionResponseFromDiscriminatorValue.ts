import {ColumnLinkCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnLinkCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ColumnLinkCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ColumnLinkCollectionResponseImpl();
}
