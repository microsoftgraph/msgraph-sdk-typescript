import { deserializeIntoAverageAPostRequestBody } from './deserializeIntoAverageAPostRequestBody';
import { type AverageAPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAverageAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAverageAPostRequestBody;
}
