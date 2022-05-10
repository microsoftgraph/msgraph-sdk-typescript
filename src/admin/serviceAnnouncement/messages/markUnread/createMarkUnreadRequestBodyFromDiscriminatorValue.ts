import {MarkUnreadRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkUnreadRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkUnreadRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkUnreadRequestBodyImpl();
}
