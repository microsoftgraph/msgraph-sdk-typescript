import { deserializeIntoMarkUnreadResponse } from './deserializeIntoMarkUnreadResponse';
import { type MarkUnreadResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMarkUnreadResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMarkUnreadResponse;
}
