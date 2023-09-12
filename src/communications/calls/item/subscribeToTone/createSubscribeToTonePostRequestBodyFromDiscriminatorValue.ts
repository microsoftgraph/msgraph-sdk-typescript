import { deserializeIntoSubscribeToTonePostRequestBody } from './deserializeIntoSubscribeToTonePostRequestBody';
import { type SubscribeToTonePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubscribeToTonePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscribeToTonePostRequestBody;
}
