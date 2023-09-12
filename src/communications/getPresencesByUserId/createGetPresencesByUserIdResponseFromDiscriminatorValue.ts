import { deserializeIntoGetPresencesByUserIdResponse } from './deserializeIntoGetPresencesByUserIdResponse';
import { type GetPresencesByUserIdResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPresencesByUserIdResponse;
}
