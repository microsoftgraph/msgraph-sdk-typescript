import {deserializeIntoForwardPostRequestBody} from './deserializeIntoForwardPostRequestBody';
import {ForwardPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createForwardPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoForwardPostRequestBody;
}
