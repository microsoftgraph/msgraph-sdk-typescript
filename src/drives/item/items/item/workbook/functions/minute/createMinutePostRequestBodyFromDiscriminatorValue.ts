import {deserializeIntoMinutePostRequestBody} from './deserializeIntoMinutePostRequestBody';
import {MinutePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMinutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMinutePostRequestBody;
}
