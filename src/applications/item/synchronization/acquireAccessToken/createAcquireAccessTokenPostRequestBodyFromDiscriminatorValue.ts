import { deserializeIntoAcquireAccessTokenPostRequestBody } from './deserializeIntoAcquireAccessTokenPostRequestBody';
import { type AcquireAccessTokenPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAcquireAccessTokenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcquireAccessTokenPostRequestBody;
}
