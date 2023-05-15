import {deserializeIntoRoundPostRequestBody} from './deserializeIntoRoundPostRequestBody';
import {RoundPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoundPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoundPostRequestBody;
}
