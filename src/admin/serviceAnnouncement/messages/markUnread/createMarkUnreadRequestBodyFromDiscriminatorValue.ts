import {MarkUnreadRequestBody} from './markUnreadRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkUnreadRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkUnreadRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkUnreadRequestBody();
}
