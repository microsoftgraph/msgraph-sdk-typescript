import {deserializeIntoAcquireAccessTokenPostRequestBody} from './deserializeIntoAcquireAccessTokenPostRequestBody';
import {AcquireAccessTokenPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcquireAccessTokenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcquireAccessTokenPostRequestBody;
}
