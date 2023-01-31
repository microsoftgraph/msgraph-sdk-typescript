import {MarkUnreadPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkUnreadPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkUnreadPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkUnreadPostRequestBody();
}
