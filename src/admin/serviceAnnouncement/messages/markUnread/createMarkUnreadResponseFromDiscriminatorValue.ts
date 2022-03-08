import {MarkUnreadResponse} from './markUnreadResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkUnreadResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkUnreadResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkUnreadResponse();
}
