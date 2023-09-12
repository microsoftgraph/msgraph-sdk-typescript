import { deserializeIntoMinutePostRequestBody } from './deserializeIntoMinutePostRequestBody';
import { type MinutePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMinutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMinutePostRequestBody;
}
