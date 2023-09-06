import { deserializeIntoRandBetweenPostRequestBody } from './deserializeIntoRandBetweenPostRequestBody';
import { type RandBetweenPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRandBetweenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRandBetweenPostRequestBody;
}
