import { deserializeIntoAveragePostRequestBody } from './deserializeIntoAveragePostRequestBody';
import { type AveragePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAveragePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAveragePostRequestBody;
}
