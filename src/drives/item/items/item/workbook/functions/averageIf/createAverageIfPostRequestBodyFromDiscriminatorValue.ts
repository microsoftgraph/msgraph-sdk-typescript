import { deserializeIntoAverageIfPostRequestBody } from './deserializeIntoAverageIfPostRequestBody';
import { type AverageIfPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAverageIfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAverageIfPostRequestBody;
}
