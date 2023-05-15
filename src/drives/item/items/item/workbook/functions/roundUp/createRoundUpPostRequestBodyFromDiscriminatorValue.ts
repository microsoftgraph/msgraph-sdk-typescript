import {deserializeIntoRoundUpPostRequestBody} from './deserializeIntoRoundUpPostRequestBody';
import {RoundUpPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoundUpPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoundUpPostRequestBody;
}
