import {deserializeIntoSubscribeToTonePostRequestBody} from './deserializeIntoSubscribeToTonePostRequestBody';
import {SubscribeToTonePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribeToTonePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscribeToTonePostRequestBody;
}
