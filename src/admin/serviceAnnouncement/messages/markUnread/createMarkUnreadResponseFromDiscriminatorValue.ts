import {MarkUnreadResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkUnreadResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkUnreadResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkUnreadResponseImpl();
}
