import {ColumnLinkImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) : ColumnLinkImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ColumnLinkImpl();
}
