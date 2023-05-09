import {deserializeIntoGetPresencesByUserIdPostRequestBody} from './deserializeIntoGetPresencesByUserIdPostRequestBody';
import {GetPresencesByUserIdPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPresencesByUserIdPostRequestBody;
}
