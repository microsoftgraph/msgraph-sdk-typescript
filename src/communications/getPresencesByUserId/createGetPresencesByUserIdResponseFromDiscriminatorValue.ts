import {deserializeIntoGetPresencesByUserIdResponse} from './deserializeIntoGetPresencesByUserIdResponse';
import {GetPresencesByUserIdResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPresencesByUserIdResponse;
}
