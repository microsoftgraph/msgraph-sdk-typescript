import { deserializeIntoRoundDownPostRequestBody } from './deserializeIntoRoundDownPostRequestBody';
import { type RoundDownPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoundDownPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoundDownPostRequestBody;
}
