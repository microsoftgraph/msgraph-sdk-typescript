import { deserializeIntoGetPresencesByUserIdPostRequestBody } from './deserializeIntoGetPresencesByUserIdPostRequestBody';
import { type GetPresencesByUserIdPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPresencesByUserIdPostRequestBody;
}
