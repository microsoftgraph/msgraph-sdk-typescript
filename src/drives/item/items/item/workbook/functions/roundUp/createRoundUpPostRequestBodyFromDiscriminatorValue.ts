import { deserializeIntoRoundUpPostRequestBody } from './deserializeIntoRoundUpPostRequestBody';
import { type RoundUpPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRoundUpPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoundUpPostRequestBody;
}
