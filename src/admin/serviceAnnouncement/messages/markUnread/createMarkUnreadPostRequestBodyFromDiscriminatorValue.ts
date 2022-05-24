import {MarkUnreadPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkUnreadPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkUnreadPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkUnreadPostRequestBodyImpl();
}
