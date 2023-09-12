import { deserializeIntoRoundPostRequestBody } from './deserializeIntoRoundPostRequestBody';
import { type RoundPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoundPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoundPostRequestBody;
}
