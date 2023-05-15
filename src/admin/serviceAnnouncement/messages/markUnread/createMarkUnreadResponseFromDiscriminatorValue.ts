import {deserializeIntoMarkUnreadResponse} from './deserializeIntoMarkUnreadResponse';
import {MarkUnreadResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkUnreadResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMarkUnreadResponse;
}
